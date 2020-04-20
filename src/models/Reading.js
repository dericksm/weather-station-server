const { Model, DataTypes } = require('sequelize')

class Reading extends Model {
    static init(sequelize) {
        super.init({
            full_date: DataTypes.DATE,
            date_day: DataTypes.INTEGER,
            date_month: DataTypes.INTEGER,
            date_year: DataTypes.INTEGER,
            date_hours: DataTypes.INTEGER,
            date_minutes: DataTypes.INTEGER,
            temperature: DataTypes.INTEGER,
            humidity: DataTypes.INTEGER,
            rainning_pulses: DataTypes.INTEGER,
            time_without_rainning: DataTypes.INTEGER,
            wind_direction: DataTypes.INTEGER,
            speed: DataTypes.INTEGER
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.WeatherStation, { foreignKey: 'wh_id', as: 'weatherstations' })
    }
}

module.exports = Reading