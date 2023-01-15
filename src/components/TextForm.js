import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');
    const handleUPClick = () => {
        if (text.length !== 0) {
            console.log('Converting to upper case');
            let UCtext = text.toUpperCase();
            setText(UCtext);
        }
        else {
            console.log('Some text required to perform this operation.')
        }
    }

    const handleUpperCase = (e) => {
        console.log('Converted Upper Case');
        setText(e.target.value)
    }
    const handleClear = (e) => {
        if (text.length === 0) {
            console.log('Already Cleared!');
        }
        else {
            console.log('Text Field Cleared');
            setText('')
        }
    }

    const styleLight = {
        backgroundColor:"red",
        // color : "voilet"
    };
    const styleDark = {
        backgroundColor:"green",
        // color : "voilet"
    };

    return (


        <>
            <h2>Text Utility</h2>
            <div className="form-group">
                <textarea className="form-control my-1 " rows="6" value={text} onChange={handleUpperCase} style = {{backgroundColor: props.theme==='light'?'white':'#242428', color: props.theme==='light'?'black':'#bbb',   border:props.theme==='light'?'1px solid lightgrey':'1px solid #444',} }></textarea>
                <button className='btn btn-primary' onClick={handleUPClick}>Uppercase</button>
                <button className='btn btn-danger mx-1' onClick={handleClear}>Crear</button>
            </div>
            <hr />
            <div className=''>
                <h3 >Summary</h3>
                <p>{text.split(" ").length} words and {text.length} Chacters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h5>Preview</h5>
                <p>{text}</p>
            </div>
        </>
    )
}

