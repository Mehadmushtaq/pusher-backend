const routes = require('express').Router();
const {
  newMessage,
  getMessages,
} = require('../controllers/message.controller');

const { upload } = require('../utils/multer.utils');

// const multer = require('multer');
// const path = require('path');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); // Specify the destination folder for uploads
//   },
//   filename: function (req, file, cb) {
//     const ext = path.extname(file.originalname);
//     cb(null, Date.now() + ext); // Use a unique filename for each uploaded file
//   },
// });
// const upload = multer({ storage: storage });

routes.get('/message', getMessages);
routes.post('/message', upload.single('attachment'), newMessage);

module.exports = routes;
