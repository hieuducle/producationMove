const Customer = require('../models/Customer')
const CustomerNew = require('../models/CustomerNew')
const Product = require('../models/Product')
const { mongooseToObject } = require('../../util/mongoose');
const Agency = require('../models/Agency');
const Insurance = require('../models/Insurance');
const AgencyFeedback = require('../models/AgencyFeedback');
const AgencyFeedbackInsurance = require('../models/AgencyFeedbackInsurance');
const AgencyFeedbackInsuranceNew = require('../models/AgencyFeedbackInsuranceNew');
class AgencyFeedbackInsuranceNewController {

    delivery(req,res,next) {
        
        AgencyFeedbackInsuranceNew.findById(req.params.id, function (err, docs) {
        if (err){
            res.send(err);
        }
        else{
            // const product_lines = new Agency(docs);
            AgencyFeedbackInsuranceNew.deleteOne({_id: req.params.id})
            .then(() => {
                CustomerNew.insertMany(docs);
                res.redirect('back');
                // res.redirect('/me/stored/customer');
                
            })
            .catch(next);
        }
    });
}


    
}
module.exports = new AgencyFeedbackInsuranceNewController;