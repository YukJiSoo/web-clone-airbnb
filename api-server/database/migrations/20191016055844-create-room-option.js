'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Room_options', {
            bed: {
                type: Sequelize.INTEGER,
            },
            bedroom: {
                type: Sequelize.INTEGER,
            },
            bathroom: {
                type: Sequelize.INTEGER,
            },
            free_parking: {
                type: Sequelize.BOOLEAN,
            },
            wifi: {
                type: Sequelize.BOOLEAN,
            },
            kitchen: {
                type: Sequelize.BOOLEAN,
            },
            washer: {
                type: Sequelize.BOOLEAN,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Room_options');
    },
};
