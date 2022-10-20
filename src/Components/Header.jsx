import { Link } from "react-router-dom";
import logo from "../KFC-Logo-Red.png"
function Header() {
  return (
      <div >
        <nav className="navbar navbar-expand-lg mb-2">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="" />
              </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="btn btn-order" aria-current="page" href="#">Start an order for delivery</a>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#"><i class="bi bi-pin-map-fill"></i> <span className="txt-white">Select Location</span> <i class="bi bi-chevron-down txt-white"></i></a>
                </li>
                <li className="nav-item">
                  <a className="btn btn-card-counter" aria-current="page" href="#">0</a>
                </li>
                <li className="nav-item">
                <Link className="btn btn-danger ms-2" to="/login">Register / Sign in</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
  );
}
export default Header;
