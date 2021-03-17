const mongoose = require('mongoose')

const FolderSchema = new mongoose.Schema({
    name: String,
    notes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note'
    }]
}, { collection: 'folders' })

module.exports = mongoose.model('Folder', FolderSchema)