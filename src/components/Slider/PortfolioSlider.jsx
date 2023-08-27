import React from 'react'
import Portfolio from '../Portfolio'
import Div from '../Div'
import Slider from 'react-slick';
import { useGetConvocatoriasQuery, useGetCursosQuery } from "../../api/apiSlice";

export default function PortfolioSlider({ tipo }) {
  const { data: convocatorias, isLoading: loading_convoctorias} = useGetConvocatoriasQuery();  
  const { data: cursos, isLoading: loading_cursos} = useGetCursosQuery();  
  
  /** Slider Settings **/
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const TIPOS = {
    COMUNICADOS: "COMUNICADOS",
    AVISOS: "AVISOS",
    CONVOCATORIAS: "CONVOCATORIAS",
    CURSOS: "CURSOS",
    SEMINARIOS: "SEMINARIOS",
  };

  const IF_VIEW = {
    TIPO_CONVOCATORIAS: 'CONVOCATORIAS',
    TIPO_CURSOS: 'CURSOS',
  }

  if (!loading_convoctorias && tipo===IF_VIEW.TIPO_CONVOCATORIAS) {
        const filteredDataComunicados = convocatorias.filter((e) => e.tipo_conv_comun.tipo_conv_comun_titulo === TIPOS.COMUNICADOS);
        const lastComunicado = filteredDataComunicados[filteredDataComunicados.length - 1];
        
        const filteredDataConvocatorias = convocatorias.filter((e) => e.tipo_conv_comun.tipo_conv_comun_titulo === TIPOS.CONVOCATORIAS);
        const lastConvocatoria = filteredDataConvocatorias[filteredDataConvocatorias.length - 1];

        const filteredDataAvisos = convocatorias.filter((e) => e.tipo_conv_comun.tipo_conv_comun_titulo === TIPOS.AVISOS);
        const lastAviso = filteredDataAvisos[filteredDataAvisos.length - 1];

        const ConvocatoriasAndComunicadosAndAvisos = [
          lastComunicado,
          lastConvocatoria,
          lastAviso,
          lastComunicado,         
          lastConvocatoria,
          lastAviso,
        ]
                
    return (
      <Slider {...settings} className='cs-slider cs-style3 cs-gap-24'>
        {ConvocatoriasAndComunicadosAndAvisos.map((item, index)=> (
          <Div key={index}>
            <Portfolio 
              title={item.con_titulo} 
              subtitle={item.tipo_conv_comun.tipo_conv_comun_titulo}
              href='/portfolio/portfolio-details'
              src={`${process.env.REACT_APP_ROOT_API}/Convocatorias/${item.con_foto_portada}`}
            />
          </Div>
        ))}
      </Slider>
    )
  }
  if (!loading_cursos && tipo===IF_VIEW.TIPO_CURSOS) {    
    const filteredDataCursos = cursos.filter((e) => e.tipo_curso_otro.tipo_conv_curso_nombre === TIPOS.CURSOS);
    const lastCurso = filteredDataCursos[filteredDataCursos.length - 1];
    
    const filteredDataSeminarios = cursos.filter((e) => e.tipo_curso_otro.tipo_conv_curso_nombre === TIPOS.SEMINARIOS);
    const lastSeminario = filteredDataSeminarios[filteredDataSeminarios.length - 1];    

    const CursosAndSeminarios = [
      lastCurso,
      lastSeminario,
      lastCurso,
      lastSeminario
    ]
            
return (
  <Slider {...settings} className='cs-slider cs-style3 cs-gap-24'>
    {CursosAndSeminarios.map((item, index)=> (
      <Div key={index}>
        <Portfolio 
          title={item.det_titulo} 
          subtitle={item.tipo_curso_otro.tipo_conv_curso_nombre}
          href='/portfolio/portfolio-details'
          src={`${process.env.REACT_APP_ROOT_API}/Cursos/${item.det_img_portada}`}
        />
      </Div>
    ))}
  </Slider>
)
}
  return null;    
}
