import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carousel.css"; // ✅ Import CSS file
import banner1 from "../../assets/images/img1.jpg";
import banner2 from "../../assets/images/img2.jpg";
import banner3 from "../../assets/images/pizza.jpg";

const CustomCarousel = () => {
  return (
    <Carousel fade interval={2000} className="custom-carousel">

      {/* Slide 1 */}
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={banner1}
          alt="Healthy Meals"
        />
        <Carousel.Caption className="caption-animate">
          <h2>Healthy. Fresh. Fast.</h2>
          <p>Enjoy nutritious meals at your fingertips.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={banner2}
          alt="Smart Cafeteria"
        />
        <Carousel.Caption className="caption-animate">
          <h2>Welcome to Smart Cafeteria</h2>
          <p>Your smarter way to dine and serve.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={banner3}
          alt="Smart Technology"
        />
        <Carousel.Caption className="caption-animate">
          <h2>Smart Technology</h2>
          <p>Contactless orders and real-time menu updates.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
};

export default CustomCarousel;
