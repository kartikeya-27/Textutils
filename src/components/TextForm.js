import React,{useState} from 'react';
import PropTypes from 'prop-types';
// import { useLazyTranslate } from 'react-google-translate';



const propTypes = {};

const defaultProps = {};


const TextForm = (props) => {
  const [text, setText]= useState("");
  // const [language] = useState('zh-CN');
  // const [translate, { data, loading }] = useLazyTranslate({
  //   language 
  // });
  // useEffect(() => {
  //   if (text) {
  //     translate(text, language);
  //   }
  // }, [translate, text])
  // const [text] = useState('test');
   const handleUpClick= ()=>{
    //  console.log("used");
     let newtext=text.toUpperCase();
     setText(newtext);
   }
   const handleLowClick= ()=>{
    
    let newtext=text.toLowerCase();
    setText(newtext);
  }
  const handleAltClick= ()=>{
 
    let chars = text.toLowerCase().split("");
    for (var i = 0; i < chars.length; i += 2) {
      chars[i] = chars[i].toUpperCase();
    }
    let newText= chars.join("");
    setText(newText);
  }
  const handleCopy= ()=>{
    
    let newtext= document.getElementById("textBox");
      newtext.select();
      navigator.clipboard.writeText(newtext.value);
  }
  const handleSpaces= ()=>{
    
    let newtext= text.split(/[ ]+/);//regex
    setText(newtext.join(" "));
  }
  // const handleLangClick= ()=>{
    
  // const  render=() =>{
  //     return (
  //       <div>{loading ? 'Loading...' : data}</div>
  //     )
  //   }
   
  // }
   const handleOnChange= (event)=>{
    console.log("used");
    setText(event.target.value);
  }
    
    return<> 
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}} >
        
      <h1>{props.heading}</h1>
<div className="mb-3">{/*review this line again 
style={{color: props.mode==='dark'?'white':'black'}} not working*/}
  
  {/*review this line again 
    style={{backgroundcolour: props.mode==='dark'? 'Grey': 'white', color:props.mode=== 'dark'?'white': 'black'}}/*/}
  <textarea className="form-control" id="textBox" rows="8" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}  onChange={handleOnChange} ></textarea>
</div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Caps</button>
  <button className="btn btn-primary mx-2" onClick={handleLowClick}>Lower Case</button>
  <button className="btn btn-primary mx-2" onClick={handleAltClick}>Aletrnate case</button>
  <button className="btn btn-primary mx-2 my-3" onClick={handleCopy}>Copy</button>
  <button className="btn btn-primary mx-2" onClick={handleSpaces}>Handle space</button>
  {/* <button className="btn btn-primary mx-2" onClick={handleLangClick}>change </button> */}
    </div>
     <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}} >
       <h1>Text summary</h1>
       <p>{ text.length>0?text.split(" ").length:0} words and {text.length} characters</p>
       <p>{0.008*text.length} minutes read</p>
       <h2>Preview</h2>
       <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
     </div>
    </>;
}

TextForm.prototype={
    heading: PropTypes.string
}
TextForm.propTypes = propTypes;
TextForm.defaultProps = defaultProps;
// #endregion

export default TextForm;

