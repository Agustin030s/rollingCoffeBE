import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config"; //permite procesar variables de entorno

console.log("bienvenidos");

// 1 - configurar un puerto
const app = express();
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log("Estoy en el puerto " + app.get("port"));
});

// 2 - configurar middlewares
app.use(cors()); //me permite aceptar conexiones remotas
app.use(morgan("dev")); //para ver mensajes en consola
app.use(express.json()); //permite interpretar el formato json
app.use(express.urlencoded({ extended: true })); //permite interpretar los datos del body de una solicitud

// 3 - configuracion de las rutas
app.get("/", (req, res) => {
  console.log("hola mundo");
  res.send("desde el backend de rollingCoffee");
});
