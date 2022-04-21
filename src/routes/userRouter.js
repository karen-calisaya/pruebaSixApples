const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const { check } = require('express-validator')

const validateRegister = [
    check('name')
        .notEmpty().withMessage('Debes escribir tu nombre y apellido').bail()
        .isLength({min: 5}).withMessage('El nombre y apellido deben tener al menos 5 caracteres'),
    check('email')
        .notEmpty().withMessage('Debes completar el email').bail()
        .isEmail().withMessage('Debe ser un e-mail correcto'),
    check('password')
        .notEmpty().withMessage('Debes completar la contraseña'). bail()
        .isLength({min: 5}).withMessage('Debe ser una contraseña mayor a 5 caracteres')
];

/* Ruta para mostrar los productos */
router.get('/', userController.login);
router.get('/perfil', userController.profile);
router.get('/registro', userController.register);
router.post('/registro', validateRegister, userController.processRegister);

module.exports = router;