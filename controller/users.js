const { Users } = require('../models')

class UsersController {
    static async readAll(req, res) {
        try {
            const results = await Users.findAll()
            res.status(200).json(results)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static async readOne(req, res) {
        const { id } = req.params
        try {
            const results = await Users.findOne({
                where: { id: Number(id) }
            })
            res.status(200).json(results)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static async create(req, res) {
        const { body } = req
        try {
            const results = await Users.create({
                name: body.name,
                last_name: body.last_name,
                age: Number(body.age)
            })
            res.status(200).json(results)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static async update(req, res) {
        const { id } = req.params
        const { body } = req
        if (body.age) {
            body.age = Number(body.age)
        }
        try {
            const results = await Users.update({ ...body }, {
                where: {
                    id: Number(id)
                }
            })
            res.status(200).json({
                message: `Usuário de id ${id} foi alterado`,
                body
            })
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static async delete(req, res) {
        const { id } = req.params
        try {
            await Users.destroy({ where: { id: Number(id) } })
            res.status(200).json({
                message: `Usuário de id ${id} foi alterado`,
            })
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = UsersController