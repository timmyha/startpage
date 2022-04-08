import {useState} from 'react'
import TextareaAutosize from "react-autosize-textarea"
import { nanoid } from 'nanoid'
import toast from 'react-hot-toast';
import NoteItem from './NoteItem.js'
import NotesHelpIcon from './icons/NotesHelpIcon.js'
import placeholders from './resources/placeholders.js'

const Notes = ({notes, setNotes, id}) => {

    const [notesField, setNotesField] = useState('');

    const handleSubmit = (event) => {
        if (notesField.length > 0 &&
            notesField.match(/[a-zA-Z0-9!@#$%^&*()]/) &&
            event.key === 'Enter') {
            event.preventDefault();
            setNotes([
                ...notes, 
                {
                    content: event.target.value,
                    isComplete: false,
                    id: nanoid()
                }
                    ]);
                setNotesField('');
                toast.success('', {duration: 1000});
               }
            if (notesField.match("!delete")) {
                setNotes([]);
            }}

    const handleDeleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id));
        toast.error('', {duration: 1000});
    };

    function handleMarkComplete(id) {
        let completed = notes.map(note => {
            if (note.id === id) {
                note.isComplete = !note.isComplete;
            }
            return note;
        });
        setNotes(completed);
    }

    const notesContent = notes.map(note => {
       return   note.content.length > 0 && <NoteItem 
                    key={nanoid()}
                    handleDeleteNote={()=> handleDeleteNote(note.id)}
                    content={note.content}
                    handleMarkComplete={()=> handleMarkComplete(note.id)}
                    isComplete={note.isComplete}
                />
    })

    const handleNotesFieldChange = (event) => {
        setNotesField(event.target.value)
    }

    const randomInt = Math.floor(Math.random() * placeholders.length)

    const placeholderText = `new task e.g. "${placeholders[randomInt]}"`

    return (
        <div>
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
            <div className="notes-help-position">
                <NotesHelpIcon />
            </div>
        </div>
    )}

export default Notes