'use strict';
const bcrypt = require('bcrypt')// for password hashing 

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users',[
      {
        firstName: 'john',
        lastName:'doe',
        email: 'john.doe@gmail.com' ,
        password : bcrypt.hashSync('secret',10),//using  the hashed version of secret as the password
        gender: "male"

      },
      {
        firstName: 'sam ',
        lastName:'smith ',
        email: 'samsmith@gmail.com' ,
        password :bcrypt.hashSync('secret',10),
        gender: "male"

      },
      {
        firstName: 'jane',
        lastName:'doe',
        email: 'jane.doe@gmail.com' ,
        password :bcrypt.hashSync('secret',10),
        gender: "female"

      },
    ])



  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Users', null, {});
  }
};
