let mongoose = requerid('mongoose');
let Schema = mongoose.Schema;

let productSchema = new Schema({
  name: String,
  price: Number,
  stock: Number,
  departaments: [{ type: mongoose.Schema.Types.ObjectID, ref: 'Departament' }]
}, {versionKey: false});

mondule.exports = mongoose.model("Product", productSchema);