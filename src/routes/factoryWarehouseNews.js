const express = require('express');

const router = express.Router();

const factoryWarehouseNewController = require('../app/controllers/FactoryWarehouseNewController');

// router.get('/create', factoryController.create);
// router.get('/switch', factoryController.switch_data);

// router.post('/store', factoryController.store);
router.patch('/:id/delivery', factoryWarehouseNewController.delivery);
// router.get('/:id/edit', factoryController.edit);
// router.put('/:id', factoryController.update);
// router.patch('/:id/restore', factoryController.restore);

router.delete('/:id', factoryWarehouseNewController.destroy);
// router.post('/:id', factoryController.destroy);
// router.delete('/:id/force', factoryController.forceDestroy);
// router.get('/:slug', factoryController.show);



module.exports = router;