const Folder = require('../models/Folder')

// requires folder id
exports.getFolder = (req, res) => {
    console.log('foldersController / getFolder')

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
    console.log('foldersController / getAllFolders')

    Folder.find()
    .populate(['notes'])
    .exec((err, results) => {
        if (err) console.log(err)

        res.json(results)
    })
}