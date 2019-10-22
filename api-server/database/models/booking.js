'use strict';
module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define(
        'Booking',
        {
            checkIn: {
                allowNull: false,
                type: DataTypes.DATE,
                field: 'check_in',
            },
            checkOut: {
                allowNull: false,
                type: DataTypes.DATE,
                field: 'check_out',
            },
        },
        {
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            tableName: 'bookings',
        },
    );

    return Booking;
};
