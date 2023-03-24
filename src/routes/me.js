const express = require('express');

const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/admin', meController.storedCourses);
router.get('/stored/customers', meController.storedCustomers);
router.get('/stored/customerNews', meController.storedCustomerNews);
router.get('/stored/customerAdmins', meController.storedCustomerAdmins);
router.get('/stored/customerAdminNews', meController.storedCustomerAdminNews);
router.get('/trash/product_lines', meController.trashCourses);
router.get('/stored/factory', meController.storedFactories);
router.get('/stored/factoryNew', meController.storedFactoryNews);
router.get('/stored/agency', meController.storedAgencies);
router.get('/stored/agencyNew', meController.storedAgencyNews);
router.get('/stored/insurance', meController.storedInsurances);
router.get('/stored/insuranceNew', meController.storedInsuranceNews);
router.get('/stored/agencyFeedback', meController.storedAgencyFeedbacks);

router.get('/stored/agencyFeedbackNew', meController.storedAgencyFeedbackNews);

router.get('/stored/agencyFeedbackInsurance', meController.storedAgencyFeedbackInsurances);
router.get('/stored/agencyFeedbackInsuranceNew', meController.storedAgencyFeedbackInsuranceNews);
router.get('/stored/insuranceFeedbackFactory', meController.storedInsuranceFeedbackFactory);
router.get('/stored/insuranceFeedbackFactoryNew', meController.storedInsuranceFeedbackFactoryNew);
router.get('/stored/factoryWarehouse', meController.storedFactoryWarehouses);
router.get('/stored/factoryWarehouseNew', meController.storedFactoryWarehouseNews);




module.exports = router;