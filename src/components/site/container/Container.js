import React from "react";
import HeroSection from "../heroSection/HeroSection";
import WidgetGrid from "../widgetGrid/WidgetGrid";
import ServicesOffered from "../servicesOffered/ServicesOffered";
import MainHeader from "../mainheader/MainHeader";
import FeaturesAndBenefits from "../featuresAndBenefits/FeaturesAndBenefits";
import Testimonials from "../testimonials/Testimonials";
import CountriesSection from "../countriesSection/CountriesSection";
import FAQ from "../FAQ/FAQ";
import ContactUs from "../contactUs/ContactUs";
import Footer from "../footer/Footer";

const Container = () => {
  return (
    <div className="">
      <main>
      <HeroSection />
        <WidgetGrid />
        <ServicesOffered />
        <FeaturesAndBenefits />
        <Testimonials /> 
        <CountriesSection />
        <FAQ />
      </main>
    </div>
  );
};

export default Container;
