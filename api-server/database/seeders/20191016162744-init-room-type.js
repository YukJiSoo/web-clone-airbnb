'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'Room_types',
            [
                {
                    name: '집 전체',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: '개인실',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: '호텔 객실',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: '다인실',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Room_types', null, {});
    },
};
