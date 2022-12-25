const router = require('express').Router();

// Require modules
const statistiqueControllers = require('../controllers/userControllers/statistiqueControllers');
const userControllers = require('../controllers/userControllers/userControllers');
const commandeController = require('../controllers/userControllers/commandeController');
const tryCatch = require('../middlewares/tryCatch');
const errorHandller = require('../middlewares/errorHandller');


// Routes of livreur
router.get('/', tryCatch(statistiqueControllers.StatistiqueLivreur));
router.get('/get_command', tryCatch(commandeController.getCommandLivruer));
router.post('/add-livreur', tryCatch(userControllers.AddLivreur))

router.use(errorHandller)

module.exports = router;