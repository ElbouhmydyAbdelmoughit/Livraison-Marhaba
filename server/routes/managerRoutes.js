const router = require('express').Router();

const produitControllers = require('../controllers/userControllers/produitControllers');
const categorieControllers = require('../controllers/userControllers/categorieControllers');
const tryCatch = require('../middlewares/tryCatch');
const errorHandller = require('../middlewares/errorHandller');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
require('../middlewares/upload')


router.get('/me', (req, res)=>{ res.send('manager') });

router.get('/produit', tryCatch(produitControllers.getProduit));
router.post('/add-produit', upload.array('image', 3), tryCatch(produitControllers.addProduit));
router.post('/updat-produit', tryCatch(produitControllers.updatProduit));
router.delete('/delet-produit/:id', tryCatch(produitControllers.deletProduit));


router.get('/me', (req, res)=>{ res.send('manager') });
router.post('/add-categorie', categorieControllers.addCategorie);
router.post('/findCategorie', categorieControllers.findCategorie);
router.post('/add-livreur', livreurControllers.AddLivreur)
router.put('/updateCategorie/:id', categorieControllers.updateCategorie);
router.delete('/deleteCategorie/:id', categorieControllers.deleteCategorie);

router.use(errorHandller)

module.exports = router;