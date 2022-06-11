import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components3/About";
import Navbar from "./components3/Navbar";
import Home from "./components3/Home";
import Notestate from "./context/notes/NoteState";
import Alert from "./components3/Alert";
import Login from "./components3/Login";
import Signup from "./components3/Signup";
import { useState } from "react";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Notestate>
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home showAlert={showAlert} />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login showAlert={showAlert} />} />
              <Route
                path="/signup"
                element={<Signup showAlert={showAlert} />}
              />
            </Routes>
          </div>
        </Router>
      </Notestate>
    </>
  );
}

export default App;
