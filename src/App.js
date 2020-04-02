//https://www.youtube.com/watch?v=qgRoBaqhdZc&list=PLdk2EmelRVLpHD5gY8XWXsIIvqXHBwoyI&index=4
//App to authenticate the users with the help of firebase
//information needed for login: Email and Password
//Authenticated users then can be viewed from firebase console->project name-> Authentication
import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Example1 from './learning-json/Example1';
import Example2 from './learning-json/Example2';
import Example3 from './learning-json/Example3';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import fire from './config/fire';
class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      user:null,
    }
    this.authListener =this.authListener.bind(this);

  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) =>{
      if(user){
        this.setState({user});
      }
      else{
        this.setState({user: null});
      }
    })

  }
  render() {
    return (
      // <Router>
      //   <div className="App">
      //     <div id="page-body">

      //       <Route path="/" component={Example1} exact />
            
      //       <Route path="/example2" component={Example2} />

      //       <Route path="/example3" component={Example3}  />
      //       <Route path="/login" component={Login}  />
      //     </div>
      //   </div>
      // </Router>


      // <div className="App">
      //   <Login/>
      // </div>
      <div>
      {this.state.user ? (<Dashboard />) : (<Login />)}
      </div>
    );
  }
}

export default App;