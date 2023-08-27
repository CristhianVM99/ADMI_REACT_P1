import React, { useEffect } from "react";
import Loading from '../Loadings'
import Card from "../Card";
import FunFact from "../FunFact";
import Hero from "../Hero";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import Cta from "../Cta";
import LogoList from "../LogoList";
import MovingText from "../MovingText";
import PortfolioSlider from "../Slider/PortfolioSlider";
import PostSlider from "../Slider/PostSlider";
import TestimonialSlider from "../Slider/TestimonialSlider";
import TeamSlider from "../Slider/TeamSlider";
import VideoModal from "../VideoModal";
import TimelineSlider from "../Slider/TimelineSlider";
import { pageTitle } from "../../helper";
import { useGetInstitucionQuery } from "../../api/apiSlice";
import { useSelector } from "react-redux";

export default function Home() {
  pageTitle("Home");
  const staticData = useSelector((state) => state.staticData.staticData);
  const { data, isLoading} = useGetInstitucionQuery();
  // const {data:convocatorias, isLoading:lg_convocatorias} = useGetConvocatoriasQuery();
  // console.log("conv",convocatorias)

  const TIPOS = {    
    CONVOCATORIAS: "CONVOCATORIAS",
    CURSOS: "CURSOS",
  };

  // Hero Social Links
  const heroSocialLinks = [
    {
      name: "Behance",
      links: "/",
    },
    {
      name: "Twitter",
      links: "/",
    },
  ];

  // FunFact Data
  const funfaceData = [
    {
      title: "Global Happy Clients",
      factNumber: "40K",
    },
    {
      title: "Project Completed",
      factNumber: "50K",
    },
    {
      title: "Team Members",
      factNumber: "245",
    },
    {
      title: "Digital products",
      factNumber: "550",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) return <Loading />;

  if (!isLoading) {
    const {
      Descripcion: {        
        institucion_nombre,
        institucion_iniciales,      
        institucion_link_video_vision,  
      },
    } = data;
    return (
      <>
        {/* Start Hero Section */}
        <Hero
          title={institucion_nombre}
          subtitle={staticData.Index.txt_Banner}
          btnText={staticData.Index.txt_Btn}
          btnLink="/contact"
          scrollDownId="#service"
          socialLinksHeading={staticData.Index.txt_Redes}
          heroSocialLinks={heroSocialLinks}
          bgImageUrl="/images/hero_bg.jpeg"
        />
        {/* End Hero Section */}        

        {/* Start FunFact Section */}
        <div className="container">
          <FunFact
            variant="cs-type1"
            title={staticData.Index.txt_Title_Links_Externos}
            subtitle={staticData.Index.txt_Description_Links_Externos+institucion_nombre}
            data={funfaceData}
          />
        </div>
        {/* End FunFact Section */}

        {/* Start Service Section */}
        <Spacing lg="150" md="80" />
        <Div id="service">
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="Services we can help you with"
                  subtitle="What Can We Do"
                  btnText="See All Services"
                  btnLink="/service"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-xl-8">
                <Div className="row">
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="UI/UX design"
                      link="/service/service-details"
                      src="/images/service_1.jpeg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="React.js Development"
                      link="/service/service-details"
                      src="/images/service_2.jpeg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Digital Marketing"
                      link="/service/service-details"
                      src="/images/service_3.jpeg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Technology"
                      link="/service/service-details"
                      src="/images/service_4.jpeg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
        {/* End Service Section */}        

        {/* Start Convocatorias Section */}
        <Spacing lg="150" md="50" />
        <Div>
          <Div className="container">
            <SectionHeading
              title={staticData.Index.txt_Title_Convocatorias}
              subtitle={institucion_iniciales}
              variant="cs-style1 text-center"
            />
            <Spacing lg="90" md="45" />
          </Div>
          <PortfolioSlider tipo={TIPOS.CONVOCATORIAS}/>
        </Div>
        {/* End Convocatorias Section */}

        {/* Start Cursos Section */}
        <Spacing lg="150" md="50" />
        <Div>
          <Div className="container">
            <SectionHeading
              title={staticData.Index.txt_Title_Cursos}
              subtitle={institucion_iniciales}
              variant="cs-style1 text-center"
            />
            <Spacing lg="90" md="45" />
          </Div>
          <PortfolioSlider tipo={TIPOS.CURSOS}/>
        </Div>
        {/* End Cursos Section */}

        {/* Start Awards Section */}
        <Spacing lg="150" md="80" />
        <Div className="cs-shape_wrap_2">
          <Div className="cs-shape_2">
            <Div />
          </Div>
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title='title'
                  subtitle="Our Awards"
                  variant="cs-style1"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-xl-7 offset-xl-1">
                <TimelineSlider />
              </Div>
            </Div>
          </Div>
        </Div>
        {/* End Awards Section */}

        {/* Start Video Block Section */}
        <Spacing lg="130" md="70" />
        <Div className="container">
          <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
            {staticData.Index.txt_Title_Video}
          </h2>
          <Spacing lg="70" md="70" />
          <VideoModal
            videoSrc={institucion_link_video_vision}
            bgUrl="/images/video_bg.jpeg"
          />
        </Div>
        {/* End Video Block Section */}      

        {/* Start Autoridades Section */}
        <Spacing lg="145" md="80" />
        <Div className="container">
          <SectionHeading
            title={staticData.Index.txt_Title_Autoridades}
            subtitle={institucion_iniciales}
            variant="cs-style1"
          />
          <Spacing lg="85" md="45" />
          <TeamSlider />
        </Div>
        <Spacing lg="150" md="80" />
        {/* End Autoridades Section */}  

        {/* Start Autoridades Section */}
        <TestimonialSlider />
        {/* End Autoridades Section */}

        {/* Start Convocatorias Section */}
        <Spacing lg="150" md="80" />
        <Div className="cs-shape_wrap_4">
          <Div className="cs-shape_4"></Div>
          <Div className="cs-shape_4"></Div>
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title={staticData.Index.txt_Title_Convocatorias}
                  subtitle={institucion_iniciales}
                  btnText={staticData.Index.txt_Title_Button_Convocatorias_Cursos}
                  btnLink="/blog"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-xl-7 offset-xl-1">
                <Div className="cs-half_of_full_width">
                  <PostSlider tipo={TIPOS.CONVOCATORIAS}/>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
        {/* End Convocatorias Section */}

        {/* Start Cursos Section */}
        <Spacing lg="150" md="80" />
        <Div className="cs-shape_wrap_4">
          <Div className="cs-shape_4"></Div>
          <Div className="cs-shape_4"></Div>
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title={staticData.Index.txt_Title_Cursos}
                  subtitle={institucion_iniciales}
                  btnText={staticData.Index.txt_Title_Button_Convocatorias_Cursos}
                  btnLink="/blog"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-xl-7 offset-xl-1">
                <Div className="cs-half_of_full_width">
                  <PostSlider tipo={TIPOS.CURSOS}/>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
        {/* End Cursos Section */}

        {/* Start MovingText Section */}
        <Spacing lg="125" md="70" />
        <MovingText text={institucion_nombre} />
        <Spacing lg="105" md="70" />
        {/* End MovingText Section */}

        {/* Start LogoList Section */}
        <Div className="container">
          <LogoList />
        </Div>
        <Spacing lg="150" md="80" />
        {/* End LogoList Section */}

        {/* Start CTA Section */}
        <Div className="container">
          <Cta
            title="Let’s disscuse make <br />something <i>cool</i> together"
            btnText="Apply For Meeting"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
        {/* End CTA Section */}
      </>
    );
  }
  return null;
}
