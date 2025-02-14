import React from "react";
import Navbar from "../components/Navbar";
import ContactBlock from "../components/Home/ContactBlock";
import Footer from "../components/Footer";
import NavMobile from "../components/NavMobile";
import MobileMenu from "../components/MobileMenu";
import { Helmet } from "react-helmet";

const Contact = ({ action }) => {
  return (
    <div className="home-page">
      <Helmet>
        <title>
          Контакты. Тантал - компания по производству металлических изделий,
          металлообработке и лазерной резке
        </title>
        <meta
          name="description"
          content="Металлические изделия. Металлообработка. Лазерная резка, связаться с нами"
        />
        <meta
          name="keywords"
          content="Корпус металлический, Кронштейн, Оборудование, Пластина, Металлообработка, лазерная резка"
        />
        <link rel="canonical" href="https://tantalm.ru" />
      </Helmet>
      <Navbar />
      <NavMobile action={action} />
      <MobileMenu action={action} />
      <ContactBlock />
      <Footer />
    </div>
  );
};

export default Contact;
