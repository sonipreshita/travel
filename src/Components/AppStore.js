import React, { Component } from 'react';
import { HeaderNav } from './Header';
import TopCities from './TopCities';
import Footer from './footer';

class AppStore extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div
        style={{
          textAlign: 'center'
        }}
      >
        <HeaderNav />
        <div style={{ paddingTop: '110px' }}>
        </div>
        <TopCities />
        <Footer />
      </div>
    );
  }
}

export default AppStore;
