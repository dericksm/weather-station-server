const Sequelize = require('sequelize')
const dbconfig = require('../config/database')

const WeatherStation = require('../models/WeatherStation')
const Reading = require('../models/Reading')

const connection = new Sequelize(dbconfig)

WeatherStation.init(connection)
Reading.init(connection)

WeatherStation.associate(connection.models)
Reading.associate(connection.models)



module.exports = connection