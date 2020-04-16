const Reading = require('../models/Reading')
const WeatherStation = require('../models/WeatherStation')

module.exports = {
    async create(req, res) {
        const { wh_id } = req.params

        const {
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

        const weatherStation = await WeatherStation.findByPk(wh_id)

        if (!weatherStation) {
            return res.status(400).json({ error: 'WeatherStation not found' })
        }

        await WeatherStation.update({
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
        }, { where: { id: wh_id } })

        const reading = await Reading.create({
            wh_id,
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



        return res.json(reading)
    },
    async getAll(req, res) {
        const { page = 1 } = req.query;
        const { wh_id } = req.params

        const { count } = await Reading.findAndCountAll()

        const pages = Math.ceil(count / 20);

        const readings = await Reading.findAll({
            where: {
                wh_id: wh_id
            },
            order: [
                ['created_at', 'DESC']
            ],
            limit: 20,
            offset: ((page - 1) * 20),
        })

        return res.json({
            readings: readings,
            count: count,
            pages: pages
        })
    }

}