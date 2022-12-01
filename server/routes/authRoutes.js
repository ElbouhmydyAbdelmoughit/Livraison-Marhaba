const router = require('express').Router();

const authController = require('../controllers/authControllers/authControllers');


router.post('/login', (req, res)=>{ res.send('login') });
router.post('/register', (req, res)=>{ res.send('register') });
router.get('/verify-email/:token', (req, res)=>{ res.send('verify-email') });
router.post('/reset-password', (req, res)=>{ res.send('reset-password') });
router.post('/forget-password', (req, res)=>{ res.send('forget-password') });
router.get('/verify-forget-password/:token', (req, res)=>{ res.send('verify-forget-password') });
router.post('/form-forget-password', (req, res)=>{ res.send('form-forget-password') });
router.get('/logout', (req, res)=>{ res.send('logout') });


module.exports = router;