import React from "react";
import './css/TextArea.css';

function TextArea(props) {

    return (
        <textarea 
            name={props.name}
            className={props.className}
            placeholder={props.placeholder}
            onChange={props.onChange}
            onClick={props.onClick}
            value={props.value}
            rows={props.rows}
            onKeyUp={props.keyUp}
            onKeyDown={props.keyDown}
            style={props.style}
        />
    );
}

export default TextArea;   