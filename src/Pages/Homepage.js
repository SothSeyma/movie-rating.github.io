import React from 'react'
import './homepage.css';
import '../App.css';
import TopBanner from '../Components/TopBanner';

import SwiperCard from '../Components/SwiperCard';
function Homepage() {
  return (
    <div className='page-wrapper-home'>
        <div className="topbanner">
          <TopBanner/>
        </div>
        {/* <div className='movie-slider'>
          <CardSlider/>
        </div> */}
        <div className="swiper-movie">
          <div className="title" >
            <h1>New Released Movies</h1>
            <h2>Show all</h2>
          </div>
          <SwiperCard/>
        </div>
        </div>
  )
}

export default Homepage