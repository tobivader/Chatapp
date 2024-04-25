const router = require('express').Router()
const {body} = require ('express-validator')
const{login,register} = require('../controllers/authController')
const{rules: registrationRules }  = require('../validators/auth /register')
const{rules: loginRules }  = require('../validators/auth /login')
const {validate } = require('../validators/index')// validate function to ca;
const User = require('../models').User;

//login router 
router.post('/login',[loginRules,validate],login)

//validation rules 

router.post('/register', [registrationRules,validate,],register)

module.exports = router