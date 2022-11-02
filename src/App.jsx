import { Route, Routes} from "react-router-dom"
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Policy from "./Pages/Policy";
import Detail from "./Pages/Detail";
import Career from "./Pages/Career";
import TermsConditions from "./Pages/TermsConditions";
import MithaoBhook from "./Pages/MithaoBhook";
import Category from "./Pages/Category";
import Countries from "./Pages/Countries";

function App() {

  return(

    <div className="container">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/policy" element={<Policy/>}/>
        <Route path="/mitao-bhook" element={<MithaoBhook/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/careers" element={<Career/>}/>
        <Route path="/terms-condition" element={<TermsConditions/>}/>
        <Route path="/product/:slug" element={<Detail/>}/>
        <Route path="/category/:slug" element={<Category/>}/>
        <Route path="/countries" element={<Countries/>}/>
      </Routes>

    </div>

  )
  }
export default App;