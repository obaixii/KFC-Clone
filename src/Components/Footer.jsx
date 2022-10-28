import { Link } from "react-router-dom";
import "../CSS/footer.css";
function Footer() {
  return (
    <div className="footerContent">
      <div className="row footerInner">
        <div className="col-md-12 footerMain">
            <div className="footerLogo">
              <img src="../images/Main-Images/KFC-Logo-Red.png" alt="" />
            </div>
            <div className="footerSocial">
                <div className="youtubeLink">
              <Link><i className="bi bi-youtube"></i></Link>
                </div>
                <div className="instagramLink">
                <Link><i className="bi bi-instagram"></i></Link>
                </div>
                <div className="facobookLink">
                <Link><i className="bi bi-facebook"></i></Link>
                </div>
            </div>
        </div>
        <div className="footerLinks">
          <div className="row">
            <div className="col-sm-6 col-md-3 mb-4">
              <div className="col-inner information">
                  <div className="inner-content">
                  <h4>Information</h4>
                <Link className="d-block mb-2" to="/about">About Us</Link>
                <Link className="d-block mb-2" to="/MithaoBhook">Mithao Bhook</Link>
                <Link className="d-block mb-2" to="/policy">Privacy Policy</Link>
                <Link className="d-block mb-2" to="/career">Career</Link>
                  </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 mb-4">
                <div className="col-inner">
                <h4>Locations</h4>
                <Link className="d-block mb-2" to="/contact">Contact Us</Link>
                </div>
            </div>
            <div className="col-sm-6 col-md-3 mb-4">
                <div className="col-inner">
                <h4>Get In Touch</h4>
                <Link className="d-block mb-2" to="/termscondition">Terms and Conditions</Link>
                </div>
            </div>
            <div className="col-sm-12 col-md-3 mb-4">
              <div className="col-inner store-links">
              <img className="d-block mb-2" src="../images/Main-Images/app-store.png" alt="" />
              <img className="d-block mb-2" src="../images/Main-Images/google-store.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
