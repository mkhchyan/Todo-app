const { Task } = require("../models")

class TaskCompleteController {
    static async completeTask(req, res) {
        console.log(req.body);
        const completedTask = await Task.update({
            completed: req.body.completed
        },
            {
                where: { id: req.body.id }
            })
        res.send({ completedTask })
    }

}

module.exports = { TaskCompleteController }