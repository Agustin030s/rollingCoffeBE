import Producto from "../database/models/producto.js";

export const listarProductos = (req, res) => {
  console.log("hola comision");
  res.send("aqui listar los productos");
};

export const crearProducto = async (req, res) => {
  try {
    //extraer los datos del body
    console.log(req.body);
    //agregar validacion de los datos del body
    const productoNuevo = new Producto(req.body);
    //pedirle a la base de datos que guarde el producto nuevo
    await productoNuevo.save();
    //enviar la respuesta al front
    res.status(201).json({
      message: "El producto fue creado exitosamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "El producto no pudo ser dado de alta",
    });
  }
};
