import './style.css'
import bookmarks from './bookmarks.js'
import Main from './components/Main'
import Clock from './components/Clock'
import Search from './components/Search'
import Bookmark from './components/Bookmark'
import NotesToggle from './components/NotesToggle'
import Notes from './components/Notes'
import { useEffect, useState } from 'react'

function App() {

    useEffect(() => {
        const data = localStorage.getItem('my-notes')
            data && setNotes(JSON.parse(data))
    }, [])

    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("my-notes")) || [])
    const [notesApp, toggleNotesApp] = useState(true)

    useEffect(()=> {
        localStorage.setItem('my-notes', JSON.stringify(notes))
    })

    let social = bookmarks.map(bookmark => (
        bookmark.category === "social" && 
        <Bookmark 
            key={bookmark.title}
            title={bookmark.title}
            img={bookmark.img}
            onClick={bookmark.link} 
            color={bookmark.color}
        />
     ))

     let dev = bookmarks.map(bookmark => (
        bookmark.category === "dev" && 
        <Bookmark 
            key={bookmark.title}
            title={bookmark.title}
            img={bookmark.img}
            onClick={bookmark.link} 
            color={bookmark.color}
        />
     ))

     let entertainment = bookmarks.map(bookmark => (
        bookmark.category === "entertainment" && 
        <Bookmark 
            key={bookmark.title}
            title={bookmark.title}
            img={bookmark.img}
            onClick={bookmark.link} 
            color={bookmark.color}
        />
     ))

     let tools = bookmarks.map(bookmark => (
        bookmark.category === "tools" && 
        <Bookmark 
            key={bookmark.title}
            title={bookmark.title}
            img={bookmark.img}
            onClick={bookmark.link} 
            color={bookmark.color}
        />
     ))
        
  return (
    <div className="main-page">
        <Clock tools={tools} />
        <Search />
        <NotesToggle 
            toggleNotesApp={toggleNotesApp}
            notesApp={notesApp}
        />
    {   notesApp ? 
        <Main 
            social={social}
            dev={dev}
            entertainment={entertainment}
            tools={tools}
        /> : 
        <Notes
            notes={notes}
            setNotes={setNotes} /> }
    </div>
  );
}

export default App;