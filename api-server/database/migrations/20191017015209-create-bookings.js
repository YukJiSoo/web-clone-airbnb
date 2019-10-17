module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('bookings', {
            check_in: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            check_out: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            user_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'users',
                    key: 'id',
                },
            },
            room_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'rooms',
                    key: 'id',
                },
            },
        });
    },

    down: (queryInterface, Sequelize) => {
        // remove table
        return queryInterface.dropTable('bookings');
    },
};
