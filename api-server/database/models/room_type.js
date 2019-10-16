// npx sequelize-cli model:generate --name Room_type --attributes name:string

module.exports = (sequelize, DataTypes) => {
    const Room_type = sequelize.define(
        'Room_type',
        {
            name: DataTypes.STRING,
        },
        {},
    );
    Room_type.associate = function(models) {
        // associations can be defined here
    };
    return Room_type;
};
