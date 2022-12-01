const router = require('express').Router();

const authController = require('../controllers/userControllers/userControllers');


router.get('/me', (req, res)=>{ res.send('client') });


module.exports = router;