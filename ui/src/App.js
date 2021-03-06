import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

import './App.css';
import Users from './Components/Users';
import Auth from './Components/Auth';
import Register from './Components/Register';

const Home = props => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

class App extends Component {
  
  signOut = (event) => {
    event.preventDefault();
    localStorage.removeItem('jwt');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <NavLink className='menu-link' to='/' exact>
              Home
            </NavLink>

            <NavLink className='menu-link' to='/signin'>
              Sign In
            </NavLink>
            
            <NavLink className='menu-link' to='/register'>
              Register
            </NavLink>

            {localStorage.getItem('jwt') ? <NavLink className='menu-link' to= '/users'>
              Users
            </NavLink> : <div></div>
            }
          </nav>
          <main>
            <Route path='/' component={Home} exact></Route>
            <Route path='/signin' component={Auth} exact></Route>
            <Route path='/register' component={Register} exact></Route>
            <Route path='/users' component={Users} exact></Route>
            <button name='signout' onClick={this.signOut}>Sign Out</button>
          </main>
        </header>
      </div>
    );
  }
}
export default App;
