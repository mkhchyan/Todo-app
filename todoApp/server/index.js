const express = require("express");
const app = express();
const cors = require('cors');
const { TaskController } = require("./controllers/TaskController");
const { TaskDeleteController } = require("./controllers/TaskDeleteController");
const { TaskCompleteController } = require("./controllers/TaskCompleteController");

// app.use(cors(corsOptions))
app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 
app.use(cors({ origin: "http://localhost:3000", credentials: true }))

app.get("/", (req, res) => {
    res.send({ status: "OK" })
})

app.post("/addTask", TaskController.addTask)
app.post("/getTask", TaskController.getTasks)
app.delete("/delete-task/:id", TaskDeleteController.deleteTask)
app.post("/completed", TaskCompleteController.completeTask)

app.listen(5000);