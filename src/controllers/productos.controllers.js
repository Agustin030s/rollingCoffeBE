import Producto from "../database/models/producto.js";

export const listarProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      message: "No se pueden listar los productos",
    });
  }
};

export const crearProducto = async (req, res) => {
  try {
    //extraer los datos del body
    const productoNuevo = new Producto(req.body);
    //agregar validacion de los datos del body
    //pedirle a la base de datos que guarde el producto nuevo
    await productoNuevo.save();
    //enviar la respuesta al front
    res.status(201).json({
      message: "El producto fue creado exitosamente",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "El producto no pudo ser dado de alta",
    });
  }
};

export const obtenerProducto = async (req, res) => {
  try {
    //extraer el parametro id
    const id = req.params.id;
    //buscar el producto en la BD
    const productoBuscado = await Producto.findById(id);
    //responder con el producto
    res.status(200).json(productoBuscado);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      message: "No se encontro el producto buscado",
    });
  }
};

export const editarProducto = async (req, res) =>{
  try {
    // extraer el id del producto a editar y los datos del produdcto a editar del req.body
    // buscar si encontramos el producto con el id
    // enviar un mensaje de error en caso de no encontrar el producto
    // editar el producto
    // contestamos al front con un status 200 
  } catch (error) {
    console.error(error);
  }
}
