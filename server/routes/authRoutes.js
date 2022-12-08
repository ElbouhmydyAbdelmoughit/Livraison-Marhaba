const router = require('express').Router();

const authController = require('../controllers/authControllers/authControllers');
const tryCatch = require('../middlewares/tryCatch');
const errorHandller = require('../middlewares/errorHandller');


router.post('/login', tryCatch(authController.login));
router.post('/register', tryCatch(authController.register));
router.get('/verify-email/:token', tryCatch(authController.verifyEmail));
router.post('/reset-password', tryCatch(authController.resetPassword));
router.post('/forgot-password', tryCatch(authController.forgotPassword));
router.get('/verify-forgot-password/:token', tryCatch(authController.verifyForgotPassword));
router.post('/form-forgot-password', tryCatch(authController.formForgotPassword));
router.get('/logout', tryCatch(authController.logout));

router.use(errorHandller)


module.exports = router;