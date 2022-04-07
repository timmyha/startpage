import {useState} from 'react'

let Bookmark = (props) => {

    const [color, setColor] = useState("");
    const [text, setText] = useState(props.color);
    const styles = {
        "display": "flex",
        "flexDirection": "row",
        "borderRadius": "3px",
        "justifyContent": "center",
        "borderWidth": " 1px 1px 1px 30px",
        "color": text,
        "backgroundColor": color,
        "textTransform": "uppercase",
        "border": `1px solid ${props.color}`,
        "borderLeft": `30px solid ${props.color}`,
        "width": "inherit",
        "height": "40px",
        "alignItems": "center",
        "marginBottom": "5px",
        "cursor": "pointer",
        "transition": "all 0.3s ease 0s",
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
             className="bookmark-button"
        >
            <div className="bookmark-title">
                {props.title}
            </div>
        </div>
    )
}

export default Bookmark