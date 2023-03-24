const Customer = require('../models/Customer')
const Product = require('../models/Product')
const { mongooseToObject } = require('../../util/mongoose');
const Agency = require('../models/Agency');
const Insurance = require('../models/Insurance');
const AgencyFeedback = require('../models/AgencyFeedback');
class CustomerController {

    create(req, res, next) {
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
        
        Customer.findById(req.params.id, function (err, docs) {
        if (err){
            res.send(err);
        }
        else{
            // const product_lines = new Agency(docs);
            Customer.deleteOne({_id: req.params.id})
            .then(() => {
                AgencyFeedback.insertMany(docs);
                res.redirect('back');
                // res.redirect('/me/stored/customer');
                
            })
            .catch(next);
        }
    });
}

   

    destroy(req,res,next) {
        Customer.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    
}
module.exports = new CustomerController;