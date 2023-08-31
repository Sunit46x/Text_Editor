import React, { useState } from 'react'; // "useState" should be lowercase

export default function Textform(props) {
  const handleclick = () => {
    console.log("uppercase was clicked!!" + text);
    let newText = text.toUpperCase(); // Use "toUpperCase()" instead of "toUppercase()"
    setText(newText);
  };
  const handleLclick = () => {
    console.log("uppercase was clicked!!" + text);
    let newText = text.toLowerCase(); // Use "toUpperCase()" instead of "toUppercase()"
    setText(newText);
  };
  const handleTclick = () => {
    console.log("uppercase was clicked!!" + text);
    let newText =" "; // Use "toUpperCase()" instead of "toUppercase()"
    setText(newText);
  };


  const handleonchange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const [text, setText] = useState('enter the text!'); // "useState" should be lowercase

  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-1"> {/* Use "className" instead of "class" */}
        <label htmlFor="mybox" className="form-label"></label> {/* Use "htmlFor" instead of "for" */}
        <textarea className="form-control" value={text} onChange={handleonchange} id="mybox" rows="6"></textarea> {/* Use "onChange" instead of "onchange" */}
        <button className="btn btn-primary mt-3" onClick={handleclick} >Convert To Uppercase </button> {/* Use "onClick" instead of "onclick" and "btn-primary" instead of "btn-parimary" */}
        <button className="btn btn-primary mt-3 ML-3" onClick={handleLclick} >Convert To lowercase </button> {/* Use "onClick" instead of "onclick" and "btn-primary" instead of "btn-parimary" */}
        <button className="btn btn-primary mt-3 ML-3" onClick={handleTclick} >Clear Text </button> {/* Use "onClick" instead of "onclick" and "btn-primary" instead of "btn-parimary" */}
      </div>
      </div>
      <div className='container mt-3'>
        <h1>Your Text Summery</h1>
        <p>{text.split(" ").length} words and {text.length} charcters</p>
        <p>{text.split(" ").length * 0.008} Minutes Read</p>
        <h1>Preview</h1>
        <p> {text}</p>
      </div>
    </>
  );
}
