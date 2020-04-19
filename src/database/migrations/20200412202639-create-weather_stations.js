'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('weather_stations', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: false,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: true
            },
            address: {
                type: Sequelize.STRING,
                allowNull: true
            },
            description: {
                type: Sequelize.STRING,
                allowNull: true
            },
            date_day: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            date_month: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            date_year: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            date_hours: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            date_minutes: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            temperature: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            humidity: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            rainning_pulses: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            time_without_rainning: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            wind_direction: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            speed: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false
            }
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('weather_stations');
    }
};