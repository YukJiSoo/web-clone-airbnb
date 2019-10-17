'use strict';
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
        Room.belongsToMany(models.User, { through: 'bookings' });
    };

    return Room;
};
