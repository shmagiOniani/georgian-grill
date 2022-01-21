import { Col, Row } from "antd";
import React from "react";
import { bg1, bg2, bg3, bg4, bg5, one, two, three } from "../../../../assets/images";

import "./NewProduct.scss";

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
                  src={two}
                />
              </div>
              <div className="product-title">ახალი ნივთი</div>
              <div className="product-desc">
                <span>ნივთზე ფასდაკლება</span>
                <span>- 30% მდე</span>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <Row gutter={[32, 32]}>
                <Col xs={24} className="product-col">
                  <div className="product-image">
                    <img
                      alt="example"
                      src={one}
                    />
                  </div>
                  <div className="product-title">ახალი ნივთი</div>
                  <div className="product-desc">
                    <span>ნივთზე ფასდაკლება</span>
                    <span>- 30% მდე</span>
                  </div>
                </Col>
                <Col xs={24} className="product-col">
                  <div className="product-image">
                    <img
                      alt="example"
                      src={three}
                    />
                  </div>
                  <div className="product-title">ახალი ნივთი</div>
                  <div className="product-desc">
                    <span>ნივთზე ფასდაკლება</span>
                    <span>- 30% მდე</span>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default NewProduct;
