import React from 'react';
import { useRequest } from 'estafette';
import { Link } from 'estafette-router';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Lazy
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { slider } from 'libs/http/api';

import './SwiperCarousel.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/lazy/lazy.scss';
import { Slider } from 'libs/http/api/slider/slider.types';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, Lazy]);

export const SwiperCarousel = () => {
  const { request, data } = useRequest<string[]>();

  React.useEffect(() => {
    onFetch();

    return () => {
      slider.cancel();
    };
  }, []);

  const onFetch = (): Promise<string[]> => request(slider.action());

  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 6000 }}
        lazy
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {/* {data &&
          data.map((image, key) => (
            <SwiperSlide key={key}>
              <Link to="/">
                <img
                  className="swiper-lazy"
                  data-src={image}
                  src={image}
                  alt={image}
                />
              </Link>
            </SwiperSlide>
          ))} */}
        <SwiperSlide>
          <Link to="/">
            <img
              className="swiper-lazy"
              data-src="/images/PC.jpg"
              src="/images/loader.gif"
              alt="pc"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <img
              className="swiper-lazy"
              data-src="/images/car.jpeg"
              alt="car"
              src="/images/loader.gif"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <img
              className="swiper-lazy"
              data-src="/images/smartphones.jpg"
              alt="smartphones"
              src="/images/loader.gif"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <img
              className="swiper-lazy"
              data-src="/images/work-gadgets.jpg"
              alt="work-gadgets"
              src="/images/loader.gif"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <img
              className="swiper-lazy"
              data-src="/images/work-place.jpg"
              alt="work-gadgets"
              src="/images/loader.gif"
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
