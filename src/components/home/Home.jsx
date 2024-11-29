import React, { Component } from 'react';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from '../../containers';
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Blog />
        <Footer />
      </div>
    );
  }
}

export default Home;

