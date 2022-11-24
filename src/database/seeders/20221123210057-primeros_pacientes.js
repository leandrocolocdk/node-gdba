'use strict';
const models = require("../models/index");

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
    // return Promise.all([
    //   models.paciente.findOrCreate({
    //     where: {
    //       id: "1"
    //     },
    //     defaults: {
    //       nombre: "Juan",
    //       apellido: "Gonzalez",
    //       email: "emailJuan@email.com",
    //       dni: 25,
    //     }
    //   }),
    //   models.paciente.findOrCreate({
    //     where: {
    //       id: "2"
    //     },
    //     defaults: {
    //       nombre: "Pedro",
    //       apellido: "Gomez",
    //       email: "emailPedro@email.com",
    //       dni: 67
    //     }
    //   }),
    //   models.paciente.findOrCreate({
    //     where: {
    //       id: "3"
    //     },
    //     defaults: {
    //       nombre: "Ana",
    //       apellido: "Correa",
    //       email: "anacorrea32@email.com",
    //       dni: 33
    //     }
    //   }),
    //   models.paciente.findOrCreate({
    //     where: {
    //       id: "4"
    //     },
    //     defaults: {
    //       nombre: "Emilio",
    //       apellido: "Lombardo",
    //       email: "Emilioelmago@email.com",
    //       dni: 71
    //     }
    //   }),
    //   models.paciente.findOrCreate({
    //     where: {
    //       id: "5"
    //     },
    //     defaults: {
    //       nombre: "Susana",
    //       apellido: "Gimenez",
    //       email: "lasugimenez@email.com",
    //       dni: 32
    //     }
    //   }),
    //   models.paciente.findOrCreate({
    //     where: {
    //       id: "6"
    //     },
    //     defaults: {
    //       nombre: "Maria Silvana",
    //       apellido: "Giacomo",
    //       email: "msgiacomo@email.com",
    //       dni: 23
    //     }
    //   }),
    //   models.paciente.findOrCreate({
    //     where: {
    //       id: "7"
    //     },
    //     defaults: {
    //       nombre: "Leonel",
    //       apellido: "Gatti",
    //       email: "leogatti@email.com",
    //       dni: 36
    //     }
    //   })
    // ])

    return queryInterface.bulkInsert("paciente", [
      {
        nombre: "Juan",
        apellido: "Gonzalez",
        email: "emailJuan@email.com",
        dni: 25,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nombre: "Pedro",
        apellido: "Gomez",
        email: "emailPedro@email.com",
        dni: 67,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nombre: "Ana",
        apellido: "Correa",
        email: "anacorrea32@email.com",
        dni: 33,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nombre: "Emilio",
        apellido: "Lombardo",
        email: "Emilioelmago@email.com",
        dni: 71,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nombre: "Susana",
        apellido: "Gimenez",
        email: "lasugimenez@email.com",
        dni: 32,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nombre: "Maria Silvana",
        apellido: "Giacomo",
        email: "msgiacomo@email.com",
        dni: 23,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nombre: "Leonel",
        apellido: "Gatti",
        email: "leogatti@email.com",
        dni: 36,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('paciente', null, {});
  }
};
