// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';



import './Banner.css';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Fade } from 'react-awesome-reveal';

const Banner = () => {
    
  const{theme} = useContext(AuthContext) 


    return (
      <Fade>
        <div style={{backgroundColor: theme == "dark" ? "black" : "white" , color: theme == "dark" ? "white" : "black" }}>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://i.ibb.co/br1WXyD/1.jpg" />

          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/DD8gvKV/2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/bzNjMjG/3.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/VYZzLJK/images.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/Tv4Gpnj/1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src= "https://i.ibb.co/9Gtcnww/2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/FmRQWW3/3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/2KDQfWk/2.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/5FMg1Sj/3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src= "https://i.ibb.co/JnbcpFX/4.jpg"  />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/zbgBTQD/1.jpg"  />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/Ytm83S0/3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/G2pmvrj/4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/gdh4tXS/1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/ZcPvjrh/2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/V9jLhp5/1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src=  "https://i.ibb.co/2y90MRG/2.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/94VZtQ3/3.jpg"  />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/yd9HW3q/4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src= "https://i.ibb.co/ZYVpPyv/1.jpg"  />
          </SwiperSlide>
        </Swiper>
      </div>
      </Fade>
    );
};

export default Banner;