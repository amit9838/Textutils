import { Paper,Card, CardContent,ToggleButton ,ToggleButtonGroup} from '@mui/material';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [lastUndo,setLastUndo]=useState([]);
 // const [lastRedo,setLastRedo]=useState([]);
  const [isupper, setisUpper] = useState(false);
  const [alignment, setAlignment] = React.useState('left');
  const handleUPClick = () => {
    setisUpper(true);
    console.log("adding test comment");









    
    if (text.length !== 0) {
        //setLastUndo(text)
     console.log("Converting to upper case");
      setLastUndo([...lastUndo,text])
      let UCtext = text.toUpperCase();
      setText(UCtext);
    } else {
     console.log("Some text required to perform this operation.");
    }
  };
  function handleAlignment(e,newOne){
    e.preventDefault()
    setAlignment(newOne)
  }
  const handleUpperCase = (e) => {
    //console.log("Converted Upper Case");
    setLastUndo([...lastUndo,text])
    setText(e.target.value);
  };
  const handleClear = (e) => {
    if (text.length === 0) {
    //  console.log("Already Cleared!");
    } else {
    //  console.log("Text Field Cleared");
      setText("");
    }
  };

  const styleLight = {
    backgroundColor: "red",
    // color : "voilet"
  };
  const styleDark = {
    backgroundColor: "green",
    // color : "voilet"
  };
  function handleLPClick() {
    if (text.length !== 0) {
      //  setLastUndo(text)
    //  console.log("Converting to lower case");
      let UCtext = text.toLowerCase();
      setLastUndo([...lastUndo,text])
      setText(UCtext);
    } else {
    //  console.log("Some text required to perform this operation.");
    }
    setisUpper(false);
  }
  function handleUndoClick(){
    if(text.length!==0){
        if(lastUndo.length>0){
            const txt=lastUndo.pop();
       // setLastRedo([...lastRedo,txt])
       setText(txt)}
    }
  }
  const children = [
    <ToggleButton value="left" key="left" sx={{borderColor:props.theme === "light" ?'black' :"white" }}>
      <FormatAlignLeftIcon sx={{color:props.theme === "light" ?'black' :"white" }}/>
    </ToggleButton>,
    <ToggleButton value="center" key="center" sx={{borderColor:props.theme === "light" ?'black' :"white" }}>
      <FormatAlignCenterIcon sx={{color:props.theme === "light" ?'black' :"white" }}/>
    </ToggleButton>,
    <ToggleButton value="right" key="right" sx={{borderColor:props.theme === "light" ?'black' :"white" }}>
      <FormatAlignRightIcon sx={{color:props.theme === "light" ?'black' :"white" }}/>
    </ToggleButton>,
    <ToggleButton value="justify" key="justify" sx={{borderColor:props.theme === "light" ?'black' :"white" }}>
      <FormatAlignJustifyIcon sx={{color:props.theme === "light" ?'black' :"white" }}/>
    </ToggleButton>,
  ];
//   function handleRedoClick(){
//     console.log(lastRedo)
//     if(text.length!==0){
//         if(lastRedo.length>0){
//             const txt=lastRedo.pop();
//          setLastUndo([...lastUndo,txt])   
//        setText(txt)}
//     }else{
//         console.log(lastRedo)
//     }
//   }
const control = {
  value: alignment,
  onChange: handleAlignment,
  exclusive: true,
};
  return (
    <>
      <div className="container my-4">
        <h2>Text Utility</h2>
        <div className="row">
          <div className="form-group col-md-6">
            <textarea
              className="form-control my-1 "
              rows="15"
              value={text}
              onChange={handleUpperCase}
              style={{
                backgroundColor: props.theme === "light" ? "white" : "#242428",
                color: props.theme === "light" ? "black" : "#bbb",
                border:
                  props.theme === "light"
                    ? "1px solid lightgrey"
                    : "1px solid #444",
              }}
            ></textarea>
            {isupper ? (
              <button className="btn btn-primary" onClick={handleLPClick}>
                Lowercase
              </button>
            ):(
                <button className="btn btn-primary" onClick={handleUPClick}>
              Uppercase
            </button>
            )}
            <button className="btn btn-primary" style={{marginLeft:'15px',marginRight:'10px',marginTop:'1px'}} onClick={handleUndoClick}>
              Undo
            </button>
            {/* <button className="btn btn-primary" style={{marginLeft:'15px',marginRight:'10px',marginTop:'1px'}} onClick={handleRedoClick}>
              Redo
            </button> */}
            <button className="btn btn-danger mx-1" onClick={handleClear}>
              Clear
            </button>
          </div>

          <div className="col-md-6 rounded" style={{paddingLeft:'10%'}}>
            <span className="border-bottom fs-3">Summary</span>
            <div className="processed m-2">
              <p>
                {text.split(" ").length} words and {text.length} Characters
              </p>
              <p>{0.008 * text.split(" ").length} Minutes read</p>
              <span className="border-bottom fs-4" style={{marginLeft:'40%'}}>Preview</span>
              <br></br>
              <span><ToggleButtonGroup size="small" {...control} aria-label="Small sizes" sx={{marginTop:'10px',marginBottom:'0',marginLeft:'0',paddingBottom:'0'}}>
        {children}
      </ToggleButtonGroup></span>
              <Paper elevation={24} sx={{background:props.theme === "light" ? "white" :'#404040',marginTop:'20px'}}>
                <Card sx={{background:props.theme === "light" ? "white" :'#404040'}}>
                  <CardContent sx={{background:props.theme === "light" ? "white" :'#404040'}}>
                  <p style=
                  {{textAlign:alignment,overflow:'auto',color:props.theme !== "light" ? "white" :'black',
                  maxWidth:'100%',wordWrap:'break-word',margin:'10px',padding:'10px'}}>{text}</p>
                  </CardContent>
                </Card>
                </Paper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

