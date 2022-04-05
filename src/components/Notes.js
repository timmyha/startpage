import {useState, useEffect} from 'react'
import TextareaAutosize from "react-autosize-textarea"
import noteService from '../services/notes'
import DeleteIcon from './icons/trashcan.js'
import { nanoid } from 'nanoid'


const Notes = ({notes, setNotes, id}) => {

    const [notesField, setNotesField] = useState('')

    const handleSubmit = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            setNotes([
                ...notes, 
                {
                    content: event.target.value,
                    id: nanoid()
                }
                    ])
                setNotesField('')
               }
            }

    const handleDeleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id))
    };

    const notesContent = notes.map(note => {
       return   <li 
                    className="note-item"
                    key={nanoid()}
                    onClick={() => handleDeleteNote(note.id)}
                >
                    {note.content}
                </li>
    }
    )

    const handleNotesFieldChange = (event) => {
        setNotesField(event.target.value)
    }

    return (
        <div>
            <ul>{notesContent}</ul>
        <TextareaAutosize
            autoFocus
            className="input-note"
            placeholder='...new note'
            onKeyDown={handleSubmit}
            value={notesField}
            onChange={handleNotesFieldChange}
        />
        </div>
    )
}

export default Notes