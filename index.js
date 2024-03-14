import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config"; //permite procesar variables de entorno
import path from "path";
import { fileURLToPath } from "url";
import productosRouter from "./src/routes/productos.routes.js";
import "./src/database/database.js";

// 1 - configurar un puerto
const app = express();
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.info("Estoy en el puerto " + app.get("port"));
});

// 2 - configurar middlewares
app.use(cors()); //me permite aceptar conexiones remotas
app.use(morgan("dev")); //muestra información extra en la consola
app.use(express.json()); //permite interpretar el formato json
app.use(express.urlencoded({ extended: true })); //permite interpretar los datos del body de una solicitud

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "/public")));

// 3 - configuracion de las rutas
// app.get("/", (req, res) => {
//   console.log("hola mundo");
//   res.send("desde el backend de rollingCoffee");
// });
app.use("/api", productosRouter);
