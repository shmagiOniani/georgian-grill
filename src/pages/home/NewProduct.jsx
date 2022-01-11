import { Col, Row } from "antd";
import React from "react";

function NewProduct() {
  return (
    <div className="new-product-wrapper">
      <div className="new-product-container">
        <div className="container">
          <Row>
            <Col xs={24} md={12} className="product-col">
              <div className="product-image">
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              </div>
              <div className="product-desc"></div>
              <div className="product-price"></div>
            </Col>
            <Col xs={24} md={12}>
              <Row>
                <Col xs={24} className="product-col"></Col>
                <Col xs={24} className="product-col"></Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default NewProduct;
