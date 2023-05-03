import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";


const Home = () => {
  const data = {
    name: "Einstern Baby Food",
    text: "The online store for high quality food products for children between the ages of 5 and 15 months. We offer a selection of foods, which are specially adapted to the needs of infants and contain a balanced mix of nutrients.",
    image:  <img src="images/hero.jpg" alt="hero-section-photo" className="img-style"/>
  };

  return (
    <>
      <HeroSection myData={data} />
      <Services />
    </>
  );
};

export default Home;