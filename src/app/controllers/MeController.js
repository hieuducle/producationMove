const Course = require('../models/Product')
const Customer = require('../models/Customer')
const CustomerNew = require('../models/CustomerNew')
const { mutipleMongooseToObject } = require('../../util/mongoose');
const Agency = require('../models/Agency');
const AgencyNew = require('../models/AgencyNew');
const Factory = require('../models/Factory');
const FactoryNew = require('../models/FactoryNew');
const Insurance = require('../models/Insurance');
const InsuranceNew = require('../models/InsuranceNew');
const AgencyFeedback = require('../models/AgencyFeedback');
const AgencyFeedbackNew = require('../models/AgencyFeedbackNew');
const AgencyFeedbackInsurance = require('../models/AgencyFeedbackInsurance');
const AgencyFeedbackInsuranceNew = require('../models/AgencyFeedbackInsuranceNew');
const InsuranceFeedbackFactory = require('../models/InsuranceFeedbackFactory');
const InsuranceFeedbackFactoryNew = require('../models/InsuranceFeedbackFactoryNew');
const FactoryWarehouse = require('../models/FactoryWarehouse');
const FactoryWarehouseNew = require('../models/FactoryWarehouseNew');
class MeController {


    storedCourses(req, res, next) {
        Course.find({})
            .then(product_lines => res.render('me/stored-product_lines', {
                product_lines: mutipleMongooseToObject(product_lines)
            }))
            .catch(next)
    }

    storedCustomers(req, res, next) {
        Customer.find({})
            .then(customers => res.render('me/stored-customers', {
                customers: mutipleMongooseToObject(customers)
            }))
            .catch(next)
    }

    storedCustomerNews(req, res, next) {
        // res.send('pp');
        // res.render('me/stored-customerNews');
        CustomerNew.find({})
            .then(customerNews => res.render('me/stored-customerNews', {
                customerNews: mutipleMongooseToObject(customerNews)
            }))
            .catch(next)
    }

    storedCustomerAdmins(req, res, next) {
        Customer.find({})
            .then(customers => res.render('me/stored-customers-admin', {
                customers: mutipleMongooseToObject(customers)
            }))
            .catch(next)
    }

    storedCustomerAdminNews(req, res, next) {
        CustomerNew.find({})
            .then(customerNews => res.render('me/stored-customers-adminNew', {
                customerNews: mutipleMongooseToObject(customerNews)
            }))
            .catch(next)
    }

    // me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then(product_lines => res.render('me/trash-product_lines', {
                product_lines: mutipleMongooseToObject(product_lines)
            }))
            .catch(next)
    }

    storedFactories(req, res, next) {
        Factory.find({})
            .then(factories => res.render('me/stored-product_lines-factory', {
                factories: mutipleMongooseToObject(factories)
            }))
            .catch(next)
    }

    storedFactoryNews(req, res, next) {
        FactoryNew.find({})
            .then(factoryNews => res.render('me/stored-product_lines-factorynew', {
                factoryNews: mutipleMongooseToObject(factoryNews)
            }))
            .catch(next)
    }


    storedAgencies(req, res, next) {
        Agency.find({})
            .then(product_lines => res.render('me/stored-product_lines-agency', {
                product_lines: mutipleMongooseToObject(product_lines)
            }))
            .catch(next)
    }

    storedAgencyNews(req, res, next) {
        AgencyNew.find({})
            .then(product_lines => res.render('me/stored-product_lines-agencyNew', {
                product_lines: mutipleMongooseToObject(product_lines)
            }))
            .catch(next)
    }

    

    storedInsurances(req, res, next) {
        Insurance.find({})
            .then(insurances => res.render('me/stored-product_lines-insurance', {
                insurances: mutipleMongooseToObject(insurances)
            }))
            .catch(next)
    }

    storedInsuranceNews(req, res, next) {
        InsuranceNew.find({})
            .then(insuranceNews => res.render('me/stored-product_lines-insuranceNew', {
                insuranceNews: mutipleMongooseToObject(insuranceNews)
            }))
            .catch(next)
    }

    storedAgencyFeedbacks(req, res, next) {
        AgencyFeedback.find({})
            .then(agencyFeedbacks => res.render('me/stored-agency-feedback', {
                agencyFeedbacks: mutipleMongooseToObject(agencyFeedbacks)
            }))
            .catch(next)
    }

    storedAgencyFeedbackNews(req, res, next) {
        AgencyFeedbackNew.find({})
            .then(agencyFeedbackNews => res.render('me/stored-agency-feedbackNew', {
                agencyFeedbackNews: mutipleMongooseToObject(agencyFeedbackNews)
            }))
            .catch(next)
    }
    

    storedAgencyFeedbackInsurances(req, res, next) {
        AgencyFeedbackInsurance.find({})
            .then(agencyFeedbackInsurances => res.render('me/stored-agency-feedback-insurance', {
                agencyFeedbackInsurances: mutipleMongooseToObject(agencyFeedbackInsurances)
            }))
            .catch(next)
    }

    storedAgencyFeedbackInsuranceNews(req, res, next) {
        AgencyFeedbackInsuranceNew.find({})
            .then(agencyFeedbackInsuranceNews => res.render('me/stored-agency-feedback-insuranceNew', {
                agencyFeedbackInsuranceNews: mutipleMongooseToObject(agencyFeedbackInsuranceNews)
            }))
            .catch(next)
    }

    storedInsuranceFeedbackFactory(req, res, next) {
        InsuranceFeedbackFactory.find({})
            .then(insuranceFeedbackFactories => res.render('me/stored-insurance-feedback-factory', {
                insuranceFeedbackFactories: mutipleMongooseToObject(insuranceFeedbackFactories)
            }))
            .catch(next)
    }

    storedInsuranceFeedbackFactoryNew(req, res, next) {
        InsuranceFeedbackFactoryNew.find({})
            .then(insuranceFeedbackFactoryNews => res.render('me/stored-insurance-feedback-factoryNew', {
                insuranceFeedbackFactoryNews: mutipleMongooseToObject(insuranceFeedbackFactoryNews)
            }))
            .catch(next)
    }

    storedFactoryWarehouses(req, res, next) {
        FactoryWarehouse.find({})
            .then(factoryWarehouses => res.render('me/stored-factoryWarehouses', {
                factoryWarehouses: mutipleMongooseToObject(factoryWarehouses)
            }))
            .catch(next)
    }

    storedFactoryWarehouseNews(req, res, next) {
        FactoryWarehouseNew.find({})
            .then(factoryWarehouseNews => res.render('me/stored-factoryWarehouseNews', {
                factoryWarehouseNews: mutipleMongooseToObject(factoryWarehouseNews)
            }))
            .catch(next)
    }
}
module.exports = new MeController();
