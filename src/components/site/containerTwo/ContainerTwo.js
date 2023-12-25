import React from 'react'
import Testimonials from '../testimonials/Testimonials'
import Immigration from '../immigration/Immigration'
import TravelMaterial from '../travelMaterial/TravelMaterial'
import OurServices from '../ourServices/OurServices'
import CountriesSection from '../countriesSection/CountriesSection'
import ImmigrationChooseUs from '../immigrationChooseUs/ImmigrationChooseUs'

const ContainerTwo = () => {
  return (
    <>
      <h2 className="container-one-main-text">Immigration</h2>
      <Immigration />
      <TravelMaterial />
      <OurServices />
      <ImmigrationChooseUs />
      <CountriesSection />
      <Testimonials />
    </>
  )
}

export default ContainerTwo