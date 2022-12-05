const multer = require('multer')


// SET STORAGE
const storage = multer.diskStorage({
    // destination for files
    destination: function (req, file, cb) {
      cb(null, '../uploads')
    },
    // add back the extension
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
})
const upload = multer({
    storage: storage,
    fileFilter: function(req, file, cb) {
        if(file.mimetype == 'image/png' || file.mimetype == 'image/jpg') cb(null, true)
        else cb(null, false)
    },
    limits: 1024*1024*3
})