const User = require('../models').User
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config/app')
const {comparePassword} = require('../controllers/passwordUtils')
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({
            where: {
                email: email
            }
        });

        if (!user) {
            return res.status(401).json({ error: "Email or user not found!" });
        }

        // Check if the password matches
        if (comparePassword(password, user.password)) {
            const userWithToken = generateToken(user.get({ raw: true }));
            // Include password in the response
            return res.send({ ...userWithToken, password: user.password });
        } else {
            return res.status(401).json({ error: "Incorrect password! why" });
        }
    } catch (error) {
        console.error("Error in login:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};





exports.register = async (req,res) =>{
 

    try {
        const user = await User.create(req.body)


        const userWithToken  = generateToken(user.get({raw : true}))
        return res.send(userWithToken)
        
    } catch (error) {
        return res.status(500).json({message : error.message})// check on this 
    }

}


const generateToken = (user)=>{
    
   // delete user.password
    
    const token = jwt.sign(user,config.appKey,{expiresIn : 86400})

    return {...user,...{token}}
}