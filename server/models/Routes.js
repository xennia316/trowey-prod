module.exports = (sequelize, DataTypes) => {
    const Routes = sequelize.define(
        "Routes", {
            rid: {
                type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            },
            monday: {
                type: DataTypes.JSON,
                allowNull: false,
            },
            tuesday: {
                type: DataTypes.JSON,
                allowNull: false,
            },
            wednesday: {
                type: DataTypes.JSON,
                allowNull: false,
            },
            thursday: {
                type: DataTypes.JSON,
                allowNull: false,
            },
            friday: {
                type: DataTypes.JSON,
                allowNull: false,
            },
            saturday: {
                type: DataTypes.JSON,
                allowNull: false,
            },
            sunday: {
                type: DataTypes.JSON,
                allowNull: false,
            },
            start_time: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
            end_time: {
                type: DataTypes.DATEONLY,
                allowNull: false
            }
        },
        {
            tableName: "Routes",
            timestamps: true,
            paranoid: true
        }
    )

    return Routes
}