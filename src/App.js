import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header/Header.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn.js';
import Profile from './Components/Profile/Profile';
import Info from './Components/Info/Info';
import Error from './Components/Error/Error';
import Footer from './Components/Footer/Footer';
import Table from './Components/Table/Table';

function App() {

  const [activeUser, setActiveuser] = useState(false)

  const userInfo = window.localStorage.getItem('admin')

  if (userInfo === null) {

    const user = {
      login: 'Admin',
      password: '12345678',
      auth: false
    }
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
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' render={() => <SignIn setActiveuser={setActiveuser} />} />
            <Route path='/profile' component={Profile} /> 
            <Route path='/table' component={Table} /> 
            <Route path='/info' component={Info} />
            <Route path='*' component={Error} />
          </Switch>
        </main>
        <footer className='footer'>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
