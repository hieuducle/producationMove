const Customer = require('../models/Customer')
const Product = require('../models/Product')
const { mongooseToObject } = require('../../util/mongoose');
const Agency = require('../models/Agency');
const Insurance = require('../models/Insurance');
const InsuranceNew = require('../models/InsuranceNew');
const AgencyFeedback = require('../models/AgencyFeedback');
const AgencyFeedbackInsurance = require('../models/AgencyFeedbackInsurance');
const AgencyFeedbackInsuranceNew = require('../models/AgencyFeedbackInsuranceNew');
const Factory = require('../models/Factory');
const InsuranceFeedbackFactory = require('../models/InsuranceFeedbackFactory');
const InsuranceFeedbackFactoryNew = require('../models/InsuranceFeedbackFactoryNew');

class InsuranceNewController {

    deliveryFactory(req,res,next) {
        
        InsuranceNew.findById(req.params.id, function (err, docs) {
        if (err){
            res.send(err);
        }
        else{
            // const product_lines = new Agency(docs);
            InsuranceNew.deleteOne({_id: req.params.id})
            .then(() => {
                InsuranceFeedbackFactoryNew.insertMany(docs);
                res.redirect('back');
                // res.redirect('/me/stored/customer');
                
            })
            .catch(next);
        }
    });
}

    deliveryAgency(req,res,next) {
            
        InsuranceNew.findById(req.params.id, function (err, docs) {
        if (err){
            res.send(err);
        }
        else{
            // const product_lines = new Agency(docs);
            InsuranceNew.deleteOne({_id: req.params.id})
            .then(() => {
                AgencyFeedbackInsuranceNew.insertMany(docs);
                res.redirect('back');
                // res.redirect('/me/stored/customer');
                
            })
            .catch(next);
        }
    });
    }

    

    fix(req,res,next) {
        InsuranceNew.findById(req.params.id, function (err, docs) {
        if (err){
            res.send(err);
        }
        else{
            function fixStatusProduct() {
                var items = ["Lỗi", "Tốt"];
                return items[Math.floor(Math.random()*items.length)];
            }
            
            docs.status = fixStatusProduct();
            InsuranceNew.updateOne({ _id: req.params.id}, docs)
            .then(() => res.redirect('/me/stored/insuranceNew'))
            .catch(next);
            
        }
    });
    }

    

    
}
module.exports = new InsuranceNewController;