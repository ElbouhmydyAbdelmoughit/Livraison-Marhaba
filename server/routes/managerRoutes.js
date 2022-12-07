const router = require('express').Router();

const categorieControllers = require('../controllers/userControllers/categorieControllers');
const livreurControllers = require('../controllers/userControllers/userControllers')


router.get('/me', (req, res)=>{ res.send('manager') });
router.post('/Categorie/add', categorieControllers.addCategorie);
router.post('/Categorie/find', categorieControllers.findCategorie);
router.put('/Categorie/update/:id', categorieControllers.updateCategorie);
router.delete('/Categorie/delete/:id', categorieControllers.deleteCategorie);
router.post('/livreur/add', livreurControllers.AddLivreur);


module.exports = router;