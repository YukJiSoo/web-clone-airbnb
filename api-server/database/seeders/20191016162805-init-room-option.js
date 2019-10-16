'use strict';
const data = require('../../init-data/room_option_data.json');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const roomOptionData = data.map(cur => {
            cur['createdAt'] = new Date();
            cur['updatedAt'] = new Date();
            return cur;
        });
        return queryInterface.bulkInsert('Room_options', roomOptionData, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Room_options', null, {});
    },
};
