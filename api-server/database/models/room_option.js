// npx sequelize-cli model:generate --name Room_option --attributes bed:integer,bedroom:integer,bathroom:integer,free_parking:boolean,wifi:boolean,kitchen:boolean,washer:boolean --force

module.exports = (sequelize, DataTypes) => {
    const Room_option = sequelize.define(
        'Room_option',
        {
            bed: DataTypes.INTEGER,
            bedroom: DataTypes.INTEGER,
            bathroom: DataTypes.INTEGER,
            free_parking: DataTypes.BOOLEAN,
            wifi: DataTypes.BOOLEAN,
            kitchen: DataTypes.BOOLEAN,
            washer: DataTypes.BOOLEAN,
        },
        {},
    );
    Room_option.associate = function(models) {
        // associations can be defined here
    };
    return Room_option;
};
