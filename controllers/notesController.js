const Note = require('../models/Note')
const Folder = require('../models/Folder')

// GET methods

exports.getNote = (req, res) => {
    console.log('notesController / getNote')

    Note.findById(`${req.params.id}`, (err, results) => {
        if (err) console.log(err)
    })
    .populate('folder')
    .exec((err, results) => {
        if (err) console.log(err)
        res.json(results)
    })
}

exports.getAllNotes = (req, res) => {
    console.log('notesController / getAllNotes')

    Note.find()
    .populate('folder')
    .exec((err, results) => {
        if (err) console.log(err)
        res.json(results)
    })
}

// POST methods

exports.createNote = (req, res) => {
    console.log('notesController / createNote')

    console.log(req.query.folder)

    Note.create({
        title: 'Untitled Note',
        body: '',
        date: new Date(), // CURRENT SYSTEM DATE
        folder: req.query.folder
    }, (err, note) => {
        if (err) console.log(err)

        // add an ObjectID to notes array in folder
        Folder.findOneAndUpdate(
            {_id: note.folder},
            { $addToSet: {notes: note._id} },
            (err, result) => {
                if (err) console.log(err)
            }
        )

        Note.find()
        .populate('folder')
        .exec((err, results) => {
            if (err) console.log(err)
            res.json(results)
        })
    })
}

// PUT methods

exports.editNote = (req, res) => {
    console.log('notesController / createNote')
    console.log(req.query.id)

    Note.findById(`${req.query.id}`, (err, note) => {
        if (err) console.log(err)
        
        note.title = req.query.title
        note.body = req.query.body
        note.date = new Date()
        note.folder = req.query.folder

        note.updateOne(note, (err, result) => {
            if (err) console.log(err)

            Note.findById(`${note._id}`, (err, results) => {
                if (err) console.log(err)
            })
            .populate('folder')
            .exec((err, results) => {
                if (err) console.log(err)

                res.json(results)
            })
        })
    })
}
