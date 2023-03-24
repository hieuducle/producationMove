const express = require('express');

const router = express.Router();

const insuranceNewController = require('../app/controllers/InsuranceNewController');

// router.get('/:id/create', insuranceController.create);

router.patch('/:id/delivery-factory', insuranceNewController.deliveryFactory);
router.patch('/:id/delivery-agency', insuranceNewController.deliveryAgency);

router.patch('/:id/fix', insuranceNewController.fix);

// router.post('/store', insuranceController.store);
// router.get('/:id/edit', insuranceController.edit);
// router.put('/:id', insuranceController.update);
// router.delete('/:id', insuranceController.destroy);
// router.get('/:slug', insuranceController.show);


module.exports = router;