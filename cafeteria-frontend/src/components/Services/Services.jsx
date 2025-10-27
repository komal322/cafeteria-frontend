import React from "react";
import {
  Clock,
  LayoutDashboard,
  Utensils,
  ShieldCheck,
  CalendarDays,
  Store,
} from "lucide-react";

// Import images
import orderImage from "../../assets/images/order.jpg";
import cafeteriaImage from "../../assets/images/cafeteria.jpg";
import eventsImage from "../../assets/images/events.jpg";

// Import CSS
import "./Services.css";

const Services = () => {
  const servicesData = [
    {
      title: "Streamline Office Cafeteria Management with SaaS",
      subtitle: "Contactless Ordering",
      image: orderImage,
      points: [
        {
          icon: <Clock size={48} />,
          text: "Our platform enables real-time visibility of operations, supports robust inventory management, and ensures smooth, automated billing.",
        },
        {
          icon: <LayoutDashboard size={48} />,
          text: "A digital administrative dashboard enables oversight of feedback, compliance records, and cafeteria checklist activities.",
        },
      ],
    },
    {
      title: "Cafeteria Managed Services",
      subtitle: "Smart Menu & Delivery",
      image: cafeteriaImage,
      points: [
        {
          icon: <Utensils size={48} />,
          text: "A full range of services spanning menu creation, food supply, and technology-driven cafeteria experiences.",
        },
        {
          icon: <ShieldCheck size={48} />,
          text: "An extensive supplier base is consistently evaluated by HSEQ specialists to ensure standards.",
        },
      ],
    },
    {
      title: "Events, Gifting, Pantry Services and More",
      subtitle: "Exciting Pop-up Experiences",
      image: eventsImage,
      points: [
        {
          icon: <CalendarDays size={48} />,
          text: "Coordinating exclusive events, celebrations, or services tailored for VIP clientele.",
        },
        {
          icon: <Store size={48} />,
          text: "Interactive pop-up kiosks to introduce novelty and variety for employees.",
        },
      ],
    },
  ];

  return (
    <div className="container-fluid services-container">
      <h2 className="services-heading">Our Services Keep Things Cooking Well</h2>

      {servicesData.map((service, index) => (
        <div className="row service-row" key={index}>
          {/* Left Image */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <div className="service-image-wrapper">
              <svg viewBox="0 0 300 300" style={{ width: "100%", height: "300px", display: "block" }}>
                <defs>
                  <clipPath id={`waveClip${index}`}>
                    <path d="M0,30 Q75,0 150,30 T300,30 V300 H0 Z" />
                  </clipPath>
                </defs>
                <rect width="100%" height="100%" fill="black" />
                <image
                  href={service.image}
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath={`url(#waveClip${index})`}
                />
              </svg>
            </div>
            <p className="service-subtitle">{service.subtitle}</p>
          </div>

          {/* Right Text */}
          <div className="col-md-8">
            <h4 className="service-title">{service.title}</h4>
            <div className="service-points">
              {service.points.map((point, i) => (
                <div className="service-point" key={i}>
                  {point.icon}
                  <p>{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="text-center">
        <button className="get-in-touch-btn">Get in Touch</button>
      </div>
    </div>
  );
};

export default Services;
