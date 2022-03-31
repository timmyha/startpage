import {useState} from 'react'

let Bookmark = (props) => {

    const [color, setColor] = useState("");
    const [text, setText] = useState(props.color);
    const styles = {
        "display": "flex",
        "flex-direction": "row",
        "border-radius": "3px",
        "justify-content": "center",
        "border-width": "1px",
        "color": text,
        "background-color": color,
        "text-transform": "uppercase",
        "border": `1px solid ${props.color}`,
        "border-left": `30px solid ${props.color}`,
        "width": "150px",
        "height": "40px",
        "align-items": "center",
        "margin-left": "10px",
        "margin-bottom": "5px",
        "cursor": "pointer"
  };

    let clickLink = () => {
        window.location = (props.onClick) 
    }

    let onHover = () => {
        setColor(props.color)
        setText("#EFE9F4")
    }

    let offHover = () => {
        setColor("")
        setText(props.color)
    }

    return (
        <div 
            onClick={clickLink} 
            onMouseOver={onHover} 
            onMouseOut={offHover}
             style={styles}
        >
            <div className="bookmark-title">
                {props.title}
            </div>
        </div>
    )
}

export default Bookmark