import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
      
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode !== 'dark'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode is enabled","success");
      document.title="TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title="TextUtils is amazing Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install TextUtils Now";
      // }, 1500);
    }
   else {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode is enabled","success");
      document.title="TextUtils - Light Mode";
    }
  }

  const toggleMode1 = ()=>{
    if(mode !== 'green'){
      setMode('green');
      document.body.style.backgroundColor='#3e693e';
      document.body.style.color = "white";
      showAlert("Green Dark mode is enabled","success");
      document.title="TextUtils - Green Dark Mode";
    }
   else {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode is enabled","success");
      document.title="TextUtils - Light Mode";
    }
  }

  return(
    <>
    <Router>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} toggleMode1={toggleMode1} aboutText ="About Textutils"/>
      <Alert alert={alert}/>
      {/* <Navbar/> */}
      <div className="container my-3">
      <Routes>
      {/* exact works
      if you use exact then it goes to exect location otherwise it goes partial
      /users --> Component 1
      /users/home -->Component 2 */}
      {/* hello
       */}

          <Route exact path="/about"
          element={<About /> }/>

          <Route exact path="/"
          element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode} />} />
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
