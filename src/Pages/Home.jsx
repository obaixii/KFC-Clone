import Header from "../Components/Header"
import Main from "../Components/Main"
import Footer from "../Components/Footer"
import CategoriesCard from "../Components/CategoriesCard"
import {data} from "../data/data"
import Slider from "../Components/Slider"

function Home() {
  return (
    <div>
      <Header/>
      <Slider/>
      <CategoriesCard categories={data.categories}/>
      <Main products={data.products}/>
      <Footer/>
    </div>
  )
}

export default Home
