import React, {useState} from "react";
import { Col, Input, Row } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Footer.scss"

function Footer() {
    const [email, setEmail] = useState("")
  return (
    <div className="footer-wrapper">
      <Row>
        <Col xs={12} className="footer-input">
        <h3>NEWSLETTER</h3>
        <div className="input">
            <Input value={email} />
            <SendOutlined />
        </div>
        <div className="desc">Please read the Coffee Address Personal data processing policy here</div>
        </Col>
        <Col xs={12} className="footer-category">
          <h3>CATEGORIES</h3>
          <ul>
            <li>
              <Link > item 1 </Link>
            </li>
            <li>
              <Link > item 2 </Link>
            </li>
            <li>
              <Link > item 3 </Link>
            </li>
            <li>
              <Link > item 4 </Link>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col xs={12} >social</Col>
        <Col xs={12}>All rights reserved. © Copyright 7uptheme</Col>
      </Row>
    </div>
  );
}

export default Footer;
