const WeatherStation = require('../models/WeatherStation')

module.exports = {
    async getAll(req, res) {
        const weatherStations = await WeatherStation.findAll()
        return res.json(weatherStations)
    },
    async getById(req, res) {
        const { id } = req.params
        const weatherStation = await WeatherStation.findByPk(id)
        if (!weatherStation) {
            return res.status(404).json({ error: "Weather Station not found" })
        }
        return res.json(weatherStation)
    },
    async createOrUpdate(req, res) {
        const {
            id,
            date_day,
            date_month,
            date_year,
            date_hours,
            date_minutes,
            temperature,
            humidity,
            rainning_pulses,
            time_without_rainning,
            wind_direction,
            speed
        } = req.body

        const weatherStation = await WeatherStation.findByPk(id)


        if (!weatherStation) {
            const newWeatherStation = await WeatherStation.create({
                id,
                date_day,
                date_month,
                date_year,
                date_hours,
                date_minutes,
                temperature,
                humidity,
                rainning_pulses,
                time_without_rainning,
                wind_direction,
                speed
            })

            return res.status(200).json(newWeatherStation)
        }

        const weatherStationUpdated = await WeatherStation.update({
            date_day,
            date_month,
            date_year,
            date_hours,
            date_minutes,
            temperature,
            humidity,
            rainning_pulses,
            time_without_rainning,
            wind_direction,
            speed
        }, { where: { id } })

        return res.json(weatherStationUpdated)
    },
    async update(req, res) {

        const { id } = req.params
        const {
            name,
            address,
            description
        } = req.body

        let weatherStation = await WeatherStation.findByPk(id)


        if (!weatherStation) {
            return res.status(404).json({ error: "Weather Station not found" })
        }

        const weatherStationUpdated = await WeatherStation.update({
            name,
            address,
            description
        }, { where: { id } })

        weatherStation = await WeatherStation.findByPk(id)
        console.log(weatherStation)
        return res.json(weatherStation)
    }

}