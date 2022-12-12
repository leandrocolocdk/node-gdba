'use strict';

const models = require("../../models/index");

// NOTA Primero se tienen que insertar los medicos!!

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
    await queryInterface.bulkInsert('medico', [
      {
        nombre: "Carolina",
        apellido: "Figeira",
        email: "carolinaF@email.com",
        dni: 34973132,
        especialidad: "pediatria",
        tiempo_trabajando: 38,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nombre: "Mariela",
        apellido: "Esposito",
        email: "marielaesposito@email.com",
        dni: 23973143,
        especialidad: "Neurologia",
        tiempo_trabajando: 42,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nombre: "Hugo",
        apellido: "Ghiani",
        email: "ghianihugo2@email.com",
        dni: 21673143,
        especialidad: "Alergia",
        tiempo_trabajando: 22,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nombre: "Dolores",
        apellido: "Gomez",
        email: "dologomez@email.com",
        dni: 21954143,
        especialidad: "Endocrinologia",
        tiempo_trabajando: 100,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nombre: "Emilio",
        apellido: "Lupi",
        email: "emilupi@email.com",
        dni: 31973143,
        especialidad: "Geriatria",
        tiempo_trabajando: 56,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nombre: "Silvana",
        apellido: "Montalvo",
        email: "silmontalvo@email.com",
        dni: 45986236,
        especialidad: "Nefrologia",
        tiempo_trabajando: 61,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nombre: "Leonel",
        apellido: "Gatti",
        email: "leogatti@email.com",
        dni: 31973143,
        especialidad: "Nutricion",
        tiempo_trabajando: 30,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});


    //  return Promise.all([
    //   models.medico.findOrCreate({
    //     where: {
    //       id: "1"
    //     },
    //     defaults: {
    //       nombre: "Carolina",
    //       apellido: "Figeira",
    //       email: "carolinaF@email.com",
    //       dni: 34973132,
    //       especialidad: "pediatria",
    //       tiempo_trabajando: 38
    //     }
    //   }),
    //   models.medico.findOrCreate({
    //     where: {
    //       id: "2"
    //     },
    //     defaults: {
    //       nombre: "Mariela",
    //       apellido: "Esposito",
    //       email: "marielaesposito@email.com",
    //       dni: 23973143,
    //       especialidad: "Neurologia",
    //       tiempo_trabajando: 42
    //     }
    //   }),
    //   models.medico.findOrCreate({
    //     where: {
    //       id: "3"
    //     },
    //     defaults: {
    //       nombre: "Hugo",
    //       apellido: "Ghiani",
    //       email: "ghianihugo2@email.com",
    //       dni: 21673143,
    //       especialidad: "Alergia",
    //       tiempo_trabajando: 22
    //     }
    //   }),
    //   models.medico.findOrCreate({
    //     where: {
    //       id: "4"
    //     },
    //     defaults: {
    //       nombre: "Dolores",
    //       apellido: "Gomez",
    //       email: "dologomez@email.com",
    //       dni: 21954143,
    //       especialidad: "Endocrinologia",
    //       tiempo_trabajando: 100
    //     }
    //   }),
    //   models.medico.findOrCreate({
    //     where: {
    //       id: "5"
    //     },
    //     defaults: {
    //       nombre: "Emilio",
    //       apellido: "Lupi",
    //       email: "emilupi@email.com",
    //       dni: 31973143,
    //       especialidad: "Geriatria",
    //       tiempo_trabajando: 56
    //     }
    //   }),
    //   models.medico.findOrCreate({
    //     where: {
    //       id: "6"
    //     },
    //     defaults: {
    //       nombre: "Silvana",
    //       apellido: "Montalvo",
    //       email: "silmontalvo@email.com",
    //       dni: 45986236,
    //       especialidad: "Nefrologia",
    //       tiempo_trabajando: 61
    //     }
    //   }),
    //   models.medico.findOrCreate({
    //     where: {
    //       id: "7"
    //     },
    //     defaults: {
    //       nombre: "Leonel",
    //       apellido: "Gatti",
    //       email: "leogatti@email.com",
    //       dni: 31973143,
    //       especialidad: "Nutricion",
    //       tiempo_trabajando: 30
    //     }
    //   })
    // ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('medico', null, {});
  }
};
