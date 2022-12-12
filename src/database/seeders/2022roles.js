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


        return queryInterface.bulkInsert("role",
            [{
                nombre: "admin",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                nombre: "usuario",
                created_at: new Date(),
                updated_at: new Date(),
            }]


        )
    }
}