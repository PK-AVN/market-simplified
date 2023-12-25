import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Signup from "./signUp";
// import Signin from "./signIn";
import Hero from "./hero";
import PrivateRoute from "./privateRoute";
// import Header from "./header";
import Container from "./site/container/Container";
import MainHeader from "./site/mainheader/MainHeader";
import ContainerOne from "./site/containerOne/ContainerOne";
import ContainerTwo from "./site/containerTwo/ContainerTwo";
import ContainerThree from "./site/containerThree/ContainerThree";
import Footer from "./site/footer/Footer";
import ContactUs from "./site/contactUs/ContactUs";
import HeroSection from "./site/heroSection/HeroSection";
import PayNow from "./site/pay-now/PayNow";

export default function App() {
  return (
    <Router>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="job-placement" element={<ContainerOne />} />
        <Route path="immigration" element={<ContainerTwo />} />
        <Route path="about-us" element={<ContainerThree />} />
        <Route path="pay-now" element={<PayNow />} />
      </Routes>
      <ContactUs />
      <Footer />
    </Router>
  );
}
