const express = require('express');

const router = express.Router();

const agencyFeedbackController = require('../app/controllers/AgencyFeedbackController');

router.get('/:id/create', agencyFeedbackController.create);
router.patch('/:id/delivery', agencyFeedbackController.delivery);

router.post('/store', agencyFeedbackController.store);
router.get('/:id/edit', agencyFeedbackController.edit);
router.put('/:id', agencyFeedbackController.update);
router.delete('/:id', agencyFeedbackController.destroy);
router.get('/:slug', agencyFeedbackController.show);


module.exports = router;