const Note = require('../models/Note')
const Folder = require('../models/Folder')

// GET methods

// requires note id
exports.getNote = (req, res) => {
    console.log('notesController / getNote')

    Note.findById(`${req.query.id}`, (err, results) => {
        if (err) console.log(err)
    })
    .populate('folder')
    .exec((err, results) => {
        if (err) console.log(err)
        res.json(results)
    })
}

// requires nothing
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

// requires folder
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

        // Note.find()
        // .populate('folder')
        // .exec((err, results) => {
        //     if (err) console.log(err)
        //     res.json(results)
        // })

        // return all folders with all notes
        Folder.find()
        .populate(['notes'])
        .exec((err, results) => {
            if (err) console.log(err)

            res.json(results)
        })
    })
}

// PUT methods

// requires title, body, folder, id
exports.editNote = (req, res) => {
    console.log('notesController / editNote')

    Note.findById(`${req.query.id}`, (err, note) => {
        if (err) console.log(err)
        
        note.title = req.query.title
        note.body = req.query.body
        note.date = new Date()
        note.folder = req.query.folder

        note.updateOne(note, (err, result) => {
            if (err) console.log(err)

            // Note.findById(`${note._id}`, (err, results) => {
            //     if (err) console.log(err)
            // })
            // .populate('folder')
            // .exec((err, results) => {
            //     if (err) console.log(err)

            //     res.json(results)
            // })

            // return all folders with all notes
            Folder.find()
            .populate(['notes'])
            .exec((err, results) => {
                if (err) console.log(err)

                res.json(results)
            })
        })
    })
}

// requires note id
exports.deleteNote = (req, res) => {
    console.log('notesController / deleteNote')

    Note.findById(`${req.query.id}`, (err, note) => {
        if (err) console.log(err)

        let folderId = note.folder
        let noteId = note._id

        // delete the note
        Note.deleteOne({_id: req.query.id}, (err, note) => {
            if (err) console.log(err)

            // remove redundant ObjectID from folder
            Folder.findOneAndUpdate(
                {_id: folderId},
                { $pull: {notes: noteId} },
                (err, result) => {
                    if (err) console.log(err)
                }
            )
        })

        // return folder w/ notes
        // Folder.findById(`${folderId}`, (err, results) => {
        //     if (err) console.log(err)
        // })
        // .populate(['notes'])
        // .exec((err, results) => {
        //     if (err) console.log(err)
        //     res.json(results)
        // })

        // return all folders with all notes
        Folder.find()
        .populate(['notes'])
        .exec((err, results) => {
            if (err) console.log(err)

            res.json(results)
        })
    })

}