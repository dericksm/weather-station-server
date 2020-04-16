const express = require('express')

const routes = express.Router()

const WeatherStationController = require('./src/controllers/WeatherStationController')
const ReadingsController = require('./src/controllers/ReadingsController')

routes.get('/', function(req, res) {
    res.json('Oi')
})


//WeatherStation routes
routes.get('/weatherStation', WeatherStationController.getAll)
routes.get('/weatherStation/:id', WeatherStationController.getById)
routes.post('/weatherStation', WeatherStationController.createOrUpdate)
routes.put('/weatherStation/update/:id', WeatherStationController.update)


//Reading routes
routes.get('/readings/:wh_id', ReadingsController.getAll)
routes.post('/readings/:wh_id', ReadingsController.create)

module.exports = routes