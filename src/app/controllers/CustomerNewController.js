const Customer = require('../models/Customer')
const CustomerNew = require('../models/CustomerNew')
const Product = require('../models/Product')
const { mongooseToObject } = require('../../util/mongoose');
const Agency = require('../models/Agency');
const AgencyNew = require('../models/AgencyNew');
const Insurance = require('../models/Insurance');
const AgencyFeedback = require('../models/AgencyFeedback');
const AgencyFeedbackNew = require('../models/AgencyFeedbackNew');
class CustomerNewController {

    create(req, res, next) {
        AgencyNew.findById(req.params.id)
            .then(agencyNews => res.render('customers/createNew', {
                agencyNews: mongooseToObject(agencyNews)
            }))
            .catch(next)
    }

    store(req, res, next) {
        
        AgencyNew.deleteOne({name: req.body.product})
        .then(() => {
            
            const formData = req.body;
        const product_lines = new CustomerNew(formData);
        product_lines.save();
            res.redirect('/me/stored/customerNews');
            
        })
        .catch(next);
    }

    delivery(req,res,next) {
        
        CustomerNew.findById(req.params.id, function (err, docs) {
        if (err){
            res.send(err);
        }
        else{
            // const product_lines = new Agency(docs);
            CustomerNew.deleteOne({_id: req.params.id})
            .then(() => {
                AgencyFeedbackNew.insertMany(docs);
                res.redirect('back');
                // res.redirect('/me/stored/customer');
                
            })
            .catch(next);
        }
    });
}

   

    destroy(req,res,next) {
        CustomerNew.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    
}
module.exports = new CustomerNewController;