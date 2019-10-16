module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Bookings', {
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
                    model: 'Users',
                    key: 'id',
                },
            },
            room_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Rooms',
                    key: 'id',
                },
            },
        });
    },

    down: (queryInterface, Sequelize) => {
        // remove table
        return queryInterface.dropTable('Bookings');
    },
};
