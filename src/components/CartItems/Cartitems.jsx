import React, {useContext} from 'react'
import './CartItems.css'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'

const Cartitems = () => {
    const {cartItems, prod_list, removeFromCart} = useContext(StoreContext)
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Produto</p>
            <p>Nombre</p>
            <p>SKU</p>
            <p>Precio</p>
            <p>Cantidad</p>
            <p>Total</p>
            <p>Eliminar</p>
        </div>
        <hr />
        {prod_list.map((e)=>{
            if(cartItems[e._id]>0){
                return(
                <div>
                    <div className="cartitems-format cartitems-format-main">
                        <img src={e.image} alt="" className='cartitems-product-icon'/>
                        <p>{e.nombre}</p>
                        <p>{e.sku}</p>
                        <p>${e.precio}</p>
                        <button className='cartitems-cantidad'>{cartItems[e._id]}</button>
                        <p>${e.precio * cartItems[e._id]}</p>
                        <img className='cartitems-remove-icon' src={assets.cross_icon} onClick={()=>{removeFromCart()}} alt="" />
                    </div>
                    <hr />
                </div>
                )
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Total de la Compra</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${0}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Total</p>
                        <p>${0}</p>
                    </div>
                </div>
                <button>Proceder a Pagar</button>
            </div>
        </div>
    </div>
  )
}

export default Cartitems