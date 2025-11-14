import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomePage.css"; 


const HomePage = () => {
  const slides = [
    
    {
      image: '/images/11.jpg',
      link: "https://facebook.com/PeriyarScreen"
    },
    {
      image: '/images/8.png',
     // headline: "Periyar Screens Youtube",
      link: "https://youtube.com/@periyarscreen?si=rql_Fu40l8-ghKCa"
    },
    {
      image: '/images/3.jpg',
    //  headline: "Instagram",
      link: "https://www.instagram.com/periyarscreen?igsh=MW5xNWtmenVrdzNwaw=="
    },
    {
      image: '/images/7.png',
    //  headline: "Kaattaaru.",
      link: "https://periyarbooks.com/collections/kaattaaru"
    }
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };

  return (
    <div className="home-container">
      <div className="home-carousel">
        <Slider {...carouselSettings}>
          {slides.map((slide, idx) => (
            <div key={idx} className="carousel-slide">
              <img src={slide.image} alt={slide.headline} className="carousel-image" />
              <div className="carousel-caption">
                <h2>{slide.headline}</h2>
                <p>{slide.excerpt}</p>
                {slide.link.startsWith('http') ? (
                  <a className="carousel-btn" href={slide.link} target="_blank" rel="noopener noreferrer">Go</a>
                ) : (
                  <Link className="carousel-btn" to={slide.link}>Go</Link>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>

    </div>
  );
};

export default HomePage;
