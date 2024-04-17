import React from 'react'
import HomeSliderImage from './components/HomeSliderImage'
import HomeShopeeMall from './components/HomeShopeeMall'
import HomeCuratedCollections from './components/HomeCuratedCollections'
import HomeProducts from './components/HomeProducts'

function HomeBody() {
  return (
    <div className="HomeBody">
      <HomeSliderImage />
      <HomeShopeeMall />
      <HomeCuratedCollections />
      <HomeProducts />
    </div>
  )
}

export default HomeBody