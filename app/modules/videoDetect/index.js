const express = require('express');
const router = express.Router();

import * as controller from './controller';
const url = require('url');

const app = express();

router.get('/', controller.getVideo);
router.post('/', controller.sendVideo);

module.exports = router;