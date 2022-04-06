import {useState, useEffect} from 'react'
import TextareaAutosize from "react-autosize-textarea"
import { nanoid } from 'nanoid'
import toast, { Toaster } from 'react-hot-toast';

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
                toast.success('', {duration: 1000})
               }
            }

    const handleDeleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id))
        toast.error('', {duration: 1000})
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

    const placeholders = ["feed your dog", "call the cops", "call your mom", "get outta this town", "get on my bike and go",
                          "run away from home", "jump around", "go back to school", "finally watch the sopranos",
                          "go to church", "learn to roller skate", "change my passwords", "apologize for everything"]
    const randomInt = Math.floor(Math.random() * placeholders.length)

    const placeholderText = `new task e.g. "${placeholders[randomInt]}"`

    return (
        <div>
            <ul>{notesContent}</ul>
        <TextareaAutosize
            autoFocus
            className="input-note"
            placeholder={placeholderText}
            onKeyDown={handleSubmit}
            value={notesField}
            onChange={handleNotesFieldChange}
        />
        </div>
    )
}

export default Notes