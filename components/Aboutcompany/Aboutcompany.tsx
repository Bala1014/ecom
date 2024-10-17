import React from 'react'
import AboutCompanyImgCard from '@/components/AboutCompanyImgCard/AboutCompanyImgCard.jsx'
import './Aboutcompany.css';

const Aboutcompany = () => {

  return (

    <>
      <div className="about-company-content">
        <div className="content">
          <div className="text-content">
            <h1>About Our Company</h1>
            <h3>balagod is a pc solution Company & exporter</h3>
            <p>Focusing on the field of high-end animal husbandry ventilation and environmental protection, we have innovatively launched customized solutions and gradually become a professional technology company that integrates product research and development, production, sales, and service.</p>

            <p>Establish a high-end product design team, invest in the introduction of international cutting-edge fully automated production equipment, have professional laboratories and R&D personnel, and strictly control the quality of raw material procurement. We use exquisite technology, fast delivery, and reliable quality to ensure that every product detail can meet the actual needs of users.</p>

            <button>more info</button>
          </div>

          <AboutCompanyImgCard/>
        </div>

      


      </div>
    
    </>
  )
}

export default Aboutcompany