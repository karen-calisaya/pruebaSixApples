const {getUsers, writeUsers} = require('../data')
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
module.exports = {
    login: (req, res) => {
        res.render('users/login', { //login.ejs
            title: "Login",
            session: req.session
        }) 
    },
    processLogin: (req, res) => {
        let errors = validationResult(req);
        
        if(errors.isEmpty){
            let user = getUsers.find(user => user.email === user.body.email)

            /* session */
            req.session.user = {
                id: user.id,
                name: user.name,
                email: user.email,
                image:user.image,
                rol: user.rol
            }

            res.locals.user = req.session.user
            
            res.redirect('/') 
        }else{
            res.render('usuario/login', {
                title: 'Login',
                errors: errors.mapped(),
                session:req.session 
        })}

    },
    profile : (req, res)=>{
        res.render('users/profile', { //profile.ejs
            title: "Mi perfil",
            session: req.session
        }) 
    },
    register: (req, res) => {
        res.render('users/register', { //register.ejs
            title: "Register",
            session: req.session
        }) 
    },
    processRegister: (req, res) => {
        let errors = validationResult(req);

        if(errors.errors.length > 0){
           return res.render('users/register', {
               errors: errors.mapped(),
               oldData: req.body,
               title: 'Formulario',
               session: req.session
           })
        }

        //Registrar un usuario - Guardarlo en el JSON
       // Paso 1 - Crear un objeto User
       let ultimoId = 0;
       getUsers.forEach(user => {
           if(user.id > ultimoId){
               ultimoId = user.id
           }
       });
       let newUser = {
           id: ultimoId + 1,
           name: req.body.name,
           email: req.body.email,
           password: bcrypt.hashSync(req.body.password, 10),
           image: "",
           rol: "USER"
       }
       // Paso 2 - Guardar el nuevo usuario en el array de usuarios
       getUsers.push(newUser)

       /* Paso 3- sobreescribir JSON */
       writeUsers(getUsers)

       /* Paso 4-redireccion */
       res.redirect('/usuario/login')

    }
}

