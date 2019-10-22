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

    const createFilterOption = (date, models) => ({
        model: models.Booking,
        required: false,
        where: {
            [Op.not]: {
                checkOut: { [Op.gt]: date.checkIn },
                checkIn: { [Op.lt]: date.checkOut },
            },
        },
    });

    Room.findAllByFilter = async filterOptions => {
        const models = require('../models');

        const requestOption = [models.RoomOption];
        if (filterOptions && filterOptions.date) requestOption.push(createFilterOption(filterOptions.date, models));

        try {
            return await Room.findAll({
                include: requestOption,
            });
        } catch (error) {
            throw error;
        }
    };

    return Room;
};
