import React from 'react'
import './homepage.css';
import '../App.css';
import TopBanner from '../Components/TopBanner';
import SwiperCardRecomMov from '../Components/SwiperCard-RecomMov';
import SwiperCard from '../Components/SwiperCard';
import SwiperCardUpcoming from '../Components/SwiperCardUpcom';
function Homepage() {
  return (
    <div className='page-wrapper-home'>
        <div className="topbanner">
          <TopBanner/>
        </div>
        
        {/* New release display by lastest release date */}
        <div className="swiper-movie">
          <div className="title" >
            <h1>New Released Movies</h1>
            <h2>Show all</h2>
          </div>
          <div className="swiper-card-show">
          <SwiperCard/>
          </div>
        </div>
        {/* recomment display by best rating */}
        <div className="swiper-movie">
          <div className="title" >
            <h1>Recomment Movies To Watch</h1>
            <h2>Show all</h2>
          </div>
          <div className="swiper-card-show">
            <SwiperCardRecomMov/>
          </div>
        </div>

        {/* upcoming display  */}
        <div className="swiper-movie">
          <div className="title" >
            <h1>UpComing Movies</h1>
            <h2>Show all</h2>
          </div>
          <div className="swiper-card-show">
            <SwiperCardUpcoming/>
          </div>
        </div>







        </div>
  )
}

export default Homepage