"use strict";

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

    const booksData = Array.from({ length: 10 }, (_, index) => ({
      title: `Book Title ${index + 1}`,
      author: `Author ${index + 1}`,
      description: `Description of Book ${index + 1}`,
      price: Math.floor(Math.random() * 100) + 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    // Insert seed data into the books table
    await queryInterface.bulkInsert("books", booksData);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("books", null, {});
  },
};
