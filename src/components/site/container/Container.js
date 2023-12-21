import React from "react";
import Header from "../header/header";
import HeroSection from "../heroSection/HeroSection";
import WidgetGrid from "../widgetGrid/WidgetGrid";
import ServicesOffered from "../servicesOffered/ServicesOffered";

const Container = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <HeroSection />
        <WidgetGrid />
        <ServicesOffered />
        {/* Features and Benefits */}
        {/* Testimonials */}
        {/* countries */}
        {/* FAQ */}
        {/* ContactUs */}
      </main>
      {/* Footer */}
    </div>
  );
};

export default Container;
