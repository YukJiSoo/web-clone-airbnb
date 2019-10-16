// npx sequelize-cli model:generate --name Room --attributes name:string,price:integer,max_guest:integer,star_rating:integer,review_num:integer,image_path:string

module.exports = (sequelize, DataTypes) => {
    const Room = sequelize.define(
        'Room',
        {
            name: DataTypes.STRING,
            price: DataTypes.INTEGER,
            max_guest: DataTypes.INTEGER,
            star_rating: DataTypes.INTEGER,
            review_num: DataTypes.INTEGER,
            image_path: DataTypes.STRING,
        },
        {},
    );
    Room.associate = function(models) {
        Room.belongsTo(models.Room_type);
        Room.hasOne(models.Room_option);
        Room.belongsToMany(models.User, { through: 'Bookings' });
    };
    return Room;
};
