import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

function NotesItem(props) {
    const context = useContext(noteContext)
    const { deleteNote } = context
    const { note, updateNote } = props
    return (
        <>
            <div className="col-md-3">
                <div className="card rounded shadow my-3" id='yourNotes'>
                    <div className="card-body">
                        <h5 className="card-title mt-2">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                        <div>
                            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-warning p-2">
                                {note.tag === '' ? 'General' : note.tag}
                            </span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <i className="fa-solid fa-pen-to-square mx-2 rounded shadow" onClick={() => { updateNote(note) }}></i>
                            <i className="fa-solid fa-trash-can mx-2 rounded shadow" onClick={() => { deleteNote(note._id) }}></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotesItem
