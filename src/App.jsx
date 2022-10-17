import Header from "./Components/Header"
import Main from "./Components/Main"
import Footer from "./Components/Footer"
import { useState } from "react"

function App() {
  let [person,setPerson] = useState({
    name:"obaid",
    age:21,
    salary:"50000"
  })
  return(
    <>
    <div>
      <Header person={person}/>
      {/* <Main/>
      <Footer/> */}
    </div>
    </>
  )
  }
export default App;