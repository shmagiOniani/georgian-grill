import React from "react";
import { Carousel, Row, Col } from "antd";
import "antd/dist/antd.css";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import { bg1, bg2, bg3, bg4, bg5, one, two, three } from "../../assets/images";
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
  const sliderSettings = {
    arrows: true,
    dots: false,
    prevArrow: <ArrowLeftOutlined />,
    nextArrow: <ArrowRightOutlined />,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

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
      <div className="best-choice-wrapper">
        <Carousel {...sliderSettings}>
          {imgArr.map((item, index) => {
            return (
              <div className="slider-item" key={index}>
                <div className="best-choice-image">
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                </div>
                <div className="best-choice-desc">
                  <div>პროდუქტის აღწერა</div>
                  <div>$550.00</div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="product-category">
        <Row>
          <Col xs={24} md={12} lg={6}>
            <div className="category-item">
              <div className="bg-container">
                <img width={480} height={720} alt="example" src={one} />
              </div>
              <div className="custom-border">
                <div></div>
                <div></div>
              </div>
              <div className="category-title">დასახელება</div>
            </div>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <div className="category-item">
              <div className="bg-container">
                <img width={480} height={720} alt="example" src={two} />
              </div>
              <div className="custom-border">
                <div></div>
                <div></div>
              </div>
              <div className="category-title">დასახელება</div>
            </div>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <div className="category-item">
              <div className="bg-container">
                <img width={480} height={720} alt="example" src={three} />
              </div>
              <div className="custom-border">
                <div></div>
                <div></div>
              </div>
              <div className="category-title">დასახელება</div>
            </div>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <div className="category-item">
              <div className="bg-container">
                <img width={480} height={720} alt="example" src={one} />
              </div>
              <div className="custom-border">
                <div></div>
                <div></div>
              </div>
              <div className="category-title">დასახელება</div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="choose-us">
        <Row>
          <Col xs={24} lg={12}>
            <div className="choose-us-header">
              <h3>რატომ უნდა აგვირჩიოთ</h3>
              <p>
                ხანგრძლივად მცხოვრები მცენარე, რომელსაც აქვს მრავალწლოვანი
                გახევებული ღერო და ფესვები. ბუჩქისგან განსხვავებით ხის ღერო
                (შტამპი) და ვარჯი ყოველთვის მკვეთრად გამოხატულია.
              </p>
            </div>
            <div className="choose-us-variants">
              <div>
                <div className="title">სატაური</div>
                <div className="image-container">
                  <img src={bg1} alt="" />
                </div>
              </div>
              <div>
                <div className="title">სატაური</div>
                <div className="image-container">
                  <img src={bg1} alt="" />
                </div>
              </div>
              <div>
                <div className="title">სატაური</div>
                <div className="image-container">
                  <img src={bg1} alt="" />
                </div>
              </div>
            </div>
            <div className="choose-us-blog">
              <h4>ქვე სათაური</h4>
              <div className="content">
                ხანგრძლივად მცხოვრები მცენარე, რომელსაც აქვს მრავალწლოვანი
                გახევებული ღერო და ფესვები. ბუჩქისგან განსხვავებით ხის ღერო
                (შტამპი) და ვარჯი ყოველთვის მკვეთრად გამოხატულია. ღერო და ტოტები
                შედგება მერქნისა და ქერქისაგან. კორომში ხეს აქვს მაღალი ღერო
                (თითქმის ცილინდრული) და პატარა, საკმაოდ მაღლა განლაგებული ვარჯი,
                გაშლილი ადგილზე — მოკლე და სქელი ღერო, ვარჯიც უფრო ქვემოდან
                ეწყება.
              </div>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className="image-container">
              <img src={two} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
