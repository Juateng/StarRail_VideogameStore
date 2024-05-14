import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Login")

  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input type="text" placeholder='Nombre' required/>}
                
                <input type="email" placeholder='Email' required/>
                <input type="password" placeholder='Password' required/>
            </div>
            <button>{currState==="Sign Up"?"Crear cuenta":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>Al continuar, esta aceptando lo terminos y condiciones.</p>
            </div>
            {currState==="Login"
            ?<p>Crear una nueva cuenta? <span onClick={()=>setCurrState("Sign Up")}>Click aquí</span></p>
            :<p>Ya tiene una cuenta? <span onClick={()=>setCurrState("Login")}>Login aquí</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopup