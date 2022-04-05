import {useState} from 'react'

const NotesToggle = (props) => {

    const [notesStyle, setNotesStyle] = useState({
        "backgroundColor": "#EFE9F4",
        "color": "#484D6D",
        });
    const [bookmarkStyle, setBookmarkStyle] = useState({
        "backgroundColor": "#484D6D",
        "color": "#EFE9F4",
        "pointerEvents": "none"
        });

    const toggleBookmarks = () => {
        setNotesStyle(bookmarkStyle)
        setBookmarkStyle(notesStyle)
        props.toggleNotesApp(true)
    }

    const toggleNotes = () => {
        setBookmarkStyle(notesStyle)
        setNotesStyle(bookmarkStyle)
        props.toggleNotesApp(false)
    }

    return (
        <div className="toggle-buttons">
        <span 
            style={bookmarkStyle}
            onClick={toggleBookmarks} 
            className="bookmarks-button">
                Bookmarks
        </span>
        <span 
            style={notesStyle}
            onClick={toggleNotes}
            className="notes-button">
                Notes
        </span>
        </div>
    )
}

export default NotesToggle