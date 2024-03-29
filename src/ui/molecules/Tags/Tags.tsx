import React from 'react';
import { useRequest } from 'estafette';
import { Link } from 'estafette-router';
import Slider from 'react-slick';
import { tags, TagsProps } from 'libs/http/api';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Tags.scss';

export const Tags = () => {
  const { request, data: tagsData } = useRequest<TagsProps[]>();

  React.useEffect(() => {
    onFetch();

    return () => {
      tags.cancel();
    };
    // eslint-disable-next-line
  }, []);

  const onFetch = () => request(tags.action());

  const settings = {
    infinite: false,
    speed: 500,
    arrows: false,
    draggable: true,
    variableWidth: true
  };

  return (
    <div className="tags">
      <Slider {...settings}>
        {tagsData &&
          tagsData.map((tag) => (
            <Link to={tag.link} key={tag.id}>
              {tag.tagName}
            </Link>
          ))}
      </Slider>
    </div>
  );
};
