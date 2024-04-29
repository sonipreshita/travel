import React, { Component } from 'react';
import Header from './Header';
import TopCities from './TopCities';
import HeadoutPicks from './Picks';
import Media from './Media';
import Footer from './footer';
import './Styles/main-home.css';

class MainHome extends Component {
  constructor(props){
    super(props);
  }
  
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="App">
        <Header
          backgroundImagesData={backgroundImagesData}
          history={this.props.history}
          navigationData={HeaderNavData}
        />
        <TopCities />
        <HeadoutPicks pickedData={pickedData} headline={'Headout Picks'} />
        <Media />
        <Footer />
      </div>
    );
  }
}

// Caraousel Images for Home

const backgroundImagesData = [
  {
    id: 1,
    url:
  "https://1.bp.blogspot.com/-WZmqAaGTWqE/VztF1Y5_wPI/AAAAAAAADMo/Xl9eK2IXsiY5CMYG9UoLsqh7ON7xRiSegCLcB/s1600/tips%2Bfor%2Bexploring%2Bindia-harstuff2.jpg"
  },
  {
    id: 2,
    url:
      'https://cdn-imgix-open.headout.com/desktop-flaps/about-01-01.jpg?auto=compress&fm=webp&h=501&crop=faces&fit=min'
  },
];

// Header Navigation Data

const HeaderNavData = [
  {
    id: 1,
    name: 'For City Tours'
  },
  {
    id: 2,
    name: 'Hotel Bookings'
  },
];

// Currently using this Data for Headout Top Picks

const pickedData = [
  {
    id: 1,
    currentPrice: 100,
    currency: 'RS',
    stars: 4.6,
    ratings: 681,
    city: 'Mumbai',
    description: 'Ajanta Caves',
    url:
      '	https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4b/26/bd/caption.jpg?w=600&h=600&s=1'
  },
  {
    id: 2,
    currentPrice: 200,
    currency: 'RS',
    stars: 4.6,
    ratings: 564,
    city: 'Mumbai',
    description: 'Jio Convention Center',
    url:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/7f/48/a4/informative-performance.jpg?w=600&h=600&s=1'
  },
  {
    id: 3,
    currentPrice: 50,
    currency: 'RS',
    city: 'Delhi',
    description: 'Taj Mahal',
    url:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/97/3f/eb/bibi-ka-mqbara.jpg?w=700&h=700&s=1'
  },
  {
    id: 4,
    currentPrice: 150,
    currency: 'RS',
    discount: 30,
    stars: 4.6,
    ratings: 2588,
    city: 'Delhi',
    description: 'Kutum Minar',
    url:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/63/f7/a8/photo5jpg.jpg?w=2200&h=-1&s=1'
  },
  {
    id: 6,
    currentPrice: 20,
    currency: 'RS',
    stars: 4.6,
    ratings: 437,
    city: 'Ahmedabad',
    description:
      'atal Bridge',
    url:
      '	https://dynamic-media-cdn.tripadvisor.com/media/ph…8e/eb/screenshot-2018-12-20.jpg?w=1100&h=1100&s=1'
  },
];

export default (MainHome);
