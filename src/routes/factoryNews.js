const express = require('express');

const router = express.Router();

const factoryNewController = require('../app/controllers/FactoryNewController');

// router.get('/create', factoryController.create);
// router.get('/switch', factoryController.switch_data);

// router.post('/store', factoryController.store);
router.patch('/:id/deliveryAgency1', factoryNewController.deliveryAgency1);
router.patch('/:id/deliveryAgency2', factoryNewController.deliveryAgency2);
// router.get('/:id/edit', factoryNewController.edit);
// router.put('/:id', factoryNewController.update);
// router.patch('/:id/restore', factoryNewController.restore);

router.delete('/:id', factoryNewController.destroy);
// router.post('/:id', factoryNewController.destroy);
// router.delete('/:id/force', factoryController.forceDestroy);
// router.get('/:slug', factoryController.show);



module.exports = router;