import React, { useContext, useEffect, useRef, useState } from 'react'
import AddNote from './AddNote'
import NotesItem from './NotesItem'
import noteContext from '../context/notes/noteContext'
import { useNavigate } from 'react-router-dom';

function Notes(props) {
    let navigate = useNavigate();
    const { showAlert } = props
    const context = useContext(noteContext)
    const { notes, getNotes, editNote } = context
    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes();
        } else {
            navigate("/home");
        }
        // eslint-disable-next-line
    }, [])

    const updateNote = (currentNote) => {
        ref.current.click()
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag, })
    };

    const handleClick = (e) => {
        editNote(note.id, note.etitle, note.edescription, note.etag);
        refClose.current.click()
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    };

    return (
        <>
            <AddNote showAlert={showAlert} />

            <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop" ref={ref}>
                Launch static backdrop modal
            </button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content editNote">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="etitle" className="form-label">Title</label>
                                <input type="text" className="form-control" id="etitle" name="etitle" placeholder="Edit Title" onChange={onChange} value={note.etitle} minLength={5} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="edescription" className="form-label">Description</label>
                                <input type="text" className="form-control" id="edescription" name="edescription" placeholder="Edit Description" onChange={onChange} value={note.edescription} minLength={7} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="etag" className="form-label">Tag</label>
                                <input type="text" className="form-control" id="etag" name="etag" placeholder="Edit Tag (Leave blank for default 'General')" onChange={onChange} value={note.etag} minLength={5} required />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button disabled={note.etitle.length < 5 || note.edescription.length < 7} type="button" className="btn btn-primary btn-sm" onClick={handleClick}>Update Note</button>
                            <button type="button" className="btn btn-dark btn-sm" data-bs-dismiss="modal" ref={refClose}>Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3">
                <h1 className="my-3">Sticked Notes</h1>
                <div className="container" id='ifEmpty'>
                    {notes.length === 0 && "You haven't sticked any note yet. Start sticking your Notes! 😄"}
                </div>
                {notes.map((note, index) => {
                    return <NotesItem key={index} note={note} updateNote={updateNote} />
                })}
            </div>
        </>
    )
}

export default Notes
