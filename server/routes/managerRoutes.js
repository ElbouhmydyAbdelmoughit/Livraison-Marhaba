const router = require('express').Router();

const multer  = require('multer')
const produitControllers = require('../controllers/userControllers/produitControllers');
const upload = multer()
require('../middlewares/upload')


router.get('/me', (req, res)=>{ res.send('manager') });
router.get('/produit', produitControllers.getProduit);
router.post('/add-produit', upload.single('image'), produitControllers.addProduit);
router.post('/updat-produit', produitControllers.updatProduit);
router.post('/delet-produit', produitControllers.deletProduit);


module.exports = router;