import React from 'react'
import './ProductItem.css'
import { assets } from '../../assets/assets'

const ProductItem = ({id,nombre,plataforma,precio,image}) => {
  return (
    <div className='prod-item'>
        <div className="prod-item-img-container">
            <img className='food-item-image' src={image} alt="" />
        </div>
        <div className="prod-item-info">
            <div className="prod-item-name-rating">
                <p>{nombre}</p>
            </div>
            <br />
            <p className="prod-item-plat">{plataforma}</p>
            <br />
            <p className="prod-item-price">${precio}</p>
        </div>
    </div>
  )
}

export default ProductItem