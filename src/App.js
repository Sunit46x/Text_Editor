import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/textform';


let name="sunit";
function App() {
  return (
    <>
     <Navbar  title="textutils"/>
    <div className="container my-3">
    <Textform heading ="Enter the text to anlayse"/>
</div>
    </>
  );
}

export default App;
