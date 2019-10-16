// npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string,salt:string,is_super_host:boolean

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',
        {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            salt: DataTypes.STRING,
            is_super_host: DataTypes.BOOLEAN,
        },
        {},
    );
    User.associate = function(models) {
        User.hasMany(models.Room);
        User.belongsToMany(models.Room, { through: 'Bookings' });
    };
    return User;
};
