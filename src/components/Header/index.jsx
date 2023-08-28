import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SocialWidget from '../Widget/SocialWidget';
import Newsletter from '../Widget/Newsletter';
import './header.scss';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import Div from '../Div';
import DropDown from './DropDown';

import { useGetInstitucionQuery } from "../../api/apiSlice";
import { useSelector } from "react-redux";

export default function Header({ variant }) {
  const staticData = useSelector((state) => state.staticData.staticData);
  const { data, isLoading } = useGetInstitucionQuery();

  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  const RUTAS = {
    RUTA_ALL : 'portfolio/TODOS',
    RUTA_SERVICIOS: 'portfolio/SERVICIOS',
    RUTA_OFERTAS_ACADEMICAS: 'portfolio/OFERTAS_ACADEMICAS',
    RUTA_PUBLICACIONES: 'portfolio/PUBLICACIONES',
    RUTA_GACETAS: 'portfolio/GACETAS',
    RUTA_EVENTOS: 'portfolio/EVENTOS',
    RUTA_VIDEOS: 'portfolio/VIDEOS'
  }

  if (!isLoading) {
    const {
      Descripcion: {        
        institucion_logo,        
      },
    } = data;
  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${
          variant ? variant : ''
        } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" to="/">
                  <img src={`${process.env.REACT_APP_ROOT_API}/InstitucionUpea/${institucion_logo}`} alt="Logo" />
                </Link>
              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? 'block' : 'none'}` }}
                  >
                    <li className="menu-item-has-children">
                      <NavLink to="/" onClick={() => setMobileToggle(false)}>
                        Nosotros
                      </NavLink>
                      <DropDown>
                        <ul>
                          <li>
                            <Link to="/" onClick={() => setMobileToggle(false)}>
                              Mision y Vision
                            </Link>
                          </li>
                          <li>
                            <Link to="/" onClick={() => setMobileToggle(false)}>
                              Contacto
                            </Link>
                          </li>
                          {/* <li>
                            <Link to="/" onClick={() => setMobileToggle(false)}>
                              Main Home
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="photography-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Photography Agency
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="creative-portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Creative Portfolio
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="digital-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Digital Agency
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="marketing-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Marketing Agency
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="showcase-portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Showcase Portfolio
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="case-study-showcase"
                              onClick={() => setMobileToggle(false)}
                            >
                              Case Study Showcase
                            </Link>
                          </li> */}
                        </ul>
                      </DropDown>
                    </li>
                    {/* <li>
                      <NavLink
                        to="about"
                        onClick={() => setMobileToggle(false)}
                      >
                        Convocatorias y Cursos
                      </NavLink>
                    </li> */}
                    <li className="menu-item-has-children">
                      <NavLink
                        to="service"
                        onClick={() => setMobileToggle(false)}
                      >
                        Academia
                      </NavLink>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              to="service"
                              onClick={() => setMobileToggle(false)}
                            >
                              Calendario Academico
                            </Link>                            
                          </li>
                          <li>
                            <Link
                              to="service"
                              onClick={() => setMobileToggle(false)}
                            >
                              Horario
                            </Link>                            
                          </li>
                          <li>
                            <Link
                              to="service"
                              onClick={() => setMobileToggle(false)}
                            >
                              Plan de Estudio
                            </Link>                            
                          </li>
                          <li>
                            <Link
                              to="service"
                              onClick={() => setMobileToggle(false)}
                            >
                              Reglamento Mod. de Graduacion
                            </Link>                            
                          </li>
                          {/* <li>
                            <Link
                              to="service"
                              onClick={() => setMobileToggle(false)}
                            >
                              Services
                            </Link>                            
                          </li>
                          <li>
                            <Link
                              to="/service/service-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Service Details
                            </Link>
                          </li> */}
                        </ul>
                      </DropDown>
                    </li>
                    <li className="menu-item-has-children">
                      <NavLink
                        to="portfolio"
                        onClick={() => setMobileToggle(false)}
                      >
                        Institucion
                      </NavLink>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              to="portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Convenios Institucionales
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Pasantias
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Trabajos Dirigidos
                            </Link>
                          </li>
                          {/* <li>
                            <Link
                              to="portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Portfolio
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="portfolio/portfolio-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Portfolio Details
                            </Link>
                          </li> */}
                        </ul>
                      </DropDown>
                    </li>
                    <li className="menu-item-has-children">
                      <NavLink to={RUTAS.RUTA_ALL} onClick={() => setMobileToggle(false)}>
                        Mas
                      </NavLink>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              to={RUTAS.RUTA_SERVICIOS}
                              onClick={() => setMobileToggle(false)}
                            >
                              Servicios
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={RUTAS.RUTA_OFERTAS_ACADEMICAS}
                              onClick={() => setMobileToggle(false)}
                            >
                              Ofertas Academicas
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={RUTAS.RUTA_PUBLICACIONES}
                              onClick={() => setMobileToggle(false)}
                            >
                              Publicaciones
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={RUTAS.RUTA_GACETAS}
                              onClick={() => setMobileToggle(false)}
                            >
                              Gacetas
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={RUTAS.RUTA_EVENTOS}
                              onClick={() => setMobileToggle(false)}
                            >
                              Eventos
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={RUTAS.RUTA_VIDEOS}
                              onClick={() => setMobileToggle(false)}
                            >
                              Videos
                            </Link>
                          </li>
                          {/* <li>
                            <Link
                              to="blog/blog-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Blog Details
                            </Link>
                          </li> */}
                        </ul>
                      </DropDown>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="/" onClick={() => setMobileToggle(false)}>
                        Kardex
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              to="/contact"
                              onClick={() => setMobileToggle(false)}
                            >
                              Inscripciones
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/contact"
                              onClick={() => setMobileToggle(false)}
                            >
                              Campus Virtual
                            </Link>
                          </li>
                          {/* <li>
                            <Link
                              to="/contact"
                              onClick={() => setMobileToggle(false)}
                            >
                              Contact
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/team"
                              onClick={() => setMobileToggle(false)}
                            >
                              Team
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/team/team-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Team Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/case-study/case-study-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Case Study Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/faq"
                              onClick={() => setMobileToggle(false)}
                            >
                              FAQ
                            </Link>
                          </li> */}
                        </ul>
                      </DropDown>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="/" onClick={() => setMobileToggle(false)}>
                        Biblioteca
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              to="/contact"
                              onClick={() => setMobileToggle(false)}
                            >
                              Biblioteca Virtual
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/contact"
                              onClick={() => setMobileToggle(false)}
                            >
                              Biblioteca Upea
                            </Link>
                          </li>                          
                          <li>
                            <Link
                              to="/contact"
                              onClick={() => setMobileToggle(false)}
                            >
                              Repositorio
                            </Link>
                          </li>                          
                        </ul>
                      </DropDown>
                    </li>
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs-toggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>
              {/* <Div className="cs-main_header_right">
                <Div className="cs-toolbox">
                  <span
                    className="cs-icon_btn"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </Div>
              </Div> */}
            </Div>
          </Div>
        </Div>
      </header>

      <Div
        className={
          sideHeaderToggle ? 'cs-side_header active' : 'cs-side_header'
        }
      >
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape" />
          <Link className="cs-site_branding" to="/">
            <img src="/images/footer_logo.svg" alt="Logo" />
          </Link>
          <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
              Do you have a project in your <br /> mind? Keep connect us.
            </h2>
          </Div>
          <Div className="cs-side_header_box">
            <ContactInfoWidget title="Contact Us" withIcon />
          </Div>
          <Div className="cs-side_header_box">
            <Newsletter
              title="Subscribe"
              subtitle="At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit."
              placeholder="example@gmail.com"
            />
          </Div>
          <Div className="cs-side_header_box">
            <SocialWidget />
          </Div>
        </Div>
      </Div>
    </>
  );
  }

  return null;
}
