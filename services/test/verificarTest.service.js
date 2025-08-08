const User = require("../../models/user.model");
const Test = require("../../models/test.model");
const Logros = require("../../models/logros.model");

exports.verificarTestService = async ({ userId, testId, respuestas }) => {
  const user = await User.findById(userId);
  if (!user) throw new Error("Usuario no encontrado");

  const test = await Test.findById(testId).populate("logros");
  if (!test) throw new Error("Test no encontrado");

  const totalPreguntas = test.preguntas.length;
  const necesariasParaAprobar = Math.ceil(totalPreguntas * 0.8);

  let preguntasCorrectas = 0;
  let preguntasIncorrectas = 0;

  for (const r of respuestas) {
    const pregunta = test.preguntas.find(p => p.tituloPregunta === r.pregunta);
    if (pregunta) {
      if (pregunta.respuestaCorrecta === r.respuesta) {
        preguntasCorrectas++;
      } else {
        preguntasIncorrectas++;
      }
    } else {
      preguntasIncorrectas++;
    }
  }

  const aprobado = preguntasCorrectas >= necesariasParaAprobar;

  if (aprobado && test.logros.length > 0) {
    const nuevosLogros = test.logros.map(logro => logro._id);
    user.logros.push(...nuevosLogros);
    await user.save();
  }

  return {
    totalPreguntas,
    necesariasParaAprobar,
    preguntasCorrectas,
    preguntasIncorrectas,
    aprobado,
    logrosOtorgados: aprobado ? test.logros : [],
  };
}
