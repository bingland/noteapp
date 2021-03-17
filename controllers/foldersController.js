const Folder = require('../models/Folder')

exports.getFolder = (req, res) => {

    Folder.findById(`${req.params.id}`, (err, results) => {
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
    // .populate(['notes'])
    .exec((err, results) => {
        if (err) console.log(err)

        res.json(results)
    })
}