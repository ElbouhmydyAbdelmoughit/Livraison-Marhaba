const router = require('express').Router();

const multer  = require('multer')
const produitControllers = require('../controllers/userControllers/produitControllers');
const categorieControllers = require('../controllers/userControllers/categorieControllers');
const upload = multer()
require('../middlewares/upload')


router.get('/me', (req, res)=>{ res.send('manager') });
router.get('/produit', produitControllers.getProduit);
router.post('/add-produit', upload.single('image'), produitControllers.addProduit);
router.post('/updat-produit', produitControllers.updatProduit);
router.post('/delet-produit', produitControllers.deletProduit);


router.get('/me', (req, res)=>{ res.send('manager') });
router.post('/add-categorie', categorieControllers.addCategorie);
router.post('/findCategorie', categorieControllers.findCategorie);
router.put('/updateCategorie/:id', categorieControllers.updateCategorie);
router.delete('/deleteCategorie/:id', categorieControllers.deleteCategorie);


module.exports = router;