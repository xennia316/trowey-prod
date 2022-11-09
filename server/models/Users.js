module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        uid : {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name : {
            type: DataTypes.STRING, 
            allowNull: false,
        },
        phone : {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        password : {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName : "Users",
        timestamps: true,
        paranoid: true
    }
    )

    Users.associate = (models) => {
        Users.hasMany(models.Requests, {
            foreignKey: {
                name: 'uid'
            }
        });
    }

    return Users;

    
}