import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React, { Component } from 'react'
import Navbar from './components/Navbar/navbar';
import News from './components/News/news';
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      progress: 0
    }
  }

  setProgress = (progress)=> {
    this.setState({ progress: progress });
  }

  render() {
    return (
      <>
        <Router>
          <div>
            <LoadingBar
              color="#f11946"
              progress={this.state.progress}
            />
          </div>
          <Navbar />
          <Routes>
            <Route path='/' element={<News setProgress={this.setProgress} pageSize={4} title="Top Headlines" />}></Route>
            <Route path='/general' element={<News setProgress={this.setProgress} pageSize={4} category="general" title="general" />}></Route>
            <Route path='/sports' element={<News setProgress={this.setProgress} pageSize={4} category="sports" title="sports" />}></Route>
            <Route path='/science' element={<News setProgress={this.setProgress} pageSize={4} category="science" title="science" />}></Route>
            <Route path='/business' element={<News setProgress={this.setProgress} pageSize={4} category="business" title="business" />}></Route>
            <Route path='/entertainment' element={<News setProgress={this.setProgress} pageSize={4} category="entertainment" title="entertainment" />}></Route>
            <Route path='/technology' element={<News setProgress={this.setProgress} pageSize={4} category="technology" title="technology" />}></Route>
            <Route path='/health' element={<News setProgress={this.setProgress} pageSize={4} category="health" title="health" />}></Route>
          </Routes>
        </Router>
      </>
    )
  }
}

