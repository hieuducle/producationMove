const mongoose = require("mongoose");
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;


const Signup = new Schema({
    name:{
        type:String
    },
    password:{
        type:String
    },
  slug: { type: String, slug: 'name', unique: true }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Signup', Signup);
