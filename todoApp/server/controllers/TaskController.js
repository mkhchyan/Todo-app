const { Task } = require("../models")

class TaskController {
    static async addTask(req, res) {
        console.log(req.body);
        const createTask = await Task.create({
            name: req.body.name,
            description: req.body.description,
            completed: req.body.completed ? req.body.completed : false
        })

        const task = await Task.findOne({
            where: { id: createTask.id },
            include: { all: true }
        })
        res.send(task)
    }

    static async getTasks(req, res) {
        let tasks = await Task.findAll({ include: { all: true } })
        res.send({ task: tasks })
    }

}
module.exports = { TaskController }