const express = require('express');

const router = express.Router();

const agencyController = require('../app/controllers/AgencyController');

// router.get('/create', agencyController.create);
// router.get('/switch', agencyController.switch_data);

// router.post('/store', agencyController.store);
// router.patch('/:id/delivery', agencyController.delivery);
// router.get('/:id/edit', agencyController.edit);
// router.put('/:id', agencyController.update);
// router.patch('/:id/restore', agencyController.restore);

router.delete('/:id', agencyController.destroy);
// router.post('/:id', agencyController.destroy);
// router.delete('/:id/force', agencyController.forceDestroy);
// router.get('/:slug', agencyController.show);



module.exports = router;