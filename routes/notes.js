const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser')
const Note = require('../models/Note')
const { body, validationResult } = require('express-validator');

//Route:1 - Fetch all notes for logged-in user @ GET: /api/notes/fetchallnotes -Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
    }
    catch (err) {
        console.error(err.message)
        res.status(500).send('Internal Server Error')
    }
});

//Route:2 - Add a new note for logged-in user @ POST: /api/notes/addnote -Login required
router.post('/addnote', [
    body('title', 'Title must be greater than 5 characters').isLength({ min: 5 }),
    body('description', 'Description must be greater than 7 characters').isLength({ min: 7 })
], fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;

    // If erros throw bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const note = new Note({
            title,
            description,
            tag,
            user: req.user.id
        });
        const savedNote = await note.save();
        res.json(savedNote);
    }
    catch (err) {
        console.error(err.message)
        res.status(500).send('Internal Server Error')
    }
});

//Route:3 - Update a note for an existing logged-in user @ PUT: /api/notes/updatenote -Login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;

    try {
        // Create a newNote object
        const newNote = {}
        if (title) { newNote.title = title }
        if (description) { newNote.description = description }
        if (tag) { newNote.tag = tag }

        // Find the note to be updated
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send('Note not found') };

        // check whether the same person is updating note or not
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Unauthorized Request: You don't have permission to perform this operation")
        };
        // Update note
        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json(note)
    }
    catch (err) {
        console.error(err.message)
        res.status(500).send('Internal Server Error')
    }
});

//Route:4 - Delete a note for an existing logged-in user @ DELETE: /api/notes/deletenote -Login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        // Find the note to be deleted
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send('Note not found') };

        // check whether the same person is deleting note or not
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Unauthorized Request: You don't have permission to perform this operation")
        };

        // Delete note
        note = await Note.findByIdAndDelete(req.params.id);
        res.json({ "Status": "Note deleted successfully", "deletedNote": note })
    }
    catch (err) {
        console.error(err.message)
        res.status(500).send('Internal Server Error')
    }
});

module.exports = router