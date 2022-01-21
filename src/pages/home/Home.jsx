import React, {useState, useEffect} from "react";
import { Carousel, Row, Col, Input, Button } from "antd";
import "antd/dist/antd.css";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import { bg1, bg2, bg3, bg4, bg5, one, two, three } from "../../assets/images";
import { NewProduct, CountDown } from "./components";
import "./Home.scss";
import Loading from "../../components/Loading/Loading"

const imgArr = [
  {
    name: "some name",
    image: bg5,
    price: "1",
  },
  {
    name: "some name",
    image: bg2,
    price: "2",
  },
  {
    name: "some name",
    image: bg3,
    price: "3",
  },
  {
    name: "some name",
    image: bg4,
    price: "450",
  },
  {
    name: "some name",
    image: bg2,
    price: "450",
  },
];

const secondArr = [
  {
    name: "some name",
    image: one,
    color: "brown",
  },
  {
    name: "some name",
    image: two,
    color: "yellowgreen",
  },
  {
    name: "some name",
    image: one,
    color: "burlywood",
  },
  {
    name: "some name",
    image: three,
    color: "turquoise",
  },
];

function Home() {
  const [loading, setLoading] = useState(true)

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

  const offersliderSettings = {
    arrows: true,
    dots: false,
    prevArrow: <ArrowLeftOutlined />,
    nextArrow: <ArrowRightOutlined />,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    setTimeout(() => {setLoading(false)}, 1000);
  }, [])

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
              <img  src={grill.image} />
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
                  <img alt="example" src={item.image} />
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
          {secondArr.map((item, index) => {
            return (
              <Col xs={24} md={12} lg={6} key={index}>
                <div
                  className="category-item"
                  style={{ backgroundColor: `${item.color}` }}
                >
                  <div className="bg-container">
                    <img
                      width={480}
                      height={720}
                      alt="example"
                      src={item.image}
                    />
                  </div>
                  <div className="custom-border">
                    <div></div>
                    <div></div>
                  </div>
                  <div className="category-title">{item.name}</div>
                </div>
              </Col>
            );
          })}
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
              <div className="choose-us-item">
                <div className="title">სატაური</div>
                <div className="image-container">
                  <img src={bg1} alt="" />
                </div>
              </div>
              <div className="choose-us-item">
                <div className="title">სატაური</div>
                <div className="image-container">
                  <img src={bg1} alt="" />
                </div>
              </div>
              <div className="choose-us-item">
                <div className="title">სატაური</div>
                <div className="image-container">
                  <img src={bg1} alt="" />
                </div>
              </div>
            </div>
            <div className="choose-us-blog">
              <h4>ქვე სათაური</h4>
              <p>
                ხანგრძლივად მცხოვრები მცენარე, რომელსაც აქვს მრავალწლოვანი
                გახევებული ღერო და ფესვები. ბუჩქისგან განსხვავებით ხის ღერო
                (შტამპი) და ვარჯი ყოველთვის მკვეთრად გამოხატულია. ღერო და ტოტები
                შედგება მერქნისა და ქერქისაგან. კორომში ხეს აქვს მაღალი ღერო
                (თითქმის ცილინდრული) და პატარა, საკმაოდ მაღლა განლაგებული ვარჯი,
                გაშლილი ადგილზე — მოკლე და სქელი ღერო, ვარჯიც უფრო ქვემოდან
                ეწყება.
              </p>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className="image-container">
              <img src={two} />
            </div>
          </Col>
        </Row>
      </div>
      <div className="best-countdown">
        <Row>
          <Col xs={24} lg={12} className="offer-carousel">
            <Carousel {...offersliderSettings}>
              {imgArr.map((item, index) => {
                return (
                  <div className="offer-slider-item" key={index}>
                    <div className="best-choice-image">
                      <img alt="example" src={item.image} />
                    </div>
                    <div className="best-choice-desc">
                      <div>პროდუქტის აღწერა</div>
                      <div>$550.00</div>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </Col>
          <Col xs={24} lg={12} className="best-countdown-desc">
            <div className="offer-title">სათაური </div>
            <div className="offer-price">1,660.00</div>
            <div className="offer-desc">
              ხანგრძლივად მცხოვრები მცენარე, რომელსაც აქვს მრავალწლოვანი
              გახევებული ღერო და ფესვები. ბუჩქისგან განსხვავებით ხის ღერო
              (შტამპი) და ვარჯი ყოველთვის მკვეთრად გამოხატულია.
            </div>
            <div className="offer-qty">
              <Input />
              <Button></Button>
            </div>
            <div className="offer-countdown">
              <CountDown />
            </div>
          </Col>
        </Row>
      </div>
      {loading && <Loading />}
      
    </div>
  );
}

export default Home;
