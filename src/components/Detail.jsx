import React, { useEffect, useState } from "react";
import Img16 from "../assets/img16Main.png";
import Img16_1 from "../assets/sweetShirt_2.png";
import Img16_2 from "../assets/sweetShirt_1.png";
import Img16_3 from "../assets/imgSmall.png";
import UpFrame from "../assets/UpFrame.svg";
import DownFrame from "../assets/DownFrame.svg";
import LeftRouteArrow from "../assets/RouteLeft.svg";
import star from "../assets/star.svg";
import Comment from "../assets/comment.svg";
import Sizing_arrow from "../assets/sizing_Arrow.svg";
import Cart_Icon from "../assets/Cart_To_Icon.svg";
import Payment from "../assets/payment.svg";
import Size from "../assets/shipping.svg";
import Shipping from "../assets/shipping.svg";
import Return from "../assets/returns.svg";
import Img17 from "../assets/img-17.jpg";
import Img18 from "../assets/img-18.jpg";
import Img12 from "../assets/img-12.jpg";
import WishList from "../assets/wishlist.svg";
import Img19 from "../assets/img-19.jpg";
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
import Img13 from "../assets/img-13.jpg";
import Img14 from "../assets/img-14.jpg";
import Img15 from "../assets/img-15.jpg";


import "../App.css";
function Detail() {
    const key = localStorage.getItem('ID')
    const [Detail , SetDetail] = useState({})
    const[pick ,Setpick] = useState('')
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
    useEffect(() => {
      ALLITEM.map((item) => {
        if (item.id == key) {
          SetDetail(item)
          Setpick(item.pic)
        }
      })
    },[])
    
  return (
    <>
      <div className="grey"></div>
      <div className="Wrapper">
        <div className="Detail">
          <div className="detail_left">
            <div className="imgs">
              <div className="leftImg">
                <div className="collection">
                  <img src={
                    Detail.sub_images == null ? Img11 : Detail.sub_images[0]
                  } alt="j" tabIndex="0" style={{borderRadius : "9.07px"}} width={64} height={64} onClick={() => {
                    Setpick(Detail.sub_images[0])
                  }}/>
                  <img src={
                    Detail.sub_images == null ? Detail.pic: Detail.sub_images[1]
                  } alt="j" tabIndex="0" style={{borderRadius : "9.07px"}} width={64} height={64}  onClick={() => {
                    Setpick(Detail.sub_images[1])
                  }}/>
                  <img src={
                    Detail.sub_images == null ?  Img14: Detail.sub_images[2]
                  } alt="j" tabIndex="0" style={{borderRadius : "9.07px"}} width={64} height={64} onClick={() => {
                    Setpick(Detail.sub_images[2])
                  }}/>
                </div>
                <div className="arrows">
                  <img src={UpFrame} alt="kn" />
                  <img src={DownFrame} alt="jb" />
                </div>
              </div>
            </div>
            <div className="Main_Img">
              <img src={pick} alt="img" />
            </div>
          </div>
          <div className="detail_right">
            <div className="routing-top">
              <ul>
                <li>
                  <div>
                    <h6>Shop</h6>
                    <img src={LeftRouteArrow} alt="" />
                  </div>
                </li>
                <li>
                  <div>
                    <h6>{
                      Detail.type == "Categories For Women" ? "Women": "Men" 
                    }</h6>
                    <img src={LeftRouteArrow} alt="" />
                  </div>
                </li>
                <li>
                  <div>
                    <h6>Top</h6>
                  </div>
                </li>
              </ul>
            </div>
            <h1>
             {Detail.title}
            </h1>
            <div className="Rating_Comment">
              <div className="rating">
                <div className="stars">
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <h2>{Detail.rating}</h2>
                </div>
                <div className="comments">
                  <img src={Comment} alt="comment" />
                  <h5>{Detail.tot_comments} comment</h5>
                </div>
              </div>
            </div>
            <div className="sizing">
              <div className="top">
                <div className="left">
                  <h3>Select Size</h3>
                </div>
                <div className="right">
                  <h3>Size Guide</h3>
                  <img src={Sizing_arrow} alt="" />
                </div>
              </div>
              <div className="bottom">
                <div className="sizingBox" tabIndex='0'>
                  XS
                </div>
                <div className="sizingBox" tabIndex='0'>
                  S
                </div>
                <div className="sizingBox" tabIndex='0'>
                 M
                </div>
                <div className="sizingBox" tabIndex='0'>
                L
                </div>
                <div className="sizingBox" tabIndex='0'>
               XL
                </div>
              </div>
            </div>
            <div className="colors">
              <h6>Colours Available</h6>
              <div className="colors_available">
                <div className="color" tabIndex="0" style={{ background: Detail.colors_availabe == null ? "green" : Detail.colors_availabe[0]}}></div>
                <div className="color" tabIndex="0" style={{ background: Detail.colors_availabe == null ? "red" : Detail.colors_availabe[1] }}></div>
                <div className="color" tabIndex="0" style={{ background: Detail.colors_availabe == null ? "blue" : Detail.colors_availabe[2] }}></div>
                <div className="color" tabIndex="0" style={{ background: Detail.colors_availabe == null ? "pink" : Detail.colors_availabe[3] }}></div>
              </div>
            </div>
            <div className="Card_Button">
              <div className="To_Cart">
                <img src={Cart_Icon} alt="" />
                <h6>Add to cart</h6>
              </div>
              <div className="price">
                <h6>{Detail.price}</h6>
              </div>
            </div>
            <hr />
            <div className="features">
              <ul>
                <li>
                  <div>
                    <img src={Payment} alt="" />
                    <h5>Secure payment</h5>
                  </div>
                </li>
                <li>
                  <div>
                    <img src={Size} alt="" />
                    <h5>Size & Fit</h5>
                  </div>
                </li>
                <li>
                  <div>
                    <img src={Shipping} alt="" />
                    <h5>Free shipping</h5>
                  </div>
                </li>
                <li>
                  <div>
                    <img src={Return} alt="" />
                    <h5>Free Shipping & Returns</h5>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="Discription">
          <div className="left">
            <h3>
              <main></main>
              Product Description
            </h3>
            <div className="disc_box">
              <div className="top">
                <ul>
                  <li>
                    <div>
                      <h4>Description</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>User comments</h4>
                      <div className="Mark">{Detail.tot_comments}</div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Question & Answer</h4>
                      <div className="Mark" style={{ background: "#3C4242" }}>
                        {Detail.QA_answer}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bottom">
                <p>
                {Detail.product_description}
                </p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="table">
              <div className="topOrder">
                <ul>
                  <li>
                    <div>
                      <h6>Fabric</h6>
                      <h4>Bio-washed Cotton</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h6>Pattern</h6>
                      <h4>Printed</h4>
                    </div>
                  </li>
                  <li>
                    <div style={{ borderRight: "0px" }}>
                      <h6>Fit</h6>
                      <h4>Regular-fit</h4>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="BottomOrder">
                <ul>
                  <li>
                    <div>
                      <h6>Neck</h6>
                      <h4>Round Neck</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h6>Sleeve</h6>
                      <h4>Half-sleeves</h4>
                    </div>
                  </li>
                  <li>
                    <div style={{ borderRight: "0px" }}>
                      <h6>Style</h6>
                      <h4>Casual Wear</h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="Limelight">
          <h3 className="Similar">
            <main></main>
            Similar Products
          </h3>
          <div className="contents" style={{ justifyContent: "space-between" }}>
            <div className="dressCard" style={{ margin: "0px" }}>
              <div className="top">
                <img src={Img12} alt="" />
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
                  <h4>Black Sweatshirt with ....</h4>
                  <h5>Jhanvi’s Brand</h5>
                </div>
                <div className="right">
                  <h6>$123.00</h6>
                </div>
              </div>
            </div>
            <div className="dressCard" style={{ margin: "0px" }}>
              <div className="top">
                <img src={Img17} alt="" />
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
                  <h4>line Pattern Black H...</h4>
                  <h5>AS’s Brand</h5>
                </div>
                <div className="right">
                  <h6>$123.00</h6>
                </div>
              </div>
            </div>
            <div className="dressCard" style={{ margin: "0px" }}>
              <div className="top">
                <img src={Img18} alt="" />
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
                  <h4>Black Shorts</h4>
                  <h5>MM’s Brand</h5>
                </div>
                <div className="right">
                  <h6>$123.00</h6>
                </div>
              </div>
            </div>
            <div className="dressCard" style={{ margin: "0px" }}>
              <div className="top">
                <img src={Img19} alt="" />
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
                  <h4>Levender Hoodie with ....</h4>
                  <h5>Nike’s Brand</h5>
                </div>
                <div className="right">
                  <h6>$123.00</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
