import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'

function AddNote(props) {

    const context = useContext(noteContext)
    const { addNote } = context
    const [note, setNote] = useState({ title: "", description: "", tag: "General" })

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        props.showAlert('Note Added successfully ✅', 'success')
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    };

    return (
        <>
            <div className="container rounded shadow p-3 my-1" id='addNote'>
                <h1>Stick a new note</h1>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" placeholder="Add Title" onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" placeholder="Add Description" onChange={onChange} minLength={7} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" placeholder="Add Tag (Leave blank for default 'General')" onChange={onChange} />
                </div>
                <button disabled={note.title.length < 5 || note.description.length < 7} className="btn shadow rounded btn-sm btn-success" onClick={handleClick}>Add Note</button>
            </div>
        </>
    )
}

export default AddNote
