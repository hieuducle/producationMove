const Course = require('../models/Product')
const Customer = require('../models/Customer')
const { mongooseToObject } = require('../../util/mongoose');
const Agency = require('../models/Agency');
const Factory = require('../models/Factory');
const FactoryNew = require('../models/FactoryNew');
const FactoryWarehouse = require('../models/FactoryWarehouse');
const FactoryWarehouseNew = require('../models/FactoryWarehouseNew');
const { doc } = require('prettier');    

class FactoryWarehouseNewController {

    
    delivery(req,res,next) {
        
        FactoryWarehouseNew.findById(req.params.id, function (err, docs) {
                if (err){
                    res.send(err);
                }
                else{
                    // const product_lines = new Agency(docs);
                    FactoryWarehouseNew.deleteOne({_id: req.params.id})
                    .then(() => {
                        FactoryNew.insertMany(docs);
                        // res.redirect('back');
                        res.redirect('/me/stored/factoryWarehouseNew');
                        
                    })
                    .catch(next);
                }
            });
    }
    // xoa mem
    destroy(req,res,next) {

        // res.send('destroy');
        FactoryWarehouseNew.deleteOne({_id: req.params.id})
            .then(() => {
                res.redirect('back');
                
            })
            .catch(next);

           
    }

    

    
}
module.exports = new FactoryWarehouseNewController;