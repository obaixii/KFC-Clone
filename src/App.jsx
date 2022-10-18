import Header from "./Components/Header"
import Main from "./Components/Main"
import Footer from "./Components/Footer"
import{products} from "./data/products"

function App() {
  // let [person,setPerson] = [{
  //   name:"obaid",
  //   age:21,
  //   rank:"dev"
  // }]
  return(
    <>
    <div>
      <Header/>
      <Main products={products}/>
      <Footer/>
    </div>
    </>
  )
  }
export default App;