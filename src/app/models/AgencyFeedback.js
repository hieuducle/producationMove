const mongoose = require("mongoose");
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;


// console.log(random, months[random]);
// const Insurance = new Schema({
//   name: { type: String },
//   description: { type: String },
//   image: { type: String },
//   // status: {type:String, default: random},
  
//   slug: { type: String, slug: 'name', unique: true }
// }, {
//   timestamps: true,
// });
const AgencyFeedback = new Schema({
    code: {type: String},
    name: { type: String },
    product: {type: String},
    status: {type: String
    },
    slug: { type: String, slug: 'name', unique: true }
  }, {
    timestamps: true,
  });
mongoose.plugin(slug);
AgencyFeedback.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all'
});

module.exports = mongoose.model('agencyFeedback', AgencyFeedback);
