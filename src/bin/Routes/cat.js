const express = require('express');
const router = express.Router();
const controller = require('../../app/controllers/controlle-cat');
let _ctrl = new controller();

router.get('/', _ctrl.get)

module.exports = router;