import { Route,Router, Routes} from "react-router-dom"
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {

  return(

    <div className="container">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

    </div>

  )
  }
export default App;