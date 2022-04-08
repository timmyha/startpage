import {useEffect, useState} from 'react'

const Clock = () => {

    const [time, setTime] = useState()

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setTime(date.toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit' 
            }));
        }, 5000);
    }, [])

    const date = new Date();
            let timeDisplay = date.toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit' 
            });
    

return (
         <div className="clock">
            <h1 className="clock-text">{time ? time : timeDisplay}</h1>
             </div> 
)
}

export default Clock