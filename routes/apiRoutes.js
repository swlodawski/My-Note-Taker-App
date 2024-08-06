const express = require('express');
const router = express.Router();
const store = require('../db/store');

router.get('/notes', (req, res) => {
    store.getNotes().then((note) => {
        console.log(note);
        return res.json(note);
    })
    .catch((err) => {
        res.status(500).json(err);
    }) 
})
router.post('/notes', (req, res) => {
    store.addNotes(req.body).then((note) => {
        console.log(note);
        return res.json(note);
    })
    .catch((err) => {
        res.status(500).json(err);
    }) 
})
router.delete('/notes/:id', (req, res) => {
    store.deleteNotes(req.params.id).then(() => {
        res.json
    })
})

module.exports = router;