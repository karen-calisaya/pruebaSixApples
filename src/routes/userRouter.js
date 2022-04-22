const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const validateRegister = require('../validations/registerValidator')

/* Ruta para mostrar los productos */
router.get('/', userController.login);
router.get('/perfil', userController.profile);
router.get('/registro', userController.register);
router.post('/registro', validateRegister, userController.processRegister);

module.exports = router;