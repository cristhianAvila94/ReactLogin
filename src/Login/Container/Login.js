import React, {Component} from 'react'
import LoginView from '../Components/LoginView';

export default class Login extends Component{
    constructor(){
        super()
        this.state = {
            userName : '',
            password :  ''
        }
        this.setUserName= this.setUserName.bind(this)
        this.setPassword= this.setPassword.bind(this)
        this.login= this.login.bind(this)
    }

    render(){
        return (
        <LoginView
            setUserName={this.setUserName}
            setPassword={this.setPassword}
            login={this.login}
        />
        )
    }

    setUserName(userName){
        this.setState({userName})
    }

    setPassword(password){
        this.setState({password})
    }

    login(){
        this.props.setCurrentUser(this.state.userName)
    }
}