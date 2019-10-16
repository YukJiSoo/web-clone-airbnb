'use strict';
const data = require('../../init-data/room_data.json');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const roomData = data.map(cur => {
            cur['createdAt'] = new Date();
            cur['updatedAt'] = new Date();
            return cur;
        });
        return queryInterface.bulkInsert('Rooms', roomData, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Rooms', null, {});
    },
};
