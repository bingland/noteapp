const Folder = require('../models/Folder')

// requires folder id
exports.getFolder = (req, res) => {

    Folder.findById(`${req.query.id}`, (err, results) => {
        if (err) console.log(err)
    })
    .populate(['notes'])
    .exec((err, results) => {
        if (err) console.log(err)
        res.json(results)
    })
}

exports.getAllFolders = (req, res) => {
    Folder.find()
    .populate(['notes'])
    .exec((err, results) => {
        if (err) console.log(err)

        res.json(results)
    })
}