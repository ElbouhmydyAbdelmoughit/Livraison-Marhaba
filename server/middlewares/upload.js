const multer = require('multer')


// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    // add back the extension
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})

const upload = multer({
    storage: storage
})