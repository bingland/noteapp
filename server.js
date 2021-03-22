const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// for environment variables
require('dotenv').config() 

const app = express()
const port = process.env.PORT || 3001

// let d = new Date()
// console.log(d)

// body parser
app.use(express.urlencoded({ extended: true }))

// cors
app.use(cors()) 

// static folder
app.use(express.static('build'))

// for deprication warnings for findOneAndUpdate() and useFindAndModify()
mongoose.set('useFindAndModify', false);

// connect to mongoDB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Controllers
const foldersController = require('./controllers/foldersController')
const notesController = require('./controllers/notesController')

// Routes
// Links to build folder for application view
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/build/index.html')
})

// notes routes
app.get('/api/note', notesController.getNote)
app.get('/api/notes', notesController.getAllNotes)
app.post('/api/note', notesController.createNote)
app.put('/api/note', notesController.editNote)
app.delete('/api/note', notesController.deleteNote)

// folders routes
app.get('/api/folder/:id', foldersController.getFolder)
app.get('/api/folders', foldersController.getAllFolders)

// run server on port
app.listen(port, () => { console.log(`Server running on port ${port}`) })