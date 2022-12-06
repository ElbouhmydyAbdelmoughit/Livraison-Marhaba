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


router.post('/add-categorie', tryCatch(categorieControllers.addCategorie));
router.post('/findCategorie', tryCatch(categorieControllers.findCategorie));
router.put('/updateCategorie/:id', tryCatch(categorieControllers.updateCategorie));
router.delete('/deleteCategorie/:id', tryCatch(categorieControllers.deleteCategorie));

router.use(errorHandller)


module.exports = router;