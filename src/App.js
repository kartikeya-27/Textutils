// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import About from './components/About';
// import styled from "styled-component";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode,setMode]= useState('light');
  const [alert,setAlert]=useState(null);
   const showAlert=(message,type)=>{
    //  you can show alert for various modes
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
  }, 3000);
    }
  const togglemode=()=>{
    if(mode==='light')
    {
      setMode('dark');
    //  document.getElementById("body").innerHTML(style:"");
       document.body.style.backgroundColor='black';
      //  console.log(document.body.style.backgroundColor);
      showAlert("dark mode has been enabled","success");
    }else {
      setMode('light');
      document.body.style.backgroundColor='white';
      // console.log(document.body.style.backgroundColor);
      showAlert("light mode has been enabled","success");
    }
    
  }
  

  
  return (
    <> 
    {/* <Router> */}
 <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
 <Alert alert={alert}/> 
 <div className='container my-3'>
   {/* updated  switchto routes */}
 {/* <Routes> */}
          {/* <Route exact path="/about" element={<About />}/>  
          <Route exact path="/" element={<TextForm heading="Enter the text" mode={mode} togglemode={togglemode}/>}/>       */}
  {/* </Routes> */}
  <TextForm heading="Enter the text" mode={mode} togglemode={togglemode}/>
 {/* <About/> */}
 </div>
 {/* </Router> */}
    </>
  );
}


export default App;
