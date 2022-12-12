'use strict';
const models = require("../models/index");
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
        */


        return queryInterface.bulkInsert("usuario",
            [{
                nombre: "Juan",
                apellido: "Gonzalez",
                email: "emailJuan123@email.com",
                dni: 25,
                roleId: 2,
                password: bcrypt.hashSync('algunaPassword', 10),
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                nombre: "Leandro",
                apellido: "Suarez",
                email: "leanSuarez@gmail.com",
                dni: 37,
                roleId: 1,
                password: bcrypt.hashSync('algunaPassword', 10),
                created_at: new Date(),
                updated_at: new Date(),
            }]


        )
    }
}