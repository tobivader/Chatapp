const {validationResult} = require('express-validator')
   //error validation for email
exports.validate = (req,res,next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
    }

    next()
}

