import React, { useState } from "react";
import { Form, Input } from "antd";
import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const navigationArr = [
  {
    label: "Home",
    link: "/home",
    type: "header",
  },
  {
    label: "Shop",
    link: "/shop",
    type: "dropdown",
    options: ["item", "item", "item", "item", "item"],
  },
  {
    label: "Blog",
    link: "/blog",
    type: "dropdown",
    options: ["item", "item", "item", "item", "item"],
  },
  {
    label: "About",
    link: "/about",
    type: "header",
  },
  {
    label: "Contact",
    link: "/contact",
    type: "header",
  },
];

function Navbar() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [form] = Form.useForm();

  const searchToggle = () => {
    setSearchVisible((prev) => !prev);
  };

  const onFinish = () => {
    console.log(form.getFieldValue().search);
  };

  return (
    <div className="nav-wrapper">
      <div className="nav-container">
        <div className="logo">logo</div>
        <div className="navigation">
          <ul>
            {navigationArr.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.link}>{item.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="search-cart">
          <div className="search">
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
              onBlur={searchToggle}
            >
              <Form.Item name="search">
                <Input
                  className={searchVisible && "active"}
                  placeholder="Search..."
                />
              </Form.Item>
            </Form>
            <SearchOutlined onClick={searchToggle} />
          </div>
          <div className="cart">
            <ShoppingCartOutlined />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
