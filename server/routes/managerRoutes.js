const router = require('express').Router();

const categorieControllers = require('../controllers/userControllers/categorieControllers');


router.get('/me', (req, res)=>{ res.send('manager') });
router.post('/add-categorie', categorieControllers.addCategorie);
router.post('/findCategorie', categorieControllers.findCategorie);
router.put('/updateCategorie/:id', categorieControllers.updateCategorie);
router.delete('/deleteCategorie/:id', categorieControllers.deleteCategorie);


module.exports = router;