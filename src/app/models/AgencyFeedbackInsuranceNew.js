const mongoose = require("mongoose");
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const AgencyFeedbackInsuranceNew = new Schema({
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
AgencyFeedbackInsuranceNew.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all'
});

module.exports = mongoose.model('agencyFeedbackInsuranceNew', AgencyFeedbackInsuranceNew);
