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

export const editarProducto = async (req, res) => {
  try {
    // extraer el id del producto a editar y los datos del produdcto a editar del req.body
    const id = req.params.id;
    // buscar si encontramos el producto con el id
    const productoBuscado = await Producto.findById(id);
    //no encontre el producto buscado?
    if (!productoBuscado) {
      // enviar un mensaje de error en caso de no encontrar el producto
      return res.status(404).json({
        message: `El producto no fue encontrado`,
      });
    }
    // editar el producto
    await Producto.findByIdAndUpdate(id, req.body);
    // contestamos al front con un status 200
    res.status(200).json({
      message: "El produco fue editado correctamente",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Ocurrio un error al editar el producto",
    });
  }
};

export const borrarProducto = async (req, res) => {
  try {
    const id = req.params.id;
    const productoBuscado = await Producto.findById(id);
    if (!productoBuscado) {
      return res.status(404).json({
        message: `El producto no fue encontrado`,
      });
    }
    // editar el producto
    await Producto.findByIdAndDelete(id);
    // contestamos al front con un status 200
    res.status(200).json({
      message: "El produco fue eliminado correctamente",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Ocurrio un error al eliminar el producto",
    });
  }
};
