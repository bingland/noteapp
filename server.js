const express = require('express')
const mongoose = require('mongoose')

// for environment variables
require('dotenv').config() 

const app = express()
const port = process.env.PORT || 3001

// body parser
app.use(express.urlencoded({ extended: true }))

// static folder
app.use(express.static('build'))

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/build/index.html')
})

app.get('/api/', (req, res) => {
    res.json({"hello":["chirs", "ben"]})
});

app.listen(port, () => { console.log(`Server running on port ${port}`) })