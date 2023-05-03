import React from "react";
import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontext";

const About = () => {
  const { myName } = useProductContext();
  const data = {
    name: "Einstern Baby Food Ecommerce",
    text: "This e-shop will offer high-quality food products for babies. The motivation is to fight malnutrition or unhealthy diet of children around the world, as well as support parents in child care, especially in the earlier months of the child's life. In the first step, the products should be a collection of food products purchased from manufacturers and packed in with a self-made packaging. The products should comply with certain standards. ",
    image:  <img src="images/hero1.jpg" alt="hero-section-photo" className="img-style"/>
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;