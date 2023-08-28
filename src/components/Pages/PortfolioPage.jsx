import { Icon } from '@iconify/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Portfolio from '../Portfolio';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import { 
  useGetInstitucionQuery,
  useGetServiciosQuery,
  useGetOfertasAcademicasQuery,
  useGetPublicacionesQuery, 
  useGetGacetasQuery,
  useGetEventosQuery,
  useGetVideosQuery,
 } from "../../api/apiSlice";
import { useParams } from 'react-router-dom';


export default function PortfolioPage() {
  pageTitle('Portfolio');  
  const { data:institucion, isLoading:loading_institucion} = useGetInstitucionQuery();
  const { data:servicios, isLoading:loading_servicios} = useGetServiciosQuery();
  const { data:ofertas_academicas, isLoading:loading_ofertas_academicas} = useGetOfertasAcademicasQuery();
  const { data:publicaciones, isLoading:loading_publicaciones} = useGetPublicacionesQuery();
  const { data:gacetas, isLoading:loading_gacetas} = useGetGacetasQuery();
  const { data:eventos, isLoading:loading_eventos} = useGetEventosQuery();
  const { data:videos, isLoading:loading_videos} = useGetVideosQuery();  

  const { tipo } = useParams()
  const [active, setActive] = useState( tipo );  

  const TIPOS = {
    TODOS: 'TODOS',
    SERVICIOS : 'SERVICIOS',
    OFERTAS_ACADEMICAS : 'OFERTAS_ACADEMICAS',
    PUBLICACIONES : 'PUBLICACIONES',
    GACETAS : 'GACETAS',
    EVENTOS : 'EVENTOS',
    VIDEOS : 'VIDEOS',
  }

  const categoryMenu = [
    {
      title: 'Servicios',
      category: TIPOS.SERVICIOS,
    },
    {
      title: 'Ofertas Academicas',
      category: TIPOS.OFERTAS_ACADEMICAS,
    },
    {
      title: 'Publicaciones',
      category: TIPOS.PUBLICACIONES,
    },
    {
      title: 'Gacetas',
      category: TIPOS.GACETAS,
    },
    {
      title: 'Eventos',
      category: TIPOS.EVENTOS,
    },
    {
      title: 'Videos',
      category: TIPOS.VIDEOS,
    },
  ];    

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (
    !loading_institucion &&
    !loading_servicios &&
    !loading_ofertas_academicas &&
    !loading_publicaciones &&
    !loading_gacetas &&
    !loading_eventos &&
    !loading_videos
    ) {
    const {
      Descripcion: {        
        institucion_nombre,
        institucion_iniciales, 
        institucion_correo1,       
      },
    } = institucion;        

    return (
      <>
        <PageHeading
          title={tipo}
          bgSrc="images/portfolio_hero_bg.jpeg"
          pageLinkText={tipo}
        />
        <Spacing lg="145" md="80" />
        <Div className="container">
          <Div className="cs-portfolio_1_heading">
            <SectionHeading title={institucion_iniciales} subtitle={institucion_nombre} />
            <Div className="cs-filter_menu cs-style1">
              <ul className="cs-mp0 cs-center">
                <li className={active === TIPOS.TODOS ? 'active' : ''}>
                  <span onClick={() => setActive(TIPOS.TODOS)}>Todos</span>
                </li>
                {categoryMenu.map((item, index) => (
                  <li
                    className={active === item.category ? 'active' : ''}
                    key={index}
                  >
                    <span onClick={() => setActive(item.category)}>
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>
            </Div>
          </Div>
          <Spacing lg="90" md="45" />          

          {/*se puede usar para cambiar el ancho de los items en class ${ index === 3 || index === 6 ? 'col-lg-8' : 'col-lg-4'} */}

          <Div className="row">
            {servicios.map((item, index) => (
              <Div
                className={`${
                  active === TIPOS.TODOS
                    ? ''
                    : !(active === TIPOS.SERVICIOS)
                    ? 'd-none'
                    : ''
                } ${'col-lg-4'}`}
                key={index}
              >
                <Portfolio
                  title={item.serv_nombre}
                  subtitle={item.serv_nombre}
                  href='/'
                  src={`${process.env.REACT_APP_ROOT_API}/Carrera/Servicios/${item.serv_imagen}`}
                  variant="cs-style1 cs-type1"
                />
                <Spacing lg="25" md="25" />
              </Div>
            ))}

            {ofertas_academicas.map((item, index) => (
              <Div
                className={`${
                  active === TIPOS.TODOS
                    ? ''
                    : !(active === TIPOS.OFERTAS_ACADEMICAS)
                    ? 'd-none'
                    : ''
                } ${'col-lg-4'}`}
                key={index}
              >
                <Portfolio
                  title={item.ofertas_titulo}
                  subtitle={item.ofertas_inscripciones_ini}
                  href='/'
                  src={`${process.env.REACT_APP_ROOT_API}/Carrera/OfertasAcademicas/${item.ofertas_imagen}`}
                  variant="cs-style1 cs-type1"
                />
                <Spacing lg="25" md="25" />
              </Div>
            ))}

            {publicaciones.map((item, index) => (
              <Div
                className={`${
                  active === TIPOS.TODOS
                    ? ''
                    : !(active === TIPOS.PUBLICACIONES)
                    ? 'd-none'
                    : ''
                } ${'col-lg-4'}`}
                key={index}
              >
                <Portfolio
                  title={item.publicaciones_titulo}
                  subtitle={item.publicaciones}
                  href='/'
                  src={`${process.env.REACT_APP_ROOT_API}/Publicaciones/${item.publicaciones_imagen}`}
                  variant="cs-style1 cs-type1"
                />
                <Spacing lg="25" md="25" />
              </Div>
            ))}

            {gacetas.map((item, index) => (
              <Div
                className={`${
                  active === TIPOS.TODOS
                    ? ''
                    : !(active === TIPOS.GACETAS)
                    ? 'd-none'
                    : ''
                } ${'col-lg-4'}`}
                key={index}
              >
                <Portfolio
                  title={item.gaceta_titulo}
                  subtitle={item.gaceta_fecha}
                  href='/'
                  src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QBKRXhpZgAASUkqAAgAAAACAA4BAgAcAAAAJgAAABIBAwABAAAAAQAAAAAAAABCZWF1dGlmdWwgZmVsaW5lIGNhdCBhdCBob21l/+0AaFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAABMHAJQAAlBYXJvbkFtYXQcAngAHEJlYXV0aWZ1bCBmZWxpbmUgY2F0IGF0IGhvbWUcAm4AGEdldHR5IEltYWdlcy9pU3RvY2twaG90b//hBSBodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iPgoJPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KCQk8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOklwdGM0eG1wQ29yZT0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcENvcmUvMS4wL3htbG5zLyIgICB4bWxuczpHZXR0eUltYWdlc0dJRlQ9Imh0dHA6Ly94bXAuZ2V0dHlpbWFnZXMuY29tL2dpZnQvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwbHVzPSJodHRwOi8vbnMudXNlcGx1cy5vcmcvbGRmL3htcC8xLjAvIiAgeG1sbnM6aXB0Y0V4dD0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcEV4dC8yMDA4LTAyLTI5LyIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgcGhvdG9zaG9wOkNyZWRpdD0iR2V0dHkgSW1hZ2VzL2lTdG9ja3Bob3RvIiBHZXR0eUltYWdlc0dJRlQ6QXNzZXRJRD0iMTA0MTk4NzUzNiIgeG1wUmln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'
                  variant="cs-style1 cs-type1"
                />
                <Spacing lg="25" md="25" />
              </Div>
            ))}

            {eventos.map((item, index) => (
              <Div
                className={`${
                  active === TIPOS.TODOS
                    ? ''
                    : !(active === TIPOS.EVENTOS)
                    ? 'd-none'
                    : ''
                } ${'col-lg-4'}`}
                key={index}
              >
                <Portfolio
                  title={item.evento_titulo}
                  subtitle={item.evento_fecha}
                  href='/'
                  src={`${process.env.REACT_APP_ROOT_API}/Eventos/${item.evento_imagen}`}
                  variant="cs-style1 cs-type1"
                />
                <Spacing lg="25" md="25" />
              </Div>
            ))}

            {videos.map((item, index) => (
              <Div
                className={`${
                  active === TIPOS.TODOS
                    ? ''
                    : !(active === TIPOS.VIDEOS)
                    ? 'd-none'
                    : ''
                } ${'col-lg-4'}`}
                key={index}
              >
                <Portfolio
                  title={item.video_titulo}
                  subtitle='Video'
                  href='/'
                  src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QBKRXhpZgAASUkqAAgAAAACAA4BAgAcAAAAJgAAABIBAwABAAAAAQAAAAAAAABCZWF1dGlmdWwgZmVsaW5lIGNhdCBhdCBob21l/+0AaFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAABMHAJQAAlBYXJvbkFtYXQcAngAHEJlYXV0aWZ1bCBmZWxpbmUgY2F0IGF0IGhvbWUcAm4AGEdldHR5IEltYWdlcy9pU3RvY2twaG90b//hBSBodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iPgoJPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KCQk8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOklwdGM0eG1wQ29yZT0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcENvcmUvMS4wL3htbG5zLyIgICB4bWxuczpHZXR0eUltYWdlc0dJRlQ9Imh0dHA6Ly94bXAuZ2V0dHlpbWFnZXMuY29tL2dpZnQvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwbHVzPSJodHRwOi8vbnMudXNlcGx1cy5vcmcvbGRmL3htcC8xLjAvIiAgeG1sbnM6aXB0Y0V4dD0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcEV4dC8yMDA4LTAyLTI5LyIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgcGhvdG9zaG9wOkNyZWRpdD0iR2V0dHkgSW1hZ2VzL2lTdG9ja3Bob3RvIiBHZXR0eUltYWdlc0dJRlQ6QXNzZXRJRD0iMTA0MTk4NzUzNiIgeG1wUmln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'
                  variant="cs-style1 cs-type1"
                />
                <Spacing lg="25" md="25" />
              </Div>
            ))}
          </Div>                              
          
  
          {/* <Div className="text-center">
            {portfolioData.length <= itemShow ? (
              ''
            ) : (
              <>
                <Spacing lg="65" md="40" />
                <span
                  className="cs-text_btn"
                  onClick={() => setItemShow(itemShow + 3)}
                >
                  <span>Load More</span>
                  <Icon icon="bi:arrow-right" />
                </span>
              </>
            )}
          </Div> */}
        </Div>
        <Spacing lg="145" md="80" />
        <Cta
          title={institucion_correo1}
          bgSrc="/images/cta_bg_2.jpeg"
          variant="rounded-0"
        />
      </>
    );
  }  
  return null;
}
