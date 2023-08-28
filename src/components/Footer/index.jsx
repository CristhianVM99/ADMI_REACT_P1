import React from 'react'
import Div from '../Div'
import ContactInfoWidget from '../Widget/ContactInfoWidget'
import MenuWidget from '../Widget/MenuWidget'
import Newsletter from '../Widget/Newsletter'
import SocialWidget from '../Widget/SocialWidget'
import TextWidget from '../Widget/TextWidget'
import './footer.scss'
import { useGetInstitucionQuery } from "../../api/apiSlice";
import { useSelector } from "react-redux";

export default function Footer({copyrightText, logoSrc, logoAlt, text}) {
  const staticData = useSelector((state) => state.staticData.staticData);
  const { data, isLoading} = useGetInstitucionQuery();
  const copyrightLinks = [
    {
      title: 'Universidad Publica de El Alto',
      href: staticData.Index.txt_Link_Universidad_Publica_De_El_Alto,
    },
    {
      title: 'CristhianVM',
      href: staticData.Developer.CVM_link
    }
  ]
  
  const serviceMenu = [
    {
      title: 'Servicios',
      href: '/service/service-details'
    },
    {
      title: 'Ofertas Academicas',
      href: '/service/service-details'
    },
    {
      title: 'Publicaciones',
      href: '/service/service-details'
    },
    {
      title: 'Gacetas',
      href: '/service/service-details'
    },
    {
      title: 'Eventos',
      href: '/service/service-details'
    },
    {
      title: 'Videos',
      href: '/service/service-details'
    },
  ]

  if (!isLoading) {
    const {
      Descripcion: {        
        institucion_nombre,
        institucion_iniciales,       
        institucion_logo,  
      },
    } = data;

    return (
      <footer className="cs-fooer">
        <Div className="cs-fooer_main">
          <Div className="container">
            <Div className="row">
              <Div className="col-lg-3 col-sm-6">
                <Div className="cs-footer_item">
                  <TextWidget 
                    logoSrc={`${process.env.REACT_APP_ROOT_API}/InstitucionUpea/${institucion_logo}`} 
                    logoAlt='Logo'
                    text = {staticData.Index.txt_Description_Text_Footer}
                  />
                  <SocialWidget/>
                </Div>
              </Div>
              <Div className="col-lg-3 col-sm-6">
                <Div className="cs-footer_item">
                  <MenuWidget menuItems={serviceMenu} menuHeading='Servicios'/>
                </Div>
              </Div>
              <Div className="col-lg-3 col-sm-6">
                <Div className="cs-footer_item">
                  <ContactInfoWidget title='Contactanos'/>
                </Div>
              </Div>
              <Div className="col-lg-3 col-sm-6">
                <Div className="cs-footer_item">
                  <Newsletter 
                    title='Subscribe' 
                    subtitle='At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit.' 
                    placeholder='example@gmail.com'
                  />
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
        <Div className="container">
          <Div className="cs-bottom_footer">
            <Div className="cs-bottom_footer_left">
              <Div className="cs-copyright">Copyright © 2023 {institucion_nombre.toUpperCase()}</Div>
            </Div>
            <Div className="cs-bottom_footer_right">
              <MenuWidget menuItems={copyrightLinks} variant=' cs-style2'/>
            </Div>
          </Div>
        </Div>
      </footer>
    )
  }
  return null;

  
}
