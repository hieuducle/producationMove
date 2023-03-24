const Customer = require('../models/Customer')
const Product = require('../models/Product')
const { mongooseToObject } = require('../../util/mongoose');
const Agency = require('../models/Agency');
const Insurance = require('../models/Insurance');
const AgencyFeedback = require('../models/AgencyFeedback');
class AgencyFeedbackController {

    //get Course


    // get search   

    show(req, res, next) {
        Customer.findOne({ slug: req.params.slug })
            .then((customers) => {
                res.render('customers/showCustomer', { customers: mongooseToObject(customers) });
            })
            .catch(next);
    }


    create(req, res, next) {
        


            // Product.findById(req.params.id)
            // .then(product_lines => res.render('customers/create', {
            //     product_lines: mongooseToObject(product_lines)
            // }))
            // .catch(next)



            Agency.findById(req.params.id)
            .then(agencies => res.render('customers/create', {
                agencies: mongooseToObject(agencies)
            }))
            .catch(next)
    }

    store(req, res, next) {
        
        Agency.deleteOne({name: req.body.product})
        .then(() => {
            
            const formData = req.body;
        const product_lines = new Customer(formData);
        product_lines.save();
            res.redirect('/me/stored/customers');
            
        })
        .catch(next);
    }

    delivery(req,res,next) {
        
        AgencyFeedback.findById(req.params.id, function (err, docs) {
        if (err){
            res.send(err);
        }
        else{
            // const product_lines = new Agency(docs);
            AgencyFeedback.deleteOne({_id: req.params.id})
            .then(() => {
                Insurance.insertMany(docs);
                res.redirect('back');
                // res.redirect('/me/stored/customer');
                
            })
            .catch(next);
        }
    });
}

    edit(req, res, next) {
        Customer.findById(req.params.id)
            .then(customers => res.render('customers/edit', {
                customers: mongooseToObject(customers)
            }))
            .catch(next)
    }

    update(req, res, next) {
        // res.json(req.body);

        Customer.updateOne({ _id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/customers'))
            .catch(next);
    }

    destroy(req,res,next) {
        Customer.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    
}
module.exports = new AgencyFeedbackController;