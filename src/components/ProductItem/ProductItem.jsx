import React from 'react'
import './ProductItem.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const ProductItem = (props) => {
  return (
    <div className='prod-item'>
        <div className="prod-item-img-container">
            <Link to={`/product/${props.id}`}><img className='prod-item-image' src={props.image} alt="" /></Link>
        </div>
        <div className="prod-item-info">
            <div className="prod-item-name-rating">
                <p>{props.nombre}</p>
            </div>
            <br />
            <p className="prod-item-plat">{props.plataforma}</p>
            <br />
            <p className="prod-item-price">${props.precio}</p>
        </div>
    </div>
  )
}

export default ProductItem