const router = require('express').Router();
const multer = require('multer');
const upload = require('../middlewares/upload')

// Require modules
const statistiqueControllers = require('../controllers/userControllers/statistiqueControllers');
const userControllers = require('../controllers/userControllers/userControllers');
const produitControllers = require('../controllers/userControllers/produitControllers');
const categorieControllers = require('../controllers/userControllers/categorieControllers');
const paymentControllers = require('../controllers/userControllers/paymentControllers');
const tryCatch = require('../middlewares/tryCatch');
const errorHandller = require('../middlewares/errorHandller');

// Route of statistique
router.get('/', tryCatch(statistiqueControllers.StatistiqueManager));
router.get('/get-user', tryCatch(userControllers.getUser));
// Routes of produit
router.get('/produit', tryCatch(produitControllers.getProduit));
router.post('/add-produit', upload.any('image'), tryCatch(produitControllers.addProduit));
router.put('/updat-produit/:id', tryCatch(produitControllers.updatProduit));
router.delete('/delet-produit/:id/:status', tryCatch(produitControllers.deletProduit));
// Routes of categorie
router.get('/categorie', tryCatch(categorieControllers.getCategorie));
router.post('/add-categorie', tryCatch(categorieControllers.addCategorie));
router.post('/findCategorie', tryCatch(categorieControllers.findCategorie));
router.put('/updateCategorie/:id', tryCatch(categorieControllers.updateCategorie));
router.delete('/deleteCategorie/:id', tryCatch(categorieControllers.deleteCategorie));

// Routes of payment
router.get('/payment', tryCatch(paymentControllers.getPayment));

// Error handller
router.use(errorHandller)

module.exports = router;