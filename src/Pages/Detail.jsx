import Header from "../Components/Header"
import CategoriesCard from "../Components/CategoriesCard"
import Footer from "../Components/Footer"
import {data} from "../data/data"
import {Link} from "react-router-dom"
import {useParams} from "react-router-dom"
import { useState } from "react"

function Detail() {
  let [num,setNum] = useState(1)
  let handleIncreament = ()=>{
    setNum(num+1)
  }
  let handleDecreament = ()=>{
    setNum(num-1)
  }
    // convertToSlug Function
  function convertToSlug(text) {
    return  text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  }
 
  // Params Function
  const {slug} = useParams()
  const p = data.products.find((product)=>convertToSlug(product.title)===slug)
  // console.log(p)
  return (
    <div>
      <Header/>
      <CategoriesCard categories={data.categories}/>
      <div className="detailContent">
        <div className="row">
          <div className="col-md-6">
            <img src={p.image} alt="Error Loading..." />
          </div>
          <div className="col-md-6">
           <h2>{p.title}</h2>
           <p>{p.description}</p>
           <p><b>RS.{p.price}</b></p>
           <button  disabled={num<=1 ? true:false} onClick={handleDecreament} >-</button>
           <span id="orderValue" className="orderValue">{num}</span>
           <button  disabled={num>=20 ? true:false} onClick={handleIncreament}>+</button>
           <Link>Add to Cart</Link>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Detail
