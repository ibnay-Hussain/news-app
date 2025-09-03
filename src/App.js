import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar/navbar';
import News from './components/News/news';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <News />
      </>
    )
  }
}

