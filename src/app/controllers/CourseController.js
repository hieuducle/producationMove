const Course = require('../models/Product')
const Customer = require('../models/Customer')
const fs = require('fs')

const { mongooseToObject } = require('../../util/mongoose');
const Agency = require('../models/Agency');
const Factory = require('../models/Factory');
const { doc } = require('prettier');
const FactoryWarehouse = require('../models/FactoryWarehouse');
const FactoryWarehouseNew = require('../models/FactoryWarehouseNew');
class CourseController {

    //get Course
    // get search
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((product_lines) => {
                res.render('product_lines/show', { product_lines: mongooseToObject(product_lines) });
            })
            .catch(next);
    }

    create(req, res, next) {

        res.render('product_lines/create');
    }

    store(req, res, next) {
        // res.json(req.body);
        const formData = req.body;
        const product_lines = new Course(formData);
        product_lines.save();
        // res.send('saved-courses');
        res.redirect('/me/stored/admin');

    }

    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(product_lines => res.render('product_lines/edit', {
                product_lines: mongooseToObject(product_lines)
            }))
            .catch(next)
    }

    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/admin'))
            .catch(next);
    }

    deliveryFactory1(req, res, next) {
        Course.findById(req.params.id, function (err, docs) {
            if (err) {
                res.send(err);
            }
            else {

                FactoryWarehouse.insertMany(docs);

                res.redirect('/me/stored/admin');
            }
        });
    }

    deliveryFactory2(req, res, next) {
        
        Course.findById(req.params.id, function (err, docs) {
            if (err) {
                res.send(err);
            }
            else {

                FactoryWarehouseNew.insertMany(docs);

                res.redirect('/me/stored/admin');
            }
        });
    }
    // xoa mem
    destroy(req, res, next) {
        

        Course.delete({ _id: req.params.id })
            .then(() => {
                res.redirect('back');

            })
            .catch(next);


    }

    forceDestroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // patch
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);

    }


}
module.exports = new CourseController;