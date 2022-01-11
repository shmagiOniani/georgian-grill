import React from "react";
import { Carousel } from "antd";
import { bg1, bg2, bg3, bg4, bg5 } from "../../assets/images";
import "./Home.scss";
import "antd/dist/antd.css";

const imgArr = [
  {
    name: "some name",
    image: bg1,
    price: "1",
  },
  {
    name: "some name",
    image: bg1,
    price: "2",
  },
  {
    name: "some name",
    image: bg2,
    price: "3",
  },
  {
    name: "some name",
    image: bg1,
    price: "450",
  },
  {
    name: "some name",
    image: bg1,
    price: "450",
  },
];

function Home() {
  const contentStyle = {
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <div className="home-wrapper">
      <Carousel dotPosition="right">
        {imgArr.map((grill, index) => {
          return (
            <div key={index} className="slider-item">
              <div className="name">{grill.price}</div>
              <div className="price">{grill.name}</div>
            </div>
          );
        })}
      </Carousel>
      ,
    </div>
  );
}

export default Home;
