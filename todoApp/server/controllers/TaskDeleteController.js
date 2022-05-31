const { Task } = require("../models")

class TaskDeleteController {
    static async deleteTask(req, res) {
        const deletedTask = await Task.destroy({
            where: { id: req.params.id }
        })
        res.send({ deletedTask })
    }

}
module.exports = { TaskDeleteController }