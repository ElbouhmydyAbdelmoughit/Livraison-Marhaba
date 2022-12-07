const router = require('express').Router();

const userControllers = require('../controllers/userControllers/userControllers');


// Routes of livreur
router.post('/add-livreur', userControllers.AddLivreur)


module.exports = router;