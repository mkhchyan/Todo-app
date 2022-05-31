module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define('tasks', {
        name: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.STRING
        },
        completed: {
            type: Sequelize.BOOLEAN ,
            defaultValue: false
        },
    },
        {
            freezeTableName: true,
            timestamps: false,
        })
    return Task
};