import React from "react";
import { NavLink } from "react-router";
import "../App.css";
import WishList from "../assets/wishlist.svg";

import LeftArrow from "../assets/left-arrow-bold.svg";
import RightArrow from "../assets/right-arrow-bold.svg";
import LightLeftArrow from "../assets/arrow-left.svg";
import LightRightArrow from "../assets/arrow-right.svg";
import Jogger from "../assets/img-1.jpg";
import sleeve from "../assets/img-3.jpg";
import T_shirt from "../assets/img-4.jpg";
import Urben_Shirt from "../assets/img-2.jpg";
import Img5 from "../assets/img-5.jpg";
import Img6 from "../assets/img-6.jpg";
import Img7 from "../assets/img-7.jpg";
import Img8 from "../assets/img-8.jpg";
import Img9 from "../assets/img-9.jpg";
import Img10 from "../assets/img-10.jpg";
import Img11 from "../assets/img-11.jpg";
import Img12 from "../assets/img-12.jpg";
import Img13 from "../assets/img-13.jpg";
import Img14 from "../assets/img-14.jpg";
import Img15 from "../assets/img-15.jpg";
import Img16 from "../assets/img-16.jpg";
import Img17 from "../assets/img-17.jpg";
import Img18 from "../assets/img-18.jpg";
import Img19 from "../assets/img-19.jpg";
import GreyArrow from "../assets/grey.svg";
import Nike from "../assets/nike.jpg";
import Puma from "../assets/puma.jpg";
import H$M from "../assets/H&M.jpg";
import Levis from "../assets/levis.jpg";
import Uspa from "../assets/USPA.jpg";
import Testimonial1 from "../assets/span-1.svg";
import Testimonial2 from "../assets/span-2.svg";
import Testimonial3 from "../assets/span-3.svg";
import star from "../assets/star.svg";
import halfStar from "../assets/half.png";
import EmptyStar from "../assets/empty.png";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/Detail");
  };
  const ALLITEM = [
    {
      id: 1,
      type: "Arraivals",
      pic: Jogger,
      title: "Knitted Joggers",
      price: "$54.00",
      rating: "4",
      tot_comments: "12",
      product_description:
        "100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
      QA_answer: "4",
      colors_availabe: ["red", "blue", "green", "pink"],
      availabe_size: ["XS", "S", "M", "L", "XL"],
      sub_images: [Jogger, Img18, Img11],
    },
    {
      id: 2,
      type: "Arraivals",
      pic: sleeve,
      title: "Full Sleeve",
      price: "$54.00",
      rating: "4",
      tot_comments: "12",
      product_description:
        "100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
      QA_answer: "4",
      colors_availabe: ["red", "green", "yellow", "pink"],
      availabe_size: ["XS", "S", "M", "L", "XL"],
      sub_images: [sleeve, Img13, Img14],
    },
    {
      id: 3,
      type: "Arraivals",
      pic: T_shirt,
      title: "Active T-Shirts",
      price: "$54.00",
      rating: "4",
      tot_comments: "12",
      product_description:
        "100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
      QA_answer: "4",
      colors_availabe: ["orange", "grey", "red", "pink"],
      availabe_size: ["XS", "S", "M", "L", "XL"],
      sub_images: [Img14, T_shirt, Img19],
    },
    {
      id: 4,
      type: "Arraivals",
      pic: Urben_Shirt,
      title: "Urban Shirts",
      price: "$54.00",
      rating: "4",
      tot_comments: "12",
      product_description:
        "100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
      QA_answer: "4",
      colors_availabe: ["violet", "green", "orange", "yellow"],
      availabe_size: ["XS", "S", "M", "L", "XL"],
      sub_images: [Img12, Img17, Urben_Shirt],
    },
    {
      id: 5,
      type: "Categories For Men",
      pic: Img5,
      title: "Shirts",
      price: "$64.00",
      rating: "4",
      tot_comments: "02",
      product_description:
        "100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
      QA_answer: "9",
      colors_availabe: ["reg", "green", "violet", "yellow"],
      availabe_size: ["XS", "S", "M", "L", "XL"],
      sub_images: [Img10, Img5, Urben_Shirt],
    },
    {
      id: 6,
      type: "Categories For Men",
      pic: Img6,
      title: "Printed T-Shirts",
      price: "$59.00",
      rating: "4",
      tot_comments: "19",
      product_description:
        "100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
      QA_answer: "4",
      colors_availabe: ["violet", "green", "pink", "yellow"],
      availabe_size: ["XS", "S", "M", "L", "XL"],
      sub_images: [Img18, Img6, Jogger],
    },
    {
      id: 7,
      type: "Categories For Men",
      pic: Img7,
      title: "Plain T-Shirt",
      price: "$34.00",
      rating: "3",
      tot_comments: "82",
      product_description:
        "100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
      QA_answer: "40",
      colors_availabe: ["violet", "green", "pink", "red"],
      availabe_size: ["XS", "S", "M", "L", "XL"],
      sub_images: [Img10, Img7, Jogger],
    },
    {
      id: 8,
      type: "Categories For Men",
      pic: Img8,
      title: "Polo T-Shirt",
      price: "$44.00",
      rating: "4",
      tot_comments: "12",
      product_description:
        "100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
      QA_answer: "4",
      colors_availabe: ["violet", "green", "orange", "red"],
      availabe_size: ["XS", "S", "M", "L", "XL"],
      sub_images: [Img10, Img8, Urben_Shirt],
    },
    {
      id: 9,
      type: "Categories For Men",
      pic: Img9,
      title: "Hoodies & Sweetshirt",
      price: "$4.00",
      rating: "5",
      tot_comments: "10",
      product_description:
        "100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
      QA_answer: "4",
      colors_availabe: ["blue", "green", "orange", "yellow"],
      availabe_size: ["XS", "S", "M", "L", "XL"],
      sub_images: [Img12, Img9, Jogger],
    },
    {
      id: 10,
      type: "Categories For Men",
      pic: Img10,
      title: "Jeans",
      price: "$59.00",
      rating: "3",
      tot_comments: "12",
      product_description:
        "100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
      QA_answer: "4",
      colors_availabe: ["violet", "pink", "red", "yellow"],
      availabe_size: ["XS", "S", "M", "L", "XL"],
      sub_images: [Img5, Img10, Img11],
    },
    {
      id: 11,
      type: "Categories For Men",
      pic: Jogger,
      title: "Activewear",
      price: "$50.00",
      rating: "4",
      tot_comments: "142",
      product_description:
        "100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
      QA_answer: "90",
      colors_availabe: ["violet", "green", "orange", "yellow"],
      availabe_size: ["XS", "S", "M", "L", "XL"],
      sub_images: [Img12, Jogger, Urben_Shirt],
    },
    {
      id: 12,
      type: "Categories For Men",
      pic: Img11,
      title: "Boxers",
      price: "$44.00",
      rating: "5",
      tot_comments: "12",
      product_description:
        "100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
      QA_answer: "4",
      colors_availabe: ["violet", "green", "orange", "yellow"],
      availabe_size: ["XS", "S", "M", "L", "XL"],
      sub_images: [Img12, Img11, sleeve],
    },
    {
      id: 13,
      type: "Categories For Women",
      pic: Img12,
      title: "Sweetshirt",
      price: "$94.00",
      rating: "4",
      tot_comments: "12",
      product_description:
        "100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
      QA_answer: "0",
      colors_availabe: ["violet", "red", "orange", "yellow"],
      availabe_size: ["XS", "S", "M", "L", "XL"],
      sub_images: [Img10, Img12, Urben_Shirt],
    },
    {
      id: 14,
      type: "Categories For Women",
      pic: Img13,
      title: "Coats & Parkas",
      price: "$44.00",
      rating: "2",
      tot_comments: "92",
      product_description:
        "100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
      QA_answer: "10",
      colors_availabe: ["violet", "green", "violet", "yellow"],
      availabe_size: ["XS", "S", "M", "L", "XL"],
      sub_images: [Img12, Img13, Urben_Shirt],
    },
    {
      id: 15,
      type: "Categories For Women",
      pic: Img14,
      title: "Tees & T-Shirt",
      price: "$24.00",
      rating: "4",
      tot_comments: "62",
      product_description:
        "100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
      QA_answer: "17",
      colors_availabe: ["violet", "green", "pink", "black"],
      availabe_size: ["XS", "S", "L", "XL"],
      sub_images: [Img19, Img14, sleeve],
    },
    {
      id: 16,
      type: "Categories For Women",
      pic: Img15,
      title: "Boxers",
      price: "$48.00",
      rating: "5",
      tot_comments: "62",
      product_description:
        "100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
      QA_answer: "19",
      colors_availabe: ["violet", "red", "blue", "pink"],
      availabe_size: ["XS", "S", "M", "L", "XL"],
      sub_images: [Img10, Img15, Jogger],
    },
    {
      id: 17,
      type: "In The Limelight",
      pic: Img16,
      title: "Black Sweatshirt with ....",
      price: "$188.00",
      rating: "5",
      tot_comments: "02",
      product_description:
        "100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
      QA_answer: "19",
      colors_availabe: ["violet", "red", "yellow", "pink"],
      availabe_size: ["XS", "S", "M", "L", "XL"],
      sub_images: [Img6, Img16, sleeve],
      brand: "Jhanvi’s Brand",
    },
    ,
    {
      id: 18,
      type: "In The Limelight",
      pic: Img17,
      title: "line Pattern Black H...",
      price: "$88.00",
      rating: "4",
      tot_comments: "69",
      product_description:
        "100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
      QA_answer: "19",
      colors_availabe: ["red", "green", "blue", "pink"],
      availabe_size: ["XS", "S", "M", "L", "XL"],
      sub_images: [Img9, Img18, sleeve],
      brand: "AS’s Brand",
    },
    ,
    {
      id: 19,
      type: "In The Limelight",
      pic: Img18,
      title: "Black Shorts",
      price: "$98.00",
      rating: "5",
      tot_comments: "66",
      product_description:
        "100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
      QA_answer: "10",
      colors_availabe: ["violet", "red", "black", "pink"],
      availabe_size: ["XS", "S", "M", "L", "XL"],
      sub_images: [Img5, Img18, Jogger],
      brand: "MM’s  Brand",
    },
    ,
    {
      id: 20,
      type: "In The Limelight",
      pic: Img19,
      title: "Levender Hoodie with ....",
      price: "$118.00",
      rating: "3",
      tot_comments: "52",
      product_description:
        "100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
      QA_answer: "79",
      colors_availabe: ["yellow", "red", "blue", "pink"],
      availabe_size: ["XS", "S", "M", "L", "XL"],
      sub_images: [Img16, Img19, Img14],
      brand: "Nike’s  Brand",
    },
  ];
  const ClickEventHandler = (id) => {
    localStorage.setItem("ID", id);
  };

  return (
    <div>
      <div className="grey"></div>
      <div className="Hero">
        <div className="wrapper">
          <div className="left">
            <div className="arrow">
              <img src={LeftArrow} alt="" />
            </div>
            <div className="content">
              <h5>T-shirt / Tops</h5>
              <h1>
                Summer <br />
                Value Pack
              </h1>
              <h4>cool / colorful / comfy</h4>
              <a href="/">Shop Now</a>
            </div>
          </div>
          <div className="right">
            <img src={RightArrow} alt="" />
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="cards">
          <div className="container">
            <div className="Content">
              <h4>Low price</h4>
              <h2>Hight Coziness</h2>
              <h5>UPTO 50% OFF</h5>
              <a href="/">Explore Items</a>
            </div>
          </div>
          <div className="container bgTwo">
            <div className="Content">
              <h4>Beyoung Presents</h4>
              <h2>
                Breezy Summer <br />
                Style
              </h2>
              <h5>UPTO 50% OFF</h5>
              <a href="/">Explore Items</a>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="NewArrival">
          <h3>
            <main></main>
            New Arrival
          </h3>
          <div className="contents">
            <div className="arrow">
              <img src={LightLeftArrow} alt="" />
            </div>
            <div className="middle">
              {ALLITEM.map((i) => {
                if (i.type === "Arraivals") {
                  return (
                    <div
                      className="card"
                      key={i.id}
                      onClick={(id) => {
                        ClickEventHandler(i.id);
                      }}
                    >
                      <img src={i.pic} alt=""  onClick={() => handleNavigation()}/>
                      <h6>{i.title}</h6>
                    </div>
                  );
                }
              })}
            </div>
            <div className="hai">
              <img src={LightRightArrow} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="advertise">
          <div className="leftAdv">
            <h1>WE MADE YOUR EVERYDAY FASHION BETTER!</h1>
            <h4>
              In our journey to improve everyday fashion,<br></br> euphoria
              presents EVERYDAY wear range -<br></br> Comfortable & Affordable
              fashion 24/7
            </h4>
            <a href="/">Shop Now</a>
          </div>
          <div className="rightAdv"></div>
        </div>
      </div>
      <div className="wrapper">
        <div className="Men">
          <h3>
            <main></main>
            Categories For Men
          </h3>
          <div className="contents">
            {ALLITEM.map((item) => {
              if (item.type === "Categories For Men") {
                return (
                  <div
                    className="dressCard"
                    key={item.id}
                    onClick={(id) => {
                      ClickEventHandler(item.id);
                    }}
                  >
                    <div className="top">
                      <img src={item.pic} alt="" onClick={() => handleNavigation()}/>
                    </div>
                    <div className="bottom">
                      <div className="left">
                        <h4>{item.title}</h4>
                        <h5>Explore Now!</h5>
                      </div>
                      <div className="right">
                        <img src={GreyArrow} alt="right" />
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="Women">
          <h3>
            <main></main>
            Categories For Women
          </h3>
          <div className="contents">
            {ALLITEM.map((item) => {
              if (item.type === "Categories For Women") {
                return (
                  <div
                    className="dressCard"
                    key={item.id}
                    onClick={(id) => {
                      ClickEventHandler(item.id);
                    }}
                  >
                    <div className="top">
                      <img src={item.pic} alt="" onClick={() => handleNavigation()}/>
                    </div>
                    <div className="bottom">
                      <div className="left">
                        <h4>{item.title}</h4>
                        <h5>Explore Now!</h5>
                      </div>
                      <div className="right">
                        <img src={GreyArrow} alt="right" />
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="TopBrands">
          <div className="top">
            <h2>TOP Brands Deal</h2>
            <p>
              Up To
              <span className="discount_text"> 60%</span> off on brands
            </p>
          </div>
          <div className="Bottom">
            <div className="brand">
              <img src={Nike} alt="" />
            </div>
            <div className="brand t">
              <img src={H$M} alt="" />
            </div>
            <div className="brand f">
              <img src={Levis} alt="" />
            </div>
            <div className="brand">
              <img src={Uspa} alt="" />
            </div>

            <div className="brand f">
              <img src={Puma} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="Limelight">
          <h3>
            <main></main>
            In The Limelight
          </h3>
          <div className="contents">
            {ALLITEM.map((item) => {
              if (item.type === "In The Limelight") {
                return (
                  <div
                    className="dressCard"
                    key={item.id}
                    onClick={(id) => {
                      ClickEventHandler(item.id);
                    }}
                  >
                    <div className="top">
                      <img src={item.pic} alt="" onClick={() => handleNavigation()}/>
                      <img
                        src={WishList}
                        alt=""
                        width="30px"
                        height="30px"
                        className="like"
                      />
                    </div>
                    <div className="bottom">
                      <div className="left">
                        <h4>{item.title}</h4>
                        <h5>{item.brand}</h5>
                      </div>
                      <div className="right">
                        <h6>$123.00</h6>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="Feedback" id="Jogger">
          <h1>Feedback</h1>
          <div className="Container">
            <div className="Card">
              <div className="top">
                <div className="left">
                  <img src={Testimonial1} alt="" />
                </div>
                <div className="right">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={halfStar} alt="" class="half" />
                  <img src={EmptyStar} alt="" class="empty" />
                </div>
              </div>
              <div className="bottom">
                <h2>Floyd Miles</h2>
                <h6>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet. Amet minim
                  mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  Velit officia consequat duis enim velit mollit. Exercitation
                  veniam consequat sunt nostrud amet.
                </h6>
              </div>
            </div>
            <div className="Card">
              <div className="top">
                <div className="left">
                  <img src={Testimonial2} alt="" />
                </div>
                <div className="right">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={EmptyStar} alt="" class="empty" />
                </div>
              </div>
              <div className="bottom">
                <h2>Ronald Richards</h2>
                <h6>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet. Amet minim
                  mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  Velit officia consequat duis enim velit mollit. Exercitation
                  veniam consequat sunt nostrud amet.
                </h6>
              </div>
            </div>
            <div className="Card">
              <div className="top">
                <div className="left">
                  <img src={Testimonial3} alt="" />
                </div>
                <div className="right">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={halfStar} alt="" class="half" />
                  <img src={EmptyStar} alt="" class="empty" />
                </div>
              </div>
              <div className="bottom">
                <h2>Savannah Nguyen</h2>
                <h6>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet. Amet minim
                  mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  Velit officia consequat duis enim velit mollit. Exercitation
                  veniam consequat sunt nostrud amet.
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="dots">
          <div className="dot"></div>
          <div className="dot grey"></div>
          <div className="dot grey"></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
