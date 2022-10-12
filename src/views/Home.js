import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import {Helmet} from "react-helmet";
const Home = () => {

  return (
    <>
    <Helmet>
      <title> Laboratorio Humani</title>
      <meta name="Laboratorio Humani, es un laboratorio clinico ubicado en Quetzaltenango cuyo principal objetivo es brindar un servicio de calidad y con calidez a nuestros pacientes" content=' En la pagina de laboratorio Humani encontras como contactarte con nosotros y nuestros servicios.'
      />
    
    </Helmet>
      <Hero className="illustration-section-01" />
   
      <FeaturesTiles />
     
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
       {/* <Testimonial topDivider />
      <Cta split />  */}
    </>
  );
}

export default Home;