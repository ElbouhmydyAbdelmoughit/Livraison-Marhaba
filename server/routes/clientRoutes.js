const router = require('express').Router();

const tryCatch = require('../middlewares/tryCatch');
const errorHandller = require('../middlewares/errorHandller');

// Routes of client
router.get('/', (req, res)=>{ res.send('Statistique of client') });

router.use(errorHandller)

module.exports = router;