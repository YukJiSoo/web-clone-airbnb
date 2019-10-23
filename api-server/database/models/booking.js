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
            adult: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            children: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            infant: {
                allowNull: false,
                type: DataTypes.INTEGER,
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
