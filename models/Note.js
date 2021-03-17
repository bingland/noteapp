const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    title: String,
    body: String,
    date: Date,
    folder: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Folder'
    }
}, { collection: 'notes' })

module.exports = mongoose.model('Note', NoteSchema)