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
        backgroundColor: "red",
        // color : "voilet"
    };
    const styleDark = {
        backgroundColor: "green",
        // color : "voilet"
    };

    return (


        <>
            <div className="container my-4">

                <h2>Text Utility</h2>
                <div className="row">
                    <div className="form-group col-md-6">
                        <textarea className="form-control my-1 " rows="6" value={text} onChange={handleUpperCase} style={{ backgroundColor: props.theme === 'light' ? 'white' : '#242428', color: props.theme === 'light' ? 'black' : '#bbb', border: props.theme === 'light' ? '1px solid lightgrey' : '1px solid #444', }}></textarea>
                        <button className='btn btn-primary' onClick={handleUPClick}>Uppercase</button>
                        <button className='btn btn-danger mx-1' onClick={handleClear}>Crear</button>
                    </div>

                    <div className='col-md-6 rounded' >
                        <span  className='border-bottom fs-3' >Summary</span>
                        <div className="processed m3-2 text-dark">
                            <p>{text.split(" ").length} words and {text.length} Chacters</p>
                            <p>{0.008 * text.split(" ").length} Minutes read</p>
                            <span className='border-bottom fs-4'>Preview</span>
                            <p>{text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

