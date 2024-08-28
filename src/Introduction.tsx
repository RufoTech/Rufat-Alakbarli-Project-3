import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,Autoplay } from 'swiper/modules';

const Introduction: React.FC = () => {
  return (
    <div className="container">
      <div className="figure">
        <div className="row">
          <div className="figure-left-side col-12 col-md-6">
            <h1 className='text-light'>Learn Website Development <span className='side'> Side</span></h1>
            <p className='text-light h3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="buton my-5 d-flex align-items-center">
              <button className='buta text-light'><h5 className='join'>Join Now</h5></button>
              <div className="player d-flex align-items-center justify-content-center">
                <img src="/assets/images/header/player.svg" alt="" />
              </div>
              <div className="player-linear"></div>
              <h6 className='text-light px-3 demo'>Watch Demo....</h6>
            </div>
            <div className="search">
              <img src="/assets/images/header/search.png" alt="" className='searchs' />
            </div>
          </div>

          {/* Sadece figure-right-side için Swiper bileşeni */}
          <div className="figure-right-side col-12 col-md-6">
            <Swiper
              direction={'vertical'}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination,Autoplay]}
              className="mySwiper"
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              speed={1400}
            >
              {/* SwiperSlide bileşenleri */}
              <SwiperSlide>
                <img src="/assets/images/header/download.jpeg" alt="" className=' klas-1' />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/images/header/file(2).png" alt="" className='klas-2' />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/images/header/file(3).png" alt="" className=' klas-2' />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/images/header/file(4).png" alt="" className=' klas-2' />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
