const express = require('express');

const router = express.Router();

const agencyNewController = require('../app/controllers/AgencyNewController');

// router.get('/create', agencyController.create);
// router.get('/switch', agencyController.switch_data);

// router.post('/store', agencyController.store);
// router.patch('/:id/delivery', agencyController.delivery);
// router.get('/:id/edit', agencyController.edit);
// router.put('/:id', agencyController.update);
// router.patch('/:id/restore', agencyController.restore);

router.delete('/:id', agencyNewController.destroy);
// router.post('/:id', agencyController.destroy);
// router.delete('/:id/force', agencyController.forceDestroy);
// router.get('/:slug', agencyController.show);



module.exports = router;