import './style.css'
import bookmarks from './bookmarks.js'
import Main from './components/Main'
import Clock from './components/Clock'
import Search from './components/Search'
import Bookmark from './components/Bookmark'

function App() {

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
        <Clock />
        <Search />
        <Main 
            social={social}
            dev={dev}
            entertainment={entertainment}
            tools={tools}
        />
    </div>
  );
}

export default App;