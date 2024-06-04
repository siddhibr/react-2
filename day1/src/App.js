import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Mens from "./Components/Mens";
import Profile from "./Components/Profile";
import UseState from "./25-5/Usestate";
import UseEffect2 from "./26-6/UseEffect2";
import UseState2 from "./26-6/UseState2";
import UseEffect1 from "./26-6/UseEffect1";
import UseState3 from "./25-5/Usestate3";
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
        <Route path="/use-state2" element={<UseState2 />} />
        <Route path="/use-effect1" element={<UseEffect1 />} />
        <Route path="/use-effect2" element={<UseEffect2 />} />
        <Route path="/use-state3" element={<UseState3  />} />
      </Routes>
    </div>
  );
}

export default App;