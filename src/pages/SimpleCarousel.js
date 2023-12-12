import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CSS/SimpleCarousel.css'

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const getRandomImage = () => {
    const randomId = Math.floor(Math.random() * 1000) + 1;
    return `https://picsum.photos/1400/400?random=${randomId}`;
  };

  const slides = [
    {
      image: getRandomImage(),
      text: 'Slide 1 Text',
      buttonText: 'Learn More',
    },
    {
      image: getRandomImage(),
      text: 'Slide 2 Text',
      buttonText: 'Explore',
    },
    {
      image: getRandomImage(),
      text: 'Slide 3 Text',
      buttonText: 'Get Started',
    },
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="carousel-slide">
          <img src={slide.image} alt={`Slide ${index + 1}`} />
          <div className="carousel-overlay">
            <h3 className='curp'>{slide.text}</h3>
            
            <button>{slide.buttonText}</button>
          </div>
        </div>
      ))}
    </Slider>
  );
};

// Custom arrow components
const NextArrow = (props) => {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick}>&rarr;</div>;
  };
  
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick}>&larr;</div>;
  };

export default ImageCarousel;
