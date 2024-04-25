const bcrypt = require('bcrypt');

function comparePassword(plainPassword, hashedPassword) {
    return bcrypt.compareSync(plainPassword, hashedPassword);
}

module.exports = {
    comparePassword
};
