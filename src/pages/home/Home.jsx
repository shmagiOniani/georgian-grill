import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Row, Col, Input, Button } from "antd";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import Slider from "react-slick";
import { bg1, bg2, bg3, bg4, bg5, one, two, three } from "../../assets/images";
import { NewProduct, CountDown } from "./components";
import "./Home.scss";
import Loading from "../../components/Loading/Loading";

const sliderArr = [
  {
    name: "some category name",
    image: bg1,
    maxPrice: "400",
    minPrice: "50",
  },
  {
    name: "some category name",
    image: bg2,
    maxPrice: "400",
    minPrice: "50",
  },
  {
    name: "some category name",
    image: bg3,
    maxPrice: "400",
    minPrice: "50",
  },
  {
    name: "some category name",
    image: bg4,
    maxPrice: "400",
    maxinice: "50",
  },
  {
    name: "some category name",
    image: bg5,
    maxPrice: "400",
    maxinice: "50",
  },
];

const imgArr = [
  {
    name: "some name",
    image: one,
    price: "1",
  },
  {
    name: "some name",
    image: two,
    price: "2",
  },
  {
    name: "some name",
    image: three,
    price: "3",
  },
  {
    name: "some name",
    image: one,
    price: "450",
  },
  {
    name: "some name",
    image: two,
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
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);

  const qtyIncrement = () => {
    setQty((prev) => prev + 1);
  };
  const qtyDecrement = () => {
    if (qty > 1) {
      setQty((prev) => prev - 1);
    }
  };

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
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="home-wrapper">
      <Carousel
        arrows
        prevArrow={<ArrowLeftOutlined />}
        nextArrow={<ArrowRightOutlined />}
      >
        {sliderArr.map((grill, index) => {
          return (
            <div key={index} className="slider-item">
              <img src={grill.image} />
              <div className="desc-wrapper">
                <div className="desc">
                  <div className="name">{grill.name}</div>
                  <div className="price-range">
                    Price:<span>${grill.minPrice}</span>-
                    <span>${grill.maxPrice}</span>
                  </div>
                  <div className="shop-btn">Shop Now</div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
      <NewProduct />
      {/* best choice */}
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
      {/* product category */}
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
      {/* why choose us */}
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
      {/* offer with countdown */}
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
                    {/* <div className="best-choice-desc">
                      <div>პროდუქტის აღწერა</div>
                      <div>$550.00</div>
                    </div> */}
                  </div>
                );
              })}
            </Carousel>
          </Col>
          <Col xs={24} lg={12} className="best-countdown-desc">
            <div className="offer-title">
              <h3>
                <Link to={"#"}>სათაური</Link>
              </h3>
            </div>
            <div className="offer-price">
              <del className="old">
                <div>$3,600,00</div>
              </del>
              <ins className="new">
                <div>$1,660.00</div>
              </ins>
            </div>
            <div className="offer-stock">+10 ცალი</div>
            <div className="offer-desc">
              ხანგრძლივად მცხოვრები მცენარე, რომელსაც აქვს მრავალწლოვანი
              გახევებული ღერო და ფესვები. ბუჩქისგან განსხვავებით ხის ღერო
              (შტამპი) და ვარჯი ყოველთვის მკვეთრად გამოხატულია.
            </div>
            <div className="offer-qty">
              <div className="qty">QTY</div>
              <div className="input">
                <div className="minus qty-btn" onClick={qtyDecrement}>
                  <MinusOutlined />
                </div>
                <Input value={qty} onChange={(e) => setQty(e.target.value)} />
                <div className="plus qty-btn" onClick={qtyIncrement}>
                  <PlusOutlined />
                </div>
              </div>
              <Button className="add-button">კალათში დამატება</Button>
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
