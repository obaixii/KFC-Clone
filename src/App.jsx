import Header from "./Components/Header"
import Main from "./Components/Main"
import Footer from "./Components/Footer"
import { useState } from "react"

function App() {
  // let a = 90
  let [num,setNum] = useState(90)

  let handleIncrement = ()=>{
    if(num>=100) return
    setNum(num+1)


   /* a++
    // document.getElementById("a").innerHTML = a
    console.log(a) */
  }
  let handleDecrement = ()=>{
    if(num<=80) return
    setNum(num-1)


   /* a++
    // document.getElementById("a").innerHTML = a
    console.log(a) */
  }
  return (
    <>
    {/* <Header/>
    <Main/>
    <Footer/> */}
    <h5>without curly brackets, content will be rendered as Plain text</h5>
    <p>25+25</p>

    <h5>With curly brackets, content will be rendered as JS Expression that can be a function, variable or expression</h5>
    <p>{25+25}</p>
    <p>{25-25}</p>
    <p>{25*25}</p>
    <p>{25/25} written </p>
    <h3>123123123</h3>
    <h5>Same case here, a is a variable defined in Js, but when written without &#123; &#125;, it rendered as a Plain Text, but when written with &#123; &#125;, it showed defined value</h5>
    <p>a</p>
    <p>{num}</p>
    <button disabled={num>=100 ? true : false} onClick={handleIncrement}>+</button>
    <button disabled={num<=80 ? true : false} onClick={handleDecrement}>-</button>
    </>
  );
} 

export default App;
