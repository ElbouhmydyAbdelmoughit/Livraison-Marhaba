const router = require('express').Router();

const userControllers = require('../controllers/userControllers/userControllers');
const tryCatch = require('../middlewares/tryCatch');
const errorHandller = require('../middlewares/errorHandller');

// Routes of client
router.get('/', (req, res)=>{ res.send('Statistique of client') });
router.post('/reset-password', tryCatch(userControllers.resetPassword));

router.use(errorHandller)

module.exports = router;