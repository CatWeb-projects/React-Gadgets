import React from 'react';
import { useRequest } from 'estafette';
import { Link } from 'estafette-router';
import Slider from 'react-slick';
import { slider, SliderProps } from 'libs/http/api';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SlickSlider.scss';

export const SlickSlider = () => {
  const { request, data: sliderData } = useRequest<SliderProps[]>();

  React.useEffect(() => {
    onFetch();

    return () => {
      slider.cancel();
    };
    // eslint-disable-next-line
  }, []);

  const onFetch = () => request(slider.action());

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    lazyLoad: 'ondemand'
  };

  return (
    <div className="slick-wrapper">
      <Slider {...settings}>
        {sliderData &&
          sliderData.map((image) => (
            <Link to={image.link} key={image.id}>
              <img
                data-lazy={image.imgUrl}
                src={image.imgUrl}
                alt={image.altName}
                // src="/images/loader.gif"
              />
            </Link>
          ))}
      </Slider>
    </div>
  );
};
