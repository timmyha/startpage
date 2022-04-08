import DeleteNote from './icons/DeleteNote'

const NoteItem = ({handleDeleteNote, content, handleMarkComplete, isComplete }) => {


    return (
        <div className="note-item-container">
        <li
                    className={isComplete ? "note-item-completed" : "note-item"}
                    onClick={handleMarkComplete}
                    onDoubleClick={handleDeleteNote}
                >
                    {content} 
                </li>
                <button 
                onClick={handleDeleteNote}
                className="delete-note-button"> <DeleteNote /> </button>
                </div>
    )
}

export default NoteItem