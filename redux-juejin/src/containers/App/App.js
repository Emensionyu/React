import React ,{ Component } from 'react'
import './App.css'
import { connect } from 'react-redux';
import Index from '../../components/Index/Index'
import {bindActionCreators } from 'redux'
import { registerActions} from '../../redux/action/users'
import Header from '../../components/Index/Header';


 class App extends 
Component{
    render(){
        return(
            <div className="App">
            <div className="App-header">
              <Header registerActions={this.props.registerActions}
              users={this.props.users}/>
            </div>
            <div className="App-body">
              <div className="welcome-view">
                <div className="category-nav">
                  1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd
                </div>
                <div className="main">
                  21adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd
                </div>
                <div className="sidebar">
                  31adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default connect(
    (state)=>{
        return {
            users:state.users
        }
    },
    (dispatch)=>{
        return{
            registerActions:bindActionCreators(registerActions,dispatch)
        }
            
        
    }

)(App);