const User = require("../../models/user.model");

const Test = require("../../models/test.model");

exports.verificarTestService = async ({ userId, testId, respuestas }) => {
  const user = await User.findById(userId);

  if (!user) throw new Error("Usuario no encontrado");

  const test = await Test.findById(testId).populate("logros", "nombre");
  if (!test) throw new Error("Test no encontrado");

  const totalPreguntas = test.preguntas.length;

  if (totalPreguntas !== respuestas.length)
    throw Error("Preguntas requeridas faltantes");
  const necesariasParaAprobar = Math.ceil(totalPreguntas * 0.8);

  let preguntasCorrectas = 0;
  let preguntasIncorrectas = 0;

  for (respuestaUsuario of respuestas) {
    const preguntaEnTest = test.preguntas.find(
      (pregunta) => pregunta.tituloPregunta === respuestaUsuario.pregunta
    );

    if (preguntaEnTest) {
      if (preguntaEnTest.respuestaCorrecta === respuestaUsuario.respuesta) {
        preguntasCorrectas++;
      } else {
        preguntasIncorrectas++;
      }
    }
  }
  const aprobado = preguntasCorrectas >= necesariasParaAprobar;
  // validar que cada logro del test no exista, para los que no existen no se hace nada y para los que
  // si existen se le pushea
  if (aprobado && test.logros.length > 0) {
    const nuevosLogros = test.logros.filter(
      (logro) => !user.logros.includes(logro._id)
    );
    if (nuevosLogros.length === 0) {
      return {
        message: "El usuario ya tiene todos los logros de este test",
       
      };
    } else {
      user.logros.push(...nuevosLogros);
      await user.save();
    }
  }
  return {
    totalPreguntas,
    necesariasParaAprobar,
    preguntasCorrectas,
    preguntasIncorrectas,
    aprobado,
    message: "Logros agregados con exito",
    logrosOtorgados: test.logros,
  };
};
