import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header/Header.js';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn.js';
import Profile from './Components/Profile/Profile';
import Info from './Components/Info/Info';

function App() {

  const [activeUser, setActiveuser] = useState(false)

  const user = {
    login: 'Admin',
    password: '12345678',
    auth: false
  }

  if (!window.localStorage.getItem('admin')) {

    window.localStorage.setItem('admin', JSON.stringify(user))
  }

  return (
    <BrowserRouter>
      <div className="App">
        <header className='header'>
          <Header
            activeUser={activeUser}
            setActiveuser={setActiveuser}
          />
        </header>
        <main className='main'>
          <Route exact path='/' component={Home} />
          <Route path='/login' render={routeProps => <SignIn setActiveuser={setActiveuser} />} />
          <Route path='/profile' component={Profile} />
          <Route path='/info' component={Info} />
        </main>
        <footer className='footer'>

        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
