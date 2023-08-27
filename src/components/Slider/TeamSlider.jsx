import { Icon } from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Team from '../Team';
import { useGetInstitucionQuery } from "../../api/apiSlice";

export default function TeamSlider() {
  //Obtenemos datos de la API
  const { data, isLoading} = useGetInstitucionQuery();
  
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
