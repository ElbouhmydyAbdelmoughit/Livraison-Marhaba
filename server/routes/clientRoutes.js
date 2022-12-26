const router = require('express').Router();

// Require modules
const statistiqueControllers = require('../controllers/userControllers/statistiqueControllers');
const commandeController = require('../controllers/userControllers/commandeController');
const middleware = require('../middlewares/stripe');
const payment = require('../controllers/userControllers/paymentControllers')
const tryCatch = require('../middlewares/tryCatch');
const errorHandller = require('../middlewares/errorHandller');

// Routes of client
router.get('/', tryCatch(statistiqueControllers.StatistiqueClient));
router.post('/payment', middleware.stripePayment)
router.post('/cash', payment.addPayement)
router.get("/historique/:token", tryCatch(commandeController.Historique));


router.use(errorHandller)

module.exports = router;