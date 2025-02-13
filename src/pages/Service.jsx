import React from "react";
import Navbar from "../components/Navbar";
import ServiceHero from "../components/Service/ServiceHero";
import ServiceTable from "../components/Service/ServiceTable";
import Footer from "../components/Footer";
import NavMobile from "../components/NavMobile";
import MobileMenu from "../components/MobileMenu";
import { Helmet } from "react-helmet";

const Service = ({ action }) => {
  return (
    <div className="service-page">
      <Helmet>
        <title>Услуги по обработке металлических изделий</title>
        <meta
          name="description"
          content="Услуги по металлообработке и производству качественных и прочных изделий"
        />
        <meta
          name="keywords"
          content="металлообработка, металлические изделия, мателические конструкции"
        />
        <link rel="canonical" href="https://tantalm.ru/service" />
      </Helmet>
      <Navbar />
      <NavMobile action={action} />
      <MobileMenu action={action} />
      <ServiceHero />
      <ServiceTable />
      <Footer />
    </div>
  );
};

export default Service;
