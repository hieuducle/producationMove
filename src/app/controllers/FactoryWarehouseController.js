const Course = require('../models/Product')
const Customer = require('../models/Customer')
const { mongooseToObject } = require('../../util/mongoose');
const Agency = require('../models/Agency');
const Factory = require('../models/Factory');
const FactoryWarehouse = require('../models/FactoryWarehouse');
const { doc } = require('prettier');    

class FactoryController {

    
    delivery(req,res,next) {
        
        FactoryWarehouse.findById(req.params.id, function (err, docs) {
                if (err){
                    res.send(err);
                }
                else{
                    // const product_lines = new Agency(docs);
                    FactoryWarehouse.deleteOne({_id: req.params.id})
                    .then(() => {
                        Factory.insertMany(docs);
                        // res.redirect('back');
                        res.redirect('/me/stored/factoryWarehouse');
                        
                    })
                    .catch(next);
                }
            });
    }
    // xoa mem
    destroy(req,res,next) {

        // res.send('destroy');
        FactoryWarehouse.deleteOne({_id: req.params.id})
            .then(() => {
                res.redirect('back');
                
            })
            .catch(next);

           
    }

    

    
}
module.exports = new FactoryController;