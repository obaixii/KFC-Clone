import { Route, Routes} from "react-router-dom"
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Policy from "./Pages/Policy";
import Detail from "./Pages/Detail";
import Category from "./Pages/Category";

function App() {

  return(

    <div className="container">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/policy" element={<Policy/>}/>
        <Route path="/product/:slug" element={<Detail/>}/>
        <Route path="/category/:slug" element={<Category/>}/>
      </Routes>

    </div>

  )
  }
export default App;