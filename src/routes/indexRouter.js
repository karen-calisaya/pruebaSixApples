const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')

/* ruta por get */
router.get('/', indexController.index)

router.get('/quienessomos', indexController.about)

module.exports = router;