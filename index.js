import express from "express";

console.log("bienvenidos");

// 1 - configurar un puerto
const app = express();
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log("Estoy en el puerto " + app.get("port"));
});

// 2 - configurar middlewares

// 3 - configuracion de las rutas
