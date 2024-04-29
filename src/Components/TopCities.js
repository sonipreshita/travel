import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Left, Right } from './Arrows';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Styles/top-cities.css';

class TopCities extends Component {
  render() {
    return (
      <div>
        <div className="top-cities-wrapper">
          <h1>Top Cities</h1>
          <hr
            style={{
              backgroundColor: '#ffbb58',
              width: '75px',
              height: '2px',
              border: 'none',
              marginTop: '0px',
              marginLeft: '0px',
              marginBottom: '20px'
            }}
          />
          <div className="top-cities-carousel-wrap">
            <CitySlider />
          </div>
          <hr
            style={{
              height: '1px',
              color: '#e7e7e7',
              borderTop: 'none',
              borderLeft: 'none'
            }}
          />
        </div>
        <hr className="section-divide-hr" />
      </div>
    );
  }
}

class CitySlider extends React.Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      nextArrow: <Right />,
      prevArrow: <Left />
    };
    return (
      <Slider {...settings}>
        {topCitiesData &&
          topCitiesData.map(({ id, city, url, description, route }) => (
            <Link
              to={{ pathname: `/cities/${route}` }}
              key={id}
              className="link"
            >
              <CityCard city={city} url={url} description={description} />
            </Link>
          ))}
      </Slider>
    );
  }
}

class CityCard extends Component {
  render() {
    const url = `url(${this.props.url})`;
    return (
      <div className="city-card-wrapper">
        <div className="city-card">
          <div
            className="city-card-img"
            style={{
              backgroundImage: url
            }}
          />
          <div className="city-details">
            <div id="triangle" />
            <p>{this.props.city}</p>
            <div id="city-hidden">
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const topCitiesData = [
  {
    id: 1,
    city: 'Mumbai',
    route: 'mumbai',
    description: 'Aamchi Mumbai',
    url:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/40/ce/df/marine-drive-seen-as.jpg?w=1200&h=1200&s=1'
  },
  {
    id: 2,
    city: 'Ahmedabad',
    route: 'ahmedabad',
    description: "Rapid Development",
    url:
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/eb/b8/4d/lake-view.jpg?w=700&h=700&s=1"
  },
  {
    id: 3,
    city: 'Pune',
    route: 'pune',
    description: 'IT Hub',
    url:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/95/d3/de/photo4jpg.jpg?w=1200&h=1200&s=1'
  },
  {
    id: 4,
    city: 'Banglore',
    route: 'banglore',
    description: "IT Hub",
    url:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/e0/d9/9f/ub-city.jpg?w=500&h=400&s=1'
  },
  {
    id: 5,
    city: 'Indore',
    route: 'indore',
    description: 'cleanest City',
    url:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/3b/69/4e/patalpani-waterfall.jpg?w=1200&h=1200&s=1'
  },
  {
    id: 6,
    city: 'Delhi',
    route: 'delhi',
    description: 'Capitol of India',
    url:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/03/3f/fd/caption.jpg?w=1200&h=1200&s=1&cx=2294&cy=1952&chk=v1_c3b28b866491ff3722ce'
  },
  {
    id: 7,
    city: 'Udaipur',
    route: 'udaipur',
    description: 'City of Palace',
    url:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/d3/67/e4/sas-bahu.jpg?w=1200&h=1200&s=1'
  },
  {
    id: 8,
    city: 'Darjiling',
    route: 'darjiling',
    description: 'Discover the nature',
    url:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/f6/77/2b/queen-of-hills.jpg?w=400&h=300&s=1'
  },
  {
    id: 9,
    city: 'Gandhinagar',
    route: 'gandhinagar',
    description: 'The Green City',
    url:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/81/87/ed/exterior-view-of-the.jpg?w=400&h=300&s=1'
  },
];

export default TopCities;
