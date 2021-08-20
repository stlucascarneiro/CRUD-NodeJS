'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Lara',
        last_name: 'Gomes',
        age: 68,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Leonardo',
        last_name: 'Santos',
        age: 55,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vitor',
        last_name: 'Oliveira',
        age: 39,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nicolas',
        last_name: 'Melo',
        age: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Juliana',
        last_name: 'Castro',
        age: 36,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Emilly',
        last_name: 'Costa',
        age: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
