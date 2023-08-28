import React from 'react'
import { Icon } from '@iconify/react';
import { useGetInstitucionQuery } from "../../api/apiSlice";

export default function ContactInfoWidget({withIcon, title}) {

  const { data, isLoading} = useGetInstitucionQuery();

  if (!isLoading) {
    const {
      Descripcion: {                
        institucion_celular1,
        institucion_correo1,
        institucion_direccion,        
      },
    } = data;

    return (
      <>
        {title && <h2 className="cs-widget_title">{title}</h2>}
        <ul className="cs-menu_widget cs-style1 cs-mp0">
          <li>
            {withIcon?<span className='cs-accent_color'><Icon icon="material-symbols:add-call-rounded" /></span>:''}
            +591 { institucion_celular1 }
          </li>
          <li>
            {withIcon?<span className='cs-accent_color'><Icon icon="mdi:envelope" /></span>:''}
            { institucion_correo1 }
          </li>
          <li>
            {withIcon?<span className='cs-accent_color'><Icon icon="mdi:map-marker" /></span>:''}
            { institucion_direccion }
          </li>
        </ul>
      </>
    )
  }
  return null;
  
}
