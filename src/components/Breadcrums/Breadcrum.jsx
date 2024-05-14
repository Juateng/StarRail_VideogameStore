import React from 'react'
import './Breadcrum.css'
import { assets } from '../../assets/assets';

const Breadcrum = (props) => {

    const{product} = props;

  return (
    <div className='breadcrum'>
        HOME <img src={assets.arrow_icon} alt="" />HOME <img src={assets.arrow_icon} alt="" />{product.plataforma} <img src={assets.arrow_icon} alt="" />{product.nombre}
    </div>
  )
}

export default Breadcrum