const Course = require('../models/Product')
const Customer = require('../models/Customer')
const fs = require('fs')

const { mongooseToObject } = require('../../util/mongoose');
const Agency = require('../models/Agency');
const AgencyNew = require('../models/AgencyNew');
const { doc } = require('prettier');
class AgencyNewController {

    // create(req, res, next) {
    //     res.render('product_lines/create');
    // }

    // store(req, res, next) {
    //     // res.json(req.body);
    //     const formData = req.body;
    //     const product_lines = new Course(formData);
    //     product_lines.save();
    //     // res.send('saved-courses');
    //     res.redirect('/me/stored/product_lines');

    // }
    // xoa mem
    destroy(req, res, next) {

        // res.send('destroy');
        AgencyNew.deleteOne({ _id: req.params.id })
            .then(() => {
                res.redirect('back');

            })
            .catch(next);
    }

}
module.exports = new AgencyNewController;