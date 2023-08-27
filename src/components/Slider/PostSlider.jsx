import React from 'react'
import Slider from "react-slick";
import Div from '../Div';
import Post from '../Post';
import { useGetConvocatoriasQuery, useGetCursosQuery } from "../../api/apiSlice";
import { format } from 'date-fns';

export default function PostSlider({tipo}) {
  const { data: convocatorias, isLoading: loading_convoctorias} = useGetConvocatoriasQuery();  
  const { data: cursos, isLoading: loading_cursos} = useGetCursosQuery();    

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
  
  /** Slider Settings **/
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  function convertirFecha(date){
    let fechaFormateada = ''
    const fechaOriginal = new Date(date);
    fechaFormateada = format(fechaOriginal, 'd MMM yyyy');
    return fechaFormateada
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
    <Slider {...settings} className='cs-gap-24'>
      {ConvocatoriasAndComunicadosAndAvisos.map((item,index)=>(
          <Div key={index}>
            <Post 
              url='url'
              src={`${process.env.REACT_APP_ROOT_API}/Convocatorias/${item.con_foto_portada}`}
              alt={item.con_titulo} 
              date={convertirFecha(item.con_fecha_inicio)}
              title={item.con_titulo}
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
      <Slider {...settings} className='cs-gap-24'>
        {CursosAndSeminarios.map((item,index)=>(
            <Div key={index}>
              <Post 
                url='url'
                src={`${process.env.REACT_APP_ROOT_API}/Cursos/${item.det_img_portada}`} 
                alt={item.det_titulo} 
                date={convertirFecha(item.det_fecha_ini)}
                title={item.det_titulo}
              />
            </Div>
          ))}
      </Slider>
      )
  }
}
