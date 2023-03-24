const express = require('express');

const router = express.Router();

const agencyFeedbackNewController = require('../app/controllers/AgencyFeedbackNewController');

router.get('/:id/create', agencyFeedbackNewController.create);
router.patch('/:id/delivery', agencyFeedbackNewController.delivery);

router.post('/store', agencyFeedbackNewController.store);
router.get('/:id/edit', agencyFeedbackNewController.edit);
router.put('/:id', agencyFeedbackNewController.update);
router.delete('/:id', agencyFeedbackNewController.destroy);
router.get('/:slug', agencyFeedbackNewController.show);


module.exports = router;