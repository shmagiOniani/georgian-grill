import React from "react";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { bg1, bg2, bg3, bg4, bg5 } from "../../assets/images";
import { NewProduct } from "./components";
import "./Home.scss";

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
  return (
    <div className="home-wrapper">
      <Carousel
        arrows
        prevArrow={<ArrowLeftOutlined />}
        nextArrow={<ArrowRightOutlined />}
      >
        {imgArr.map((grill, index) => {
          return (
            <div key={index} className="slider-item">
              <div className="name">{grill.price}</div>
              <div className="price">{grill.name}</div>
            </div>
          );
        })}
      </Carousel>
      <NewProduct />
      <div className="best-choice-header">
        <div>საუკეთესო არჩევანი</div>
        <div>ჩვენი ყველაზე გაყიდვადი პროდუქტი</div>
      </div>
    </div>
  );
}

export default Home;
