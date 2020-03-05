const express = require("express")
const ctrl = require("./controllers/controller")
const cors = require("cors")

const app = express()
const port = 4338

app.use(cors())
app.use(express.json())

app.get('/api/users', ctrl.getAllUsers)
app.get('/api/users/:identifier', ctrl.getSingleUser)
app.post('/api/users', ctrl.addUser)

app.listen(port, () => console.log(`Server running on ${port}`))