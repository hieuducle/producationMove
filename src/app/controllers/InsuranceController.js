const Customer = require('../models/Customer')
const Product = require('../models/Product')
const { mongooseToObject } = require('../../util/mongoose');
const Agency = require('../models/Agency');
const Insurance = require('../models/Insurance');
const AgencyFeedback = require('../models/AgencyFeedback');
const AgencyFeedbackInsurance = require('../models/AgencyFeedbackInsurance');
const Factory = require('../models/Factory');
const InsuranceFeedbackFactory = require('../models/InsuranceFeedbackFactory');
class InsuranceController {

    deliveryFactory(req,res,next) {
        
        Insurance.findById(req.params.id, function (err, docs) {
        if (err){
            res.send(err);
        }
        else{
            // const product_lines = new Agency(docs);
            Insurance.deleteOne({_id: req.params.id})
            .then(() => {
                InsuranceFeedbackFactory.insertMany(docs);
                res.redirect('back');
                // res.redirect('/me/stored/customer');
                
            })
            .catch(next);
        }
    });
}

    deliveryAgency(req,res,next) {
            
        Insurance.findById(req.params.id, function (err, docs) {
        if (err){
            res.send(err);
        }
        else{
            // const product_lines = new Agency(docs);
            Insurance.deleteOne({_id: req.params.id})
            .then(() => {
                AgencyFeedbackInsurance.insertMany(docs);
                res.redirect('back');
                // res.redirect('/me/stored/customer');
                
            })
            .catch(next);
        }
    });
    }

    

    fix(req,res,next) {
        Insurance.findById(req.params.id, function (err, docs) {
        if (err){
            res.send(err);
        }
        else{
            function fixStatusProduct() {
                var items = ["Lỗi", "Tốt"];
                return items[Math.floor(Math.random()*items.length)];
            }
            
            docs.status = fixStatusProduct();
            Insurance.updateOne({ _id: req.params.id}, docs)
            .then(() => res.redirect('/me/stored/insurance'))
            .catch(next);
            
        }
    });
    }

    

    
}
module.exports = new InsuranceController;