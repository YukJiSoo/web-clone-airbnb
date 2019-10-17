'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',
        {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            salt: DataTypes.STRING,
            isSuperHost: {
                type: DataTypes.BOOLEAN,
                field: 'is_super_host',
            },
        },
        {
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            tableName: 'users',
        },
    );
    User.associate = function(models) {
        User.hasMany(models.Room);
        User.belongsToMany(models.Room, { through: 'bookings' });
    };

    return User;
};
