import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login/Container/Login';
import MainView from './Main/Components/MainView';

class App extends Component {

  constructor(){
    super()
    this.state={
      currentUser: null,
      currentUserRole: null,
    }
    this.setCurrentUser= this.setCurrentUser.bind(this)
  }

  render (){
    if(!this.state.currentUser){
      return(
        <div className="App">
          <Login setCurrentUser={this.setCurrentUser}/>
        </div>
      )
    }else{
      return <MainView userInformation={this.state}/>
    }
  };

  setCurrentUser(user){
      this.setState({
        currentUser: user,
        currentUserRole: this.getRoleByUser(user)
      })
  }

  getRoleByUser(user){
    if(user=== 'admin'){
      return 'admin'
    }else{
      return 'client'
    }
  }
}

export default App;
