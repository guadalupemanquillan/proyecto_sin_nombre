const express = require('express');
const connectDB = require('./server.js')
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

const mainRouter = require('./routes/index.routes.js');
app.use("/api/", mainRouter);

async function startServer() {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀 Servidor escuchando en puerto ${PORT}`);
  });
}

startServer();


