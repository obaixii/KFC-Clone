import { Link } from "react-router-dom";
function Header() {
  return (
      <div className="header">
        <nav className="navbar navbar-expand-lg mb-2 my-nav">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src="../images/Main-Images/KFC-Logo-Red.png" alt="" />
              </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <button className="btn btn-order" aria-current="page" to="#">Start an order for delivery</button>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="#" element=""><i className="bi bi-pin-map-fill"></i> <span className="txt-white">Select Location</span> <i className="bi bi-chevron-down txt-white"></i></Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-card-counter" aria-current="page" to="/countries">Countries</Link>
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
