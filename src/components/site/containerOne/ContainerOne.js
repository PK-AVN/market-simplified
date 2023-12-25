import React from 'react'
import Testimonials from '../testimonials/Testimonials'
import JobPlacement from '../jobPlacement/JobPlacement'
import Placements from '../placements/Placements'
import ChooseUs from '../chooseUs/ChooseUs'

const ContainerOne = () => {
  return (
    <>
    <h2 className="container-one-main-text">Job Placements</h2>
    <JobPlacement />
    <Placements />
    <ChooseUs />
    <Testimonials />
    </>
  )
}

export default ContainerOne