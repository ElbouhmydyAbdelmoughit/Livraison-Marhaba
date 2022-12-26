const router = require('express').Router();

// Require modules
const statistiqueControllers = require('../controllers/userControllers/statistiqueControllers');
const middleware = require('../middlewares/stripe');
const tryCatch = require('../middlewares/tryCatch');
const errorHandller = require('../middlewares/errorHandller');

// Routes of client
router.get('/', tryCatch(statistiqueControllers.StatistiqueClient));
router.post('/payment', middleware.stripePayment)

router.use(errorHandller)

module.exports = router;