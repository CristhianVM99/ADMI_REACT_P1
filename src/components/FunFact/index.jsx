import React from 'react'
import Div from '../Div'
import './funfact.scss'
import { useGetLinksIntExtAllQuery } from '../../api/apiSlice'

export default function FunFact({variant, title, subtitle}) {
  const { data, isLoading} = useGetLinksIntExtAllQuery();  

  const TIPOS = {        
    KARDEX: "KARDEX",
  };

  if (!isLoading) {    
    const Data_Links = data.filter((e)=> e.ei_tipo === TIPOS.KARDEX)    
    const links = Data_Links.map(item => {
      return {
        factNumber: item.ei_link,
        title: item.ei_nombre
      };
    })    
    return (
      <Div className={variant ? `cs-funfact_wrap ${variant}`: 'cs-funfact_wrap'}>
        <Div className="cs-funfact_shape"  style={{backgroundImage: 'url(./images/funfact_shape_bg.svg)'}} />
        <Div className="cs-funfact_left">
          <Div className="cs-funfact_heading">
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </Div>
        </Div>
        <Div className="cs-funfact_right">
          <Div className="cs-funfacts">
          {links.map((item, index) => (
            <Div className="cs-funfact cs-style1" key={index}>
              <Div className="cs-funfact_number cs-primary_font cs-semi_bold cs-primary_color"><a href={item.factNumber} target='_blank'>{item.title}</a></Div>
              <Div className="cs-funfact_text">
                <span className="cs-accent_color">+</span>              
              </Div>
            </Div>
            ))}
          </Div>
        </Div>
      </Div>
    )
  }
  return null;

  
}
