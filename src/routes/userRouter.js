const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const { check } = require('express-validator')

const validaciones = [
    check('name')
        .notEmpty().withMessage('Este campo es obligatorio').bail(),
    check('email')
        .notEmpty().withMessage('Este campo es obligatorio').bail()
        .isEmail().withMessage('Debe ser un e-mail válido'),
    check('password')
        .notEmpty().withMessage('Este campo es obligatorio')
        .isLength({min: 5})
]

/* Ruta para mostrar los productos */
router.get('/', userController.login);
router.get('/perfil', userController.profile);
router.get('/registro', validaciones ,userController.register);

module.exports = router;