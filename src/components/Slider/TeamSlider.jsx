import { Icon } from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Team from '../Team';
import { useGetInstitucionQuery } from "../../api/apiSlice";
import { useSelector } from "react-redux";


export default function TeamSlider() {
  const staticData = useSelector((state) => state.staticData.staticData);
  const { data, isLoading} = useGetInstitucionQuery();
  /** Team Member Data **/
  const teamData = [
    {
      memberImage: '/images/member_1.jpeg',
      memberName: 'Melon Bulgery',
      memberDesignation: 'Product Designer',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: '/images/member_2.jpeg',
      memberName: 'Olinaz Fushi',
      memberDesignation: 'Product Designer',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: '/images/member_3.jpeg',
      memberName: 'David Elone',
      memberDesignation: 'React Developer',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: '/images/member_4.jpeg',
      memberName: 'Melina Opole',
      memberDesignation: 'WP Developer',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: '/images/member_1.jpeg',
      memberName: 'Melon Bulgery',
      memberDesignation: 'Product Designer',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
  ];
  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  if (!isLoading) {
    const {
      Descripcion: {        
        autoridad,       
      },
    } = data;        

  return (
    <Slider {...settings} className="cs-gap-24 cs-arrow_style2">
      {autoridad.map((item, index) => (
        <Div key={index}>
          <Team
            memberImage={`${process.env.REACT_APP_ROOT_API}/InstitucionUpea/Autoridad/${item.foto_autoridad}`}
            memberName={item.nombre_autoridad}
            memberDesignation={item.cargo_autoridad}
            memberSocial={{
              facebook: item.facebook_autoridad,
              twitter: item.twiter_autoridad,
              linkedin: item.celular_autoridad,
            }}
          />
        </Div>
      ))}
    </Slider>
  );
  }
}
