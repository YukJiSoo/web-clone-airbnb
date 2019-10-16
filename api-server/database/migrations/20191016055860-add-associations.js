'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface
            .addColumn(
                'Rooms', // name of Source model
                'user_id', // name of the key we're adding
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Users', // name of Target model
                        key: 'id', // key in Target model that we're referencing
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL',
                },
            )
            .then(() => {
                return queryInterface.addColumn(
                    'Room_options', // name of Target model
                    'room_id', // name of the key we're adding
                    {
                        type: Sequelize.INTEGER,
                        references: {
                            model: 'Rooms', // name of Source model
                            key: 'id',
                        },
                        onUpdate: 'CASCADE',
                        onDelete: 'SET NULL',
                    },
                );
            })
            .then(() => {
                return queryInterface.addColumn(
                    'Rooms', // name of Target model
                    'room_type', // name of the key we're adding
                    {
                        type: Sequelize.INTEGER,
                        references: {
                            model: 'Room_types', // name of Source model
                            key: 'id',
                        },
                        onUpdate: 'CASCADE',
                        onDelete: 'SET NULL',
                    },
                );
            });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface
            .removeColumn(
                'Rooms', // name of Source model
                'user_id', // key we want to remove
            )
            .then(() => {
                return queryInterface.removeColumn(
                    'Room_options', // name of the Target model
                    'room_id', // key we want to remove
                );
            })
            .then(() => {
                return queryInterface.removeColumn(
                    'Rooms', // name of the Target model
                    'room_type', // key we want to remove
                );
            });
    },
};
