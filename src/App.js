import Detail from "./components/Detail";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router";
import Logo from "./assets/Logo.svg";
import Search from "./assets/search.svg";
import WishList from "./assets/wishlist.svg";
import Account from "./assets/account.svg";
import Cart from "./assets/cart.svg";
import Facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";
import twitter from "./assets/twitter.svg";
import Linkedin from "./assets/linkedin.svg";
import PlayStore from "./assets/playstore.svg";
import App_Store from "./assets/phone.svg";
import Down_arrow from "./assets/arrow-down.svg";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <div className="wrapper">
            <nav>
              <div className="left">
                <h1>
                  <a href="/">
                    <img src={Logo} alt="" />
                  </a>
                </h1>
              </div>
              <div className="middle">
                <ul>
                  <li>
                    <a href="/">Shop</a>
                  </li>
                  <li>
                    <a href="/">Men</a>
                  </li>
                  <li>
                    <a href="/">Women</a>
                  </li>
                  <li>
                    <a href="/">Combos</a>
                  </li>
                  <li>
                    <a href="/">Joggers</a>
                  </li>
                </ul>
              </div>
              <div className="right">
                <div className="input">
                  <img src={Search} alt="" />
                  <input type="text" placeholder="search" />
                </div>
                <div className="logos">
                  <div className="logo">
                    <img src={WishList} alt="" />
                  </div>
                  <div className="logo">
                    <img src={Account} alt="" />
                  </div>
                  <div className="logo">
                    <img src={Cart} alt="" />
                  </div>
                </div>
              </div>
            </nav>
          </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Detail" element={<Detail />} />
      </Routes>
      <div className="footer">
        <div className="wrapper">
          <div className="top">
            <ul>
              <li className="Li_Head">Need Help</li>
              <li>Contact Us</li>
              <li>Track Order</li>
              <li>Returns & Refunds</li>
              <li>FAQ's</li>
              <li>Career</li>
            </ul>

            <ul>
              <li className="Li_Head">Company</li>
              <li>About Us</li>
              <li>euphoria Blog</li>
              <li>euphoriastan</li>
              <li>Collaboration</li>
              <li>Media</li>
            </ul>

            <ul>
              <li className="Li_Head">More Info</li>
              <li>Term and Conditions</li>
              <li>Privacy Policy</li>
              <li>Shipping Policy</li>
              <li>Sitemap</li>
            </ul>

            <ul>
              <li className="Li_Head">Location</li>
              <li>support@euphoria.in</li>
              <li>Eklingpura Chouraha, Ahmedabad Main Road</li>
              <li>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</li>
            </ul>
          </div>
          <div className="download">
            <h1>Download The App</h1>
          </div>
          <div className="logo">
            <div className="left">
              <div className="logos">
                <div className="logo">
                  <img src={Facebook} alt="" />
                </div>
                <div className="logo">
                  <img src={instagram} alt="" />
                </div>
                <div className="logo">
                  <img src={twitter} alt="" />
                </div>
                <div className="logo">
                  <img src={Linkedin} alt="" />
                </div>
              </div>
            </div>
            <div className="right">
              <div className="logo">
                <img src={PlayStore} alt="" />
                <h4>
                  <span>
                    android app on<br></br>
                  </span>
                  Google Play{" "}
                </h4>
              </div>
              <div className="logo">
                <img src={App_Store} alt="" />
                <h4>
                  <span>
                    Available on the <br></br>{" "}
                  </span>
                  App Store{" "}
                </h4>
              </div>
            </div>
          </div>
          <hr color="#BEBCBD"></hr>
          <div className="Category">
            <div className="left">
              <h1>Popular Categories</h1>
            </div>
            <div className="right">
              <img src={Down_arrow} alt="" />
            </div>
          </div>
          <hr color="#BEBCBD"></hr>
          <h3>Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</h3>
        </div>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
