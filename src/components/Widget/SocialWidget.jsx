import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import Div from '../Div';
import { useGetInstitucionQuery } from "../../api/apiSlice";

export default function SocialWidget() {

  const { data, isLoading} = useGetInstitucionQuery();

  if (!isLoading) {
    const {
      Descripcion: {        
        institucion_nombre,
        institucion_iniciales, 
        institucion_facebook,
        institucion_youtube,
        institucion_twitter,       
      },
    } = data;

    return (
      <Div className="cs-social_btns cs-style1">        
        <a href={institucion_twitter} target="_blank" className="cs-center">
          <Icon icon="fa6-brands:twitter" />               
        </a>
        <a href={institucion_youtube} target="_blank" className="cs-center">
          <Icon icon="fa6-brands:youtube" />              
        </a>
        <a href={institucion_facebook} target="_blank" className="cs-center">
          <Icon icon="fa6-brands:facebook" />
        </a>
      </Div>
    )
  }
  return null;

  
}
