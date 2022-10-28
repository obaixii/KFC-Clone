import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "../CSS/login.css"
function Login() {
  return (
    <div>
      <Header />
      <div className="loginContent">
        <div className="container">
        <div className="row row-inner">
          <div className="col-md-6 col-img">
            <div className="col-inner login-gif">
            <img src="../images/Main-images/login.gif" alt="" />
            </div>
          </div>
          <div className="col-md-6">
                <div className="col-inner">
                  <form action="" autocomplete="off">
                    <div className="userWelcome">
                      <h4>Welcome!</h4>
                    </div>
                    <div className="userName inputBox">
                    <input type="text" name="name" className="inputLogin" id="" required="required"/>
                    <span>Username</span>
                    </div>
                    <div className="userNumber inputBox">
                    <input type="password" name="phoneNumber" className="inputLogin" id="" required="required"/>
                    <span>Password</span>
                    </div>
                    <div className="userLogin">
                      <button className="userBtn" type="submit">Login</button>
                    </div>
                    <div className="altLogin">
                      <div className="altText">
                        <p className="altText-inner"><span className="bg-dim">or login with</span></p>
                      </div>
                      <div className="altGoogle">
                      <Link><i className="bi bi-google"></i></Link>
                      </div>
                    </div>
                  </form>
                </div>
          </div>
        </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Login;
