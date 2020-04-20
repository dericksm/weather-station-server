'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('readings', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            wh_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: 'weather_stations', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            full_date: {
                type: Sequelize.DATE,
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
        return queryInterface.dropTable('readings')
    }
};