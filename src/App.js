import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import Profile from './Components/Profile/Profile';
import Info from './Components/Info/Info';

function App() {

  const user = {
    // login: 'Admin',
    // password: '12345678'
  }

  window.localStorage.setItem('admin', JSON.stringify(user))
  return (
    <BrowserRouter>
      <div className="App">
        <header className='header'>
          <Header />
        </header>
        <main className='main'>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={SignIn} />
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
