import {useState} from 'react'

const NoteItem = ({handleDeleteNote, content }) => {

    const [completed, setCompleted] = useState(false)

    const handleMarkComplete = () => {
        setCompleted(!completed)
    }

    return (
        <li
                    className={completed ? "note-item-completed" : "note-item"}
                    onClick={handleMarkComplete}
                    onDoubleClick={handleDeleteNote}
                >
                    {content}
                </li>
    )
}

export default NoteItem