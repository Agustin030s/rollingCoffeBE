import mongoose, { Schema } from "mongoose";

const productosSchema = new Schema({
  nombreProducto: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 30,
    unique: true,
  },
  precio: {
    type: Number,
    required: true,
    min: 100,
    max: 10000,
  },
  imagen: {
    type: String,
    required: true,
    validate: {
      validator: (valor) => {
        const pattern =
          /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i;
        return pattern.test(valor);
      },
      message: (props) => `${props.value} no es una url válida`,
    },
  },
  categoria: {
    type: String,
    required: true,
    enum: ["Infusiones", "Batidos", "Dulce", "Salado"],
  },
  descripcionBreve: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 150,
  },
  descripcionAmplia: {
    type: String,
    required: true,
    minLength: 15,
    maxLength: 1000,
  },
});

//vamos a  generar el modelo del producto
const Producto = mongoose.model("producto", productosSchema);

export default Producto;
