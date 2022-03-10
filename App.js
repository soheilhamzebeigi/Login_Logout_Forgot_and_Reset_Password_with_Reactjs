import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import '../node_modules/bootstrap/dist/css/bootstrap.main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import 'bootstrap.min.css';

import './App.css';
import Home from './components/home.component';
import Nav from './components/nav.component';
import Login from './components/login.component';
import Register from './components/register.component';
import axios from 'axios';
import { Forgot } from './components/forgot.component';
import { Reset } from './components/reset.component';


export default class App extends Component {

  state = {} ; 

  componentDidMount = () =>  {
    axios.get('user').then(
        res => {
          this.setUser(res.data);
        },
        err => {
            console.log(err)
        }
    )
};

  setUser = user => {
    this.setState({
      user: user
  });
  }

  render () {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav user={this.state.user} setUser={this.setUser} />

        <div className='auth-wrapper'>
          <div className='auth-inner'>
            <Routes>
            {/* <Route path="/" component={Home} /> */}

              <Route exact path='/welcome' element={() => <Home user={this.state.user}  />} />
              <Route exact path='/login' element={() => <Login setUser={this.setUser} />} />
              <Route exact path='/register' element={<Register/>} />
              <Route exact path='/forgot' element={<Forgot/>}  />
              <Route exact path='/reset/:id' element={<Reset/>}  />

            </Routes>
            {/* <Home/> */}

          </div>
        </div>

    </div>
    </BrowserRouter>
  );
}
}

