const mongoose = require("mongoose");
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;


const CustomerNew = new Schema({
  code: {type: String},
  name: { type: String },
  product: {type: String},
  status: {
    type: String,
    default: generateRandom = () => {
      var items = ["Lỗi", "Tốt"];
      return items[Math.floor(Math.random()*items.length)];
    }
  },
  slug: { type: String, slug: 'name', unique: true }
}, {
  timestamps: true,
});

module.exports = mongoose.model('customerNew', CustomerNew);
