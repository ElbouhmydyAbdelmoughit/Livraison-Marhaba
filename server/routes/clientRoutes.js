const router = require('express').Router();
const middleware = require('../middlewares/stripe')
const tryCatch = require('../middlewares/tryCatch');
const errorHandller = require('../middlewares/errorHandller');

// Routes of client
router.get('/', (req, res)=>{ res.send('Statistique of client') });

router.post('/payment', middleware.stripePayment)

router.use(errorHandller)

module.exports = router;