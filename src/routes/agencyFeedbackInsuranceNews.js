const express = require('express');

const router = express.Router();

const agencyFeedbackInsuranceNewController = require('../app/controllers/AgencyFeedbackInsuranceNewController');

// router.get('/:id/create', agencyFeedbackInsuranceController.create);
router.patch('/:id/delivery', agencyFeedbackInsuranceNewController.delivery);

// router.post('/store', agencyFeedbackInsuranceController.store);
// router.get('/:id/edit', agencyFeedbackInsuranceController.edit);
// router.put('/:id', agencyFeedbackInsuranceController.update);
// router.delete('/:id', agencyFeedbackInsuranceController.destroy);
// router.get('/:slug', agencyFeedbackInsuranceController.show);


module.exports = router;