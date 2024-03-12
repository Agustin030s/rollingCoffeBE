import Producto from "../database/models/producto.js";

export const listarProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "No se pueden listar los productos",
    });
  }
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
