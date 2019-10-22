const Op = require('sequelize').Op;

module.exports = (sequelize, DataTypes) => {
    const Room = sequelize.define(
        'Room',
        {
            name: DataTypes.STRING,
            price: DataTypes.INTEGER,
            maxGuest: {
                type: DataTypes.INTEGER,
                field: 'max_guest',
            },
            starRating: {
                type: DataTypes.INTEGER,
                field: 'star_rating',
            },
            reviewNum: {
                type: DataTypes.INTEGER,
                field: 'review_num',
            },
            imagePath: {
                type: DataTypes.STRING,
                field: 'image_path',
            },
        },
        {
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            tableName: 'rooms',
        },
    );
    Room.associate = function(models) {
        Room.belongsTo(models.RoomType, { foreignKey: 'roomTypeId', targetKey: 'id' });
        Room.hasOne(models.RoomOption, { foreignKey: 'id' });
        Room.hasMany(models.Booking, {
            foreignKey: 'room_id',
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
    };

    Room.findAllByFilter = async filterOptions => {
        const models = require('../models');

        const joinOption = { model: models.RoomOption };
        if (filterOptions && filterOptions.date) {
            const reservedRooomsSQL = sequelize.dialect.QueryGenerator.selectQuery('bookings', {
                attributes: ['room_id'],
                where: {
                    check_out: { [Op.gt]: filterOptions.date.checkIn },
                    check_in: { [Op.lt]: filterOptions.date.checkOut },
                },
            }).slice(0, -1);

            joinOption['where'] = {
                id: {
                    [Op.notIn]: sequelize.literal('(' + reservedRooomsSQL + ')'),
                },
            };
        }

        try {
            return await Room.findAll({
                include: [joinOption],
            });
        } catch (error) {
            throw error;
        }
    };

    return Room;
};
