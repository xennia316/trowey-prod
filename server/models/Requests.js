module.exports = (sequelize, DataTypes) => {
    const Requests = sequelize.define("Requests", {
        rqid : {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        duration: {
            type: DataTypes.STRING,
            defaultValue: 'daily'
        },
        createdAt : {
            type: DataTypes.DATEONLY,
        },
    })

    return Requests;
}