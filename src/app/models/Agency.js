const mongoose = require("mongoose");
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;



const Agency = new Schema({
  name: { type: String },
  description: { type: String },
  image: { type: String },
  
  
  slug: { type: String, slug: 'name', unique: true }
}, {
  timestamps: true,
  
});

mongoose.plugin(slug);
Agency.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all'
});

module.exports = mongoose.model('agency', Agency);
