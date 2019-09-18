const bodyParser = require('body-parser');
const multer = require('multer');
const express = require('express');

const app = express();
const upload = multer();

import videoDetect from './modules/videoDetect';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());

app.use('/video', videoDetect);

server.listen(8000, () => {
  console.log("Server started!");
});
