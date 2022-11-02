import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { useState, useEffect  } from "react"
// import { Link } from "react-router-dom"

function Countries() {
    const [countries, SetCountries] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(() => {
            setLoading(true)
            fetch("https://restcountries.com/v2/all")
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                SetCountries(data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <Header />
            <div>
                <div className="row">
                    {
                        loading ? <div style={{width:"100%",textAlign:"center"}}><img src="../images/Main-Images/loader.gif" alt="" style={{maxWidth:"100%",margin:"0 auto"}}/></div>  : countries.map((country, index) => {
                            return (
                                <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12 md-4 mt-4" key={index}>
                                <div className="card h-100" style={{width: "100%", height:"100%" }}>
                                <div className="card-img-main">
                                <img src={country.flag} className="card-img-top" alt="..." />
                                </div>
                                <div className="card-body">
                                  <h5 className="card-title">{country.name}</h5>
                                  <p className="card-text">{country.population}</p>
                                  <p  className="btn"><strong>{country.region}</strong></p>
                                  <div className="d-flex justify-content-between">
                                  <button disabled="true" className="btn btn-primary" style={{width: "100%", height:"100%" }}  to="" >No Details Available</button>
                                  </div>
                                </div>
                              </div>
                              </div>
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Countries
