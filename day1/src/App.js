import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Mens from "./Components/Mens";
import Profile from "./Components/Profile";
import UseState from "./25-5/Usestate";

import UseState3 from "./25-5/Usestate3";
import UseEffect3 from "./29-05/UseEffect3";
// ctrl + space -> automatic imports

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/use-state" element={<UseState />} />
        <Route path="/use-state3" element={<UseState3  />} />
        <Route path="/use-effect3" element={<UseEffect3  />} />
      </Routes>
    </div>
  );
}

export default App;