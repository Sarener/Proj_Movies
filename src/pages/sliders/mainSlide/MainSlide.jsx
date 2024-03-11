import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './MainSlide.scss'
import { Link } from 'react-router-dom';


export const MainSlide = ({moviesSlide})=> {
    return(
      <>
      <Swiper
        style={{width:'500px'}} 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='swiperMain'
      >
        {moviesSlide.map(({...moviesProps})=>{
                return <SwiperSlide 
                style={{height:'500px'}} 
                className='swiper-slideMain' 
                key={moviesProps.id}>
                  <Link to={`/movie/${moviesProps.id}`} 
                  className="moviesWrappStyle">
                    <img 
                    style={{width:'500px',height:'100%'}}  
                    src={moviesProps.poster.previewUrl} 
                    alt="" />
                  </Link>
                  </SwiperSlide>
            })}
      </Swiper>

      </>

    )

}