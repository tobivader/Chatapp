const { body, validationResult } = require('express-validator');

exports.rules = (() => {
    return [
        body('email').isEmail().withMessage('Invalid email'),  // Check if the email is valid
    ];
})();

exports.validate = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const msg = {};
        errors.array().forEach((error) => {
            const key = error.param;
            msg[key] = msg[key] ? [...msg[key], error.msg] : [error.msg];
        });

        return res.status(400).json({
            ok: false,
            err: msg
        });
    }

    next();
};
