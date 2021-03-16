const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 3001

// body parser
app.use(express.urlencoded({ extended: true }))

// static folder
app.use(express.static('build'))

// react index.html file
//const reactPath = __dirname + '/build/index.html'

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/build/index.html')
})

app.get('/api/', (req, res) => {
    res.json({"hello":["chirs", "ben"]})
});

app.listen(port, () => { console.log(`Server running on port ${port}`) })