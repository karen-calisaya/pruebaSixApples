const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const { check, body} = require('express-validator');
const { getUsers } = require("../data");
const bcryptjs = require("bcryptjs");

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

const validateUser = [
    check('email')
        .notEmpty().withMessage('campo requerido').bail()
        .isEmail().withMessage('ingrese email valido'),
    body('email').custom((value, {req}) => {
        let user = getUsers.find(user => user.email === req.body.email);
        if(bcryptjs.compareSync(req.body.password, user.password)){
            return true;
        } return false;
    }).withMessage('Email o contraseña invalidos'),
    check('password')
        .notEmpty().withMessage('campo requerido')
]

/* Ruta para mostrar los productos */
router.get('/login', userController.login);
router.post('/login', validateUser, userController.processLogin);
router.get('/perfil', userController.profile);
router.get('/registro', userController.register);
router.post('/registro', validateRegister, userController.processRegister);

module.exports = router;