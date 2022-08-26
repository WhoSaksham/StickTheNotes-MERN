import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import Landing from './components/Landing';
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3456);
  }

  return (
    <>
      <NoteState showAlert={showAlert} >
        <Router>
          <Navbar showAlert={showAlert} />
          <Alert alert={alert} />
          <Routes>
            <Route exact path='/' element={<Home showAlert={showAlert} />} />
            <Route exact path='/home' element={<Landing />} />
            <Route exact path='/login' element={<Login showAlert={showAlert} />} />
            <Route exact path='/signup' element={<Signup showAlert={showAlert} />} />
            <Route exact path='/about' element={<About />} />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
