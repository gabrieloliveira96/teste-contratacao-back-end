'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../../app/controllers/controlle-login');
let _ctrl = new controller();


router.post('/', _ctrl.post)

module.exports = router;