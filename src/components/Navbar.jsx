import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import phone from "../assets/phone.png";
import email from "../assets/email.png";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const loc = document.location.href?.split("/");
  const location = loc ? loc.at(-1) : "";

  const [yOffset, setYoffset] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const y = window.pageYOffset;
      setYoffset(y);
    });
  }, []);

  const getList = (href) => {
    switch (href) {
      case "":
        return (
          <div className="menu-links">
            <Link to={"/about"}>О НАС</Link>
            <Link to={"/service"}>УСЛУГИ</Link>
            <Link to={"/products"}>ПРОДУКЦИЯ</Link>
            <Link to={"/contact"}>КОНТАКТЫ</Link>
          </div>
        );
      case "about":
        return (
          <div className="menu-links">
            <Link to={"/"}>ГЛАВНАЯ</Link>
            <Link to={"/service"}>УСЛУГИ</Link>
            <Link to={"/products"}>ПРОДУКЦИЯ</Link>
            <Link to={"/contact"}>КОНТАКТЫ</Link>
          </div>
        );
      case "service":
        return (
          <div className="menu-links">
            <Link to={"/"}>ГЛАВНАЯ</Link>
            <Link to={"/about"}>О НАС</Link>
            <Link to={"/products"}>ПРОДУКЦИЯ</Link>
            <Link to={"/contact"}>КОНТАКТЫ</Link>
          </div>
        );
      case "products":
        return (
          <div className="menu-links">
            <Link to={"/"}>ГЛАВНАЯ</Link>
            <Link to={"/about"}>О НАС</Link>
            <Link to={"/service"}>УСЛУГИ</Link>
            <Link to={"/contact"}>КОНТАКТЫ</Link>
          </div>
        );
      case "contact":
        return (
          <div className="menu-links">
            <Link to={"/"}>ГЛАВНАЯ</Link>
            <Link to={"/about"}>О НАС</Link>
            <Link to={"/service"}>УСЛУГИ</Link>
            <Link to={"/products"}>ПРОДУКЦИЯ</Link>
          </div>
        );
    }
  };

  const navigate = useNavigate();

  return (
    <div className={yOffset > 10 ? "navbar navbar-scrolled" : "navbar"}>
      <div className="logo d-flex justify-content-center w-100">
        <img
          id="logo"
          src={logo}
          alt=""
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      {getList(location)}
      <div>&nbsp;</div>
      <div className="contact-info">
        <div className="d-flex align-items-center mb-3">
          <img src={phone} alt="" className="me-2 contact-icon" />
          <a
            style={{ fontSize: "2vh", textDecoration: "none" }}
            href={`tel:+79801845909`}
          >
            +7-980-184-59-09
          </a>
        </div>
        <div className="d-flex align-items-center">
          <img src={email} alt="" className="me-2 contact-icon" />
          <a
            href={`mailto:tantallazer@yandex.ru`}
            style={{ fontSize: "2vh", textDecoration: "none" }}
          >
            tantallazer@yandex.ru
          </a>
        </div>
        <div className="d-flex" style={{ marginTop: "20px" }}>
          <a
            href="https://wa.me/+79801845909"
            target="_blank"
            className="me-3"
            style={{ fontSize: "24px", color: "white" }}
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://t.me/+79801845909"
            target="_blank"
            style={{ fontSize: "24px", color: "white" }}
          >
            <FaTelegram />
          </a>
          <a
            href="https://t.me/lasercuttingmos"
            target="_blank"
            style={{ fontSize: "24px", color: "white", textDecoration: 'none' }}
          >
            Наш TG канал
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
