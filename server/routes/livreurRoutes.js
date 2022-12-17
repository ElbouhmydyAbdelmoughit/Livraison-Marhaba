const router = require('express').Router();

// Require modules
const statistiqueControllers = require('../controllers/userControllers/statistiqueControllers');
const userControllers = require('../controllers/userControllers/userControllers');
const tryCatch = require('../middlewares/tryCatch');
const errorHandller = require('../middlewares/errorHandller');


// Routes of livreur
router.get('/', tryCatch(statistiqueControllers.StatistiqueLivreur));
router.post('/add-livreur', tryCatch(userControllers.AddLivreur))

router.use(errorHandller)

module.exports = router;