
import React from 'react'
import Swipper from '@/components/Swipper/Swipper'
import Aboutcompany from '@/components/Aboutcompany/Aboutcompany'
import FeaturedProducts from '@/components/FeaturedProducts/FeaturedProducts'
import ChooseCounterUp from '@/components/ChooseCountUp/ChooseCounterUp'


const page = () => {
  return (
    <>
      <Swipper/>
      <Aboutcompany/>
      <FeaturedProducts/>
      <ChooseCounterUp/>

    </>

  )
}

export default page
