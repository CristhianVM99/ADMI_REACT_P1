import React, { useState } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import Testimonial from '../Testimonial';
import Div from '../Div';
import Spacing from '../Spacing';
import { useGetInstitucionQuery } from "../../api/apiSlice";
import { useSelector } from "react-redux";

export default function TestimonialSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const staticData = useSelector((state) => state.staticData.staticData);
  const { data, isLoading} = useGetInstitucionQuery();
  
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

  if (!isLoading) {
    const {
      Descripcion: {        
        autoridad,       
      },
    } = data; 

    const autoridades = [];

    autoridad.forEach(element => {
      autoridades.push(element)
    });

    autoridad.forEach(element => {
      autoridades.push(element)
    });

    return (
      <>
        <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
          <Spacing lg="130" md="80" />
          <Div className="cs-shape_3 cs-to_up">
            <img src="/images/shape_1.svg" alt="Shape" />
          </Div>
          <Div className="container">
            <Div className="cs-testimonial_slider">
              <Div className="cs-testimonial_slider_left">
                <Slider
                  asNavFor={nav1}
                  ref={slider2 => setNav2(slider2)}
                  slidesToShow={3}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  centerMode={true}
                  centerPadding="0px"
                  arrows={false}
                >
                  {autoridades.map((item, index) => (
                    <Div className="slider-nav_item" key={index}>
                      <Div className="cs-rotate_img">
                        <Div className="cs-rotate_img_in">
                          <img src={`${process.env.REACT_APP_ROOT_API}/InstitucionUpea/Autoridad/${item.foto_autoridad}`} alt="Thumb" />
                        </Div>
                      </Div>
                    </Div>
                  ))}
                </Slider>
              </Div>
              <Div className="cs-testimonial_slider_right">
                <Slider
                  asNavFor={nav2}
                  ref={slider1 => setNav1(slider1)}
                  prevArrow={<SlickArrowLeft />}
                  nextArrow={<SlickArrowRight />}
                  className="cs-arrow_style1"
                >
                  {autoridades.map((item, index) => (
                    <Div key={index}>
                      <Testimonial
                        testimonialText={
                          staticData.TestimonialSlider.txt_Description_Autoridades
                        }
                        avatarName={item.nombre_autoridad}
                        avatarDesignation={item.cargo_autoridad}
                        ratings={5}
                      />
                    </Div>
                  ))}
                </Slider>
              </Div>
            </Div>
          </Div>
          <Spacing lg="130" md="80" />
        </Div>
      </>
    );
  }
  return null;  
}
