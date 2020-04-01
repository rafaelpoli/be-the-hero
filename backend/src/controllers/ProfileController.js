const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const id = request.headers.authorization
        const ong_incidents = await connection('incidents').select('*').where('ong_id',id)

        return response.json(ong_incidents)
    },
}