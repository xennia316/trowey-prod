module.exports = (sequelize, DataTypes) => {
    const Collectors = sequelize.define("Collectors", {
        cid : {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name : {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password : {
            type: DataTypes.STRING,
            allowNull: false
        },
        contact : {
            type: DataTypes.INTEGER,
        },
        about : {
            type: DataTypes.TEXT,
        },
    }, 
    {
        tableName: "Collectors",
        timestamps: true,
        paranoid: true
    })

    Collectors.associate = (models) => {
        Collectors.hasMany(models.Routes, {
            foreignKey: {
                name: 'cid'
            }
        });
        Collectors.hasMany(models.Users, {
            foreignKey: {
                name: 'cid'
            }
        })
    }

    return Collectors
}