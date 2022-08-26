import NoteContext from "./noteContext";
import { useState } from 'react'

const NoteState = (props) => {
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)


    // Get all Notes
    const getNotes = async () => {
        let url = `/api/notes/fetchallnotes`
        const response = await fetch(url, {  // Api call
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            }
        });
        const json = await response.json();
        setNotes(json);
    };


    // Add a note
    const addNote = async (title, description, tag) => {
        let url = `/api/notes/addnote`
        const response = await fetch(url, { // Api call
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });
        const note = await response.json();
        setNotes(notes.concat(note))
    };


    // Edit a Note
    const editNote = async (id, title, description, tag) => {
        let url = `/api/notes/updatenote/${id}`
        const response = await fetch(url, { // Api call
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();

        // Editing note
        let newNotes = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag
                break;
            }
        }
        setNotes(newNotes)
        props.showAlert('Note updated successfully ✅', 'success')
    };


    // Delete Note
    const deleteNote = async (id) => {
        let confirmDel = window.confirm("Do you really want to delete that note permanently?")
        if (confirmDel) {
            const url = `/api/notes/deletenote/${id}`
            const response = await fetch(url, { // Api call
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "auth-token": localStorage.getItem('token')
                }
            });
            const json = response.json();
            const newNotes = notes.filter((note) => { return note._id !== id })
            setNotes(newNotes)
            props.showAlert('Note deleted successfully ✅', 'success')
        }
    };


    return (
        <NoteContext.Provider value={{ notes, getNotes, addNote, editNote, deleteNote }}>
            {props.children}
        </NoteContext.Provider>
    )
};

export default NoteState;