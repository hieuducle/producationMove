const Course = require('../models/Product')
const Customer = require('../models/Customer')
const { mongooseToObject } = require('../../util/mongoose');
const Agency = require('../models/Agency');
const AgencyNew = require('../models/AgencyNew');
const Factory = require('../models/Factory');
const FactoryNew = require('../models/FactoryNew');
const { doc } = require('prettier');    
class FactoryController {

    
    deliveryAgency1(req,res,next) {
        
                Factory.findById(req.params.id, function (err, docs) {
                if (err){
                    res.send(err);
                }
                else{
                    // const product_lines = new Agency(docs);
                    Factory.deleteOne({_id: req.params.id})
                    .then(() => {
                        Agency.insertMany(docs);
                        // res.redirect('back');
                        res.redirect('/me/stored/factory');
                        
                    })
                    .catch(next);
                }
            });
    }

    deliveryAgency2(req,res,next) {
        
        Factory.findById(req.params.id, function (err, docs) {
        if (err){
            res.send(err);
        }
        else{
            // const product_lines = new Agency(docs);
            Factory.deleteOne({_id: req.params.id})
            .then(() => {
                AgencyNew.insertMany(docs);
                // res.redirect('back');
                res.redirect('/me/stored/factory');
                
            })
            .catch(next);
        }
    });
}
    // xoa mem
    destroy(req,res,next) {

        // res.send('destroy');
        Factory.deleteOne({_id: req.params.id})
            .then(() => {
                res.redirect('back');
                
            })
            .catch(next);

           
    }

    

    
}
module.exports = new FactoryController;