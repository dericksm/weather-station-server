const Reading = require('../models/Reading')
const WeatherStation = require('../models/WeatherStation')
const Sequelize = require('sequelize');
const op = Sequelize.Op;

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


        let full_date
        if (date_day != null && date_month != null && date_year != null && date_hours != null && date_minutes != null) {
            full_date = new Date(`${date_month}-${date_day}-${date_year} ${date_hours}:${date_minutes}:00`)
        } else {
            full_date = null
        }

        await WeatherStation.update({
            full_date,
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
            full_date,
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

        const count = await Reading.count({
            where: { wh_id: wh_id }
        })

        const pages = Math.ceil(count / 20);

        const readings = await Reading.findAll({
            where: {
                wh_id: wh_id
            },
            order: [
                ['full_date', 'DESC']
            ],
            limit: 20,
            offset: ((page - 1) * 20),
        })

        return res.json({
            readings: readings,
            count: count,
            pages: pages
        })
    },
    async getByDate(req, res) {
        const { wh_id } = req.params
        const { startDate, endDate } = req.query
        const weatherStation = await WeatherStation.findByPk(wh_id)

        if (!weatherStation) {
            return res.status(400).json({ error: 'WeatherStation not found' })
        }
        const readings = await Reading.findAll({
            raw: true,
            where: {
                wh_id: wh_id,
                created_at: {
                    [op.between]: [startDate, endDate]
                }
            },
            order: [
                ['created_at', 'DESC']
            ],

        })

        return res.json(readings)

    }


}