const Note = require('../models/Note')

exports.getNote = (req, res) => {

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
    Note.find()
    .populate('folder')
    .exec((err, results) => {
        if (err) console.log(err)
        res.json(results)
    })
}