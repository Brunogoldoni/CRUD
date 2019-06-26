let mongoose = requerid('mongoose');
let Schema = mongoose.Schema;

let departamentSchema = new Schema({
  name: String,
  price: Number,
  stock: Number,
  departaments: []
}, {versionKey: false});

mondule.exports = mongoose.model("Product", departamentSchema);