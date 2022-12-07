const router = require('express').Router();

const userControllers = require('../controllers/userControllers/userControllers');
const tryCatch = require('../middlewares/tryCatch')


// Routes of livreur
router.post('/add-livreur', tryCatch(userControllers.AddLivreur))


module.exports = router;