const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  image: { type: String },
  inStock: { type: Boolean, default: true },
  quantity: { type: Number, default: 0 }
}, { timestamps: true });

itemSchema.index({ name: 'text', description: 'text' });

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;