import axios from 'axios'
import {useState, useEffect} from 'react'

const Clock = (props) => {

    const date = new Date();
        const timeNow = date.toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit' 
            });

return (
         <div className="clock">
            <h1 className="clock-text">{timeNow}</h1>
             </div> 
)
}

export default Clock