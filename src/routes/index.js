// const newsRouter = require('./news');
const meRouter = require('./me');
// const siteRouter = require('./site');
const coursesRouter = require('./product_lines');
const customersRouter = require('./customers');
const customerNewsRouter = require('./customerNews');
const signupsRouter = require('./signups');
const loginsRouter = require('./logins');
const factoriesRouter = require('./factories')
const factoryNewsRouter = require('./factoryNews')

const agenciesRouter = require('./agencies')
const agencyNewsRouter = require('./agencyNews')
const insurancesRouter = require('./insurances')
const insuranceNewsRouter = require('./insuranceNews')
const agencyFeedbacksRouter = require('./agencyFeedbacks')

const agencyFeedbackNewsRouter = require('./agencyFeedbackNews')
const agencyFeedbackInsurancesRouter = require('./agencyFeedbackInsurances')
const agencyFeedbackInsuranceNewsRouter = require('./agencyFeedbackInsuranceNews')
const factoryWarehousesRouter = require('./factoryWarehouses')
const factoryWarehouseNewsRouter = require('./factoryWarehouseNews')
const insuranceFeedbackFactoriesRouter = require('./insuranceFeedbackFactories')
const insuranceFeedbackFactoryNewsRouter = require('./insuranceFeedbackFactoryNews')

function route(app) {

    // app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/product_lines', coursesRouter);
    app.use('/customers', customersRouter);
    // app.use('/customers', customerNewsRouter);
    app.use('/customerNews', customerNewsRouter);
    app.use('/signup', signupsRouter);
    app.use('/factories', factoriesRouter);
    app.use('/factoryNews', factoryNewsRouter);
    app.use('/agencies', agenciesRouter);
    app.use('/agencyNews', agencyNewsRouter);
    app.use('/agencyFeedbacks', agencyFeedbacksRouter);
    app.use('/agencyFeedbackNews', agencyFeedbackNewsRouter);

    app.use('/agencyFeedbackInsurances', agencyFeedbackInsurancesRouter);
    app.use('/agencyFeedbackInsuranceNews', agencyFeedbackInsuranceNewsRouter);
    app.use('/insuranceFeedbackFactories', insuranceFeedbackFactoriesRouter);
    app.use('/insuranceFeedbackFactoryNews', insuranceFeedbackFactoryNewsRouter);
    app.use('/insurances', insurancesRouter);
    app.use('/insuranceNews', insuranceNewsRouter);
    app.use('/factoryWarehouses', factoryWarehousesRouter);
    app.use('/factoryWarehouseNews', factoryWarehouseNewsRouter);
    app.use('/', loginsRouter);
}

module.exports = route;