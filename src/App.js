import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React, { Component } from 'react'
import Navbar from './components/Navbar/navbar';
import News from './components/News/news';

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
              <Route path='/' element={<News pageSize={4} category="general"/>}></Route>
              <Route path='/sports' element={<News pageSize={4} category="sports"/>}></Route>
              <Route path='/science' element={<News pageSize={4} category="science"/>}></Route>
              <Route path='/business' element={<News pageSize={4} category="business"/>}></Route>
              <Route path='/entertainment' element={<News pageSize={4} category="entertainment"/>}></Route>
              <Route path='/technology' element={<News pageSize={4} category="technology"/>}></Route>
              <Route path='/health' element={<News pageSize={4} category="health"/>}></Route>
          </Routes>
        </Router>
      </>
    )
  }
}

