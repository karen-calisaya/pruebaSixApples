const { check } = require('express-validator')

const validateRegister = [
    check('name')
        .notEmpty().withMessage('Debes escribir tu nombre y apellido').bail()
        .isLength({min: 5, max: 20}).withMessage('El nombre y apellido deben tener al menos 5 caracteres'),
    check('email')
        .notEmpty().withMessage('Debes completar el email').bail()
        .isEmail().withMessage('Debe ser un e-mail correcto'),
    check('password')
        .notEmpty().withMessage('Debes completar la contraseña').bail()
        .isLength({min: 5}).withMessage('Debe ser una contraseña mayor a 5 caracteres')
];

module.exports = validateRegister;