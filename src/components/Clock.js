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
        }, 1000);
    }, [])

    

return (
         <div className="clock">
            <h1 className="clock-text">{time}</h1>
             </div> 
)
}

export default Clock