const router = require('express').Router();

const authController = require('../controllers/authControllers/authControllers');
const tryCatch = require('../middlewares/tryCatch');
const errorHandller = require('../middlewares/errorHandller');


router.post('/login', tryCatch(authController.login));
router.post('/register', tryCatch(authController.register));
router.get('/verify-email/:token', tryCatch(authController.verifyEmail));
router.post('/reset-password', tryCatch(authController.resetPassword));
router.post('/forget-password', tryCatch(authController.forgetPassword));
router.get('/verify-forget-password/:token', tryCatch(authController.verifyForgetPassword));
router.post('/form-forgot-password', tryCatch(authController.formForgetPassword));
router.get('/logout', tryCatch(authController.logout));

router.use(errorHandller)


module.exports = router;