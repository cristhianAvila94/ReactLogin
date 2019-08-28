import React from 'react'

import {
    loginContainer,
    formContainer,
    titleImage,
    titleContainer,
    titleDescription,
    inputsContainer,
    loginButton,
    description,inputStyle
} from './css/LoginView.module.css'

import backgroundImage from '../../Resources/titleImage.PNG'

export default function LoginView(props){
    return(
        <div className={loginContainer}>
            <div className={formContainer}>
                <img className={titleImage} src={backgroundImage} />
                <div className={titleContainer}>
                    <span className={titleDescription}>
                        Ingreso
                    </span>    
                    <span className={titleDescription}>
                        Español
                    </span>    
                </div>
                <span className={description}>
                    Bienvenido, por favor ingresa tu cuenta de SmartControl
                </span>
                <div className={inputsContainer}>
                    <input className={inputStyle} type={'text'} placeholder={'Email'} onChange={(event)=>props.setUserName(event.currentTarget.value)}/>
                    <input className={inputStyle} type={'password'} placeholder={'Contraseña'} onChange={(event)=>props.setPassword(event.currentTarget.value)}/>
                </div>
                <button className={loginButton} onClick={props.login}>Ingreso</button>
            </div>
        </div>
    )
}  