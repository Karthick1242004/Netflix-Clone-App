import Navbar from "./components/Navbar";
import { Route,Routes } from "react-router-dom";
import Home from './pages/Home'
import Main from "./components/Main";
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Video from "./pages/Video";

function App() {
  return (
    <div>
     
      <Routes>
        <Route exact path="/" element={<Homepage/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Video" element={<Video/>}></Route>
      </Routes>
    </div>
  );
}

export default App;