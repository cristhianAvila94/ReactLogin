import React from 'react'

import {mainViewContainer, header, userName, changePassword} from './css/MainView.module.css'

export default function MainView(props){
    return(
        <div className={mainViewContainer}>
            <div className={header}>
                <span className={userName}>{props.userInformation.currentUser}</span>
                {validateUserRol(props.userInformation.currentUserRole)}
            </div>

        </div>
    )
}

function validateUserRol(userRole){
    if(userRole === 'admin'){
        return(
            <div className={changePassword}>
                Cambiar Contraseña
            </div>
        )
    }
    return(<div></div>)
}   