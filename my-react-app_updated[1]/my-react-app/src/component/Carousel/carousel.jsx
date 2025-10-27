import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import banner1 from "../../assets/images/img1.jpg";
import banner2 from "../../assets/images/img2.jpg";
import banner3 from "../../assets/images/pizza.jpg";




const carousel = () => {
  return (
    <Carousel fade interval={3000}>
     
  {/* Slide 2 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="Healthy Meals"
        style={{ height: "550px", objectFit: "cover" , filter :"blur(4px)" , color : "yellow" }}
        />
        <Carousel.Caption>
          <h2 className="fw-bold ">Healthy. Fresh. Fast.</h2>
          <p className="">Enjoy nutritious meals at your fingertips.</p>
        </Carousel.Caption>
      </Carousel.Item>





      {/* Slide 1 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Smart Cafeteria"
          style={{ height: "550px", objectFit: "cover", filter :"blur(4px)" , color : "yellow"}}
        />
        <Carousel.Caption>
          <h2 className="fw-bold" >Welcome to Smart Cafeteria</h2>
          <p className="">Your smarter way to dine and serve.</p>
        </Carousel.Caption>
      </Carousel.Item>

      

      {/* Slide 3 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Smart Technology"
          style={{ height: "550px", objectFit: "cover" , filter :"blur(4px)",  }}
        />
        <Carousel.Caption>
          <h2 className="fw-bold text-light">Smart Technology</h2>
          <p className="text-light">Contactless orders and real-time menu updates.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default carousel;








