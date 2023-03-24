const express = require('express');

const router = express.Router();

const factoryWarehouseController = require('../app/controllers/FactoryWarehouseController');

// router.get('/create', factoryController.create);
// router.get('/switch', factoryController.switch_data);

// router.post('/store', factoryController.store);
router.patch('/:id/delivery', factoryWarehouseController.delivery);
// router.get('/:id/edit', factoryController.edit);
// router.put('/:id', factoryController.update);
// router.patch('/:id/restore', factoryController.restore);

router.delete('/:id', factoryWarehouseController.destroy);
// router.post('/:id', factoryController.destroy);
// router.delete('/:id/force', factoryController.forceDestroy);
// router.get('/:slug', factoryController.show);



module.exports = router;