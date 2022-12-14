import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../CSS/contact.css";

function Contact() {
  return (
    <div>
      <Header />
      <div className="storeLoc">
        <div className="offLocations">
          <div className="locHead">
            <h2>Store Locations</h2>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="loc-col-inner">
                <div className="officeNumber">
                  <h6>
                    <i className="bi bi-telephone-fill"></i>Head Office
                  </h6>
                  <p>0213-5877976</p>
                </div>
                <div className="officeLocation">
                  <h6>
                    <i className="bi bi-geo-alt-fill"></i>Location
                  </h6>
                  <p>
                    Ocean Tower, 20th Floor, G-3, Block -9, Scheme 5, Main
                    Clifton Road, Karachi, Pakistan
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="loc-col-inner">
                <div className="officeNumber">
                  <h6>
                    <i className="bi bi-telephone-fill"></i>Regional Office Lahore
                  </h6>
                  <p>0042-35884570</p>
                </div>
                <div className="officeLocation">
                  <h6>
                    <i className="bi bi-geo-alt-fill"></i>Location
                  </h6>
                  <p>
                    27-A Ali Block New Garden Town Opposite Barkat Market Lahore
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="loc-col-inner">
                <div className="officeNumber">
                  <h6>
                    <i className="bi bi-telephone-fill"></i>Regional Office
                    Islamabad
                  </h6>
                  <p>0512726877</p>
                </div>
                <div className="officeLocation">
                  <h6>
                    <i className="bi bi-geo-alt-fill"></i>Location
                  </h6>
                  <p>
                    Ocean Tower, 20th Floor, G-3, Block -9, Scheme 5, Main
                    Clifton Road, Karachi, Pakistan
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="loc-col-inner">
                <div className="officeNumber">
                  <h6>
                    <i className="bi bi-telephone-fill"></i>Helpline
                  </h6>
                  <p>UAN: 111 532 532</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="loc-col-inner">
                <div className="officeNumber">
                  <h6>
                    <i className="bi bi-envelope-fill"></i>Complaints Email
                  </h6>
                  <p>UAN: 111 532 532</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mapGEO">
          <h2>Search Stores</h2>
          <div className="searchLocation">
            <div className="row">
              <div className="col-md-6 col-sm-6  mb-4">
                <select id="">
                  <option value="Pakistan" defaultValue="Pakistan">Pakistan</option>
                </select>
              </div>
              <div className="col-md-6 col-sm-6 mb-4">
                <select id="">
                  <option id="">Select City</option>

                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="googlemap">

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
