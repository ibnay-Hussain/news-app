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
              <Route path='/' element={<News pageSize={4} title="Top Headlines" />}></Route>
              <Route path='/general' element={<News pageSize={4} category="general" title="general" />}></Route>
              <Route path='/sports' element={<News pageSize={4} category="sports" title="sports" />}></Route>
              <Route path='/science' element={<News pageSize={4} category="science" title="science" />}></Route>
              <Route path='/business' element={<News pageSize={4} category="business" title="business" />}></Route>
              <Route path='/entertainment' element={<News pageSize={4} category="entertainment" title="entertainment" />}></Route>
              <Route path='/technology' element={<News pageSize={4} category="technology" title="technology" />}></Route>
              <Route path='/health' element={<News pageSize={4} category="health" title="health" />}></Route>
          </Routes>
        </Router>
      </>
    )
  }
}

