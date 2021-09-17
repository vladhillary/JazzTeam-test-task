const LOGIN = 'Admin'
const PASSWORD = '12345678'

const express = require('express')
const app = express();
const cors = require("cors")
const PORT = 3001

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.get('/', (req, res) => {

    res.json({
        login: LOGIN,
        password: PASSWORD
    })
})

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})


