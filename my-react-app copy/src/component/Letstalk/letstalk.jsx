import React from 'react';



const letstalk = () => {
  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Us',
      details: ['123 Smart Street', 'Tech District, CA 94107']
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: ['+1 (555) 123-4567', 'Mon-Fri: 8am-6pm']
    },
    {
      icon: '✉️',
      title: 'Email Us',
      details: ['hello@smartcafeteria.com', 'We reply within 24 hours']
    }
  ];

  const handleContactClick = () => {
    console.log('Contact button clicked');
  };

  return (
    <section className="contact-section">
      <div className="contact-content">
        <h1 className="contact-heading">
          Not sure which meal plan works for you? Let's talk.
        </h1>
        <p className="contact-subheading">
          Our nutrition experts will help you find the perfect meal plan 
          tailored to your dietary needs and preferences.
        </p>
        <button className="contact-button" onClick={handleContactClick}>
          Get in Touch
        </button>

        <div className="contact-info">
          {contactInfo.map((info, index) => (
            <div key={index} className="info-card">
              <div className="info-icon">{info.icon}</div>
              <h3 className="info-title">{info.title}</h3>
              <p className="info-detail">
                {info.details.map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    {idx < info.details.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          padding: 40px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          width: 100vw;
          margin: 0;
          overflow-x: hidden;
        }

        .contact-content {
          text-align: center;
          width: 100%;
          padding: 0 5vw;
        }

        .contact-heading {
          font-size: 2rem;
          font-weight: 500;
          margin-bottom: 10px;
          color: #2c3e50;
        }

        .contact-subheading {
          font-size: 1.1rem;
          font-weight: 400;
          margin-bottom: 25px;
          color: #6c757d;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-button {
          background-color: #afeed0ff;
          color: black;
          padding: 12px 30px;
          font-size: 1rem;
          font-weight: 500;
          border: none;
          border-radius: 6px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(34, 230, 119, 0.2);
          cursor: pointer;
        }

        .contact-button:hover {
          background-color: #198754;
          color: white;
          transform: translateY(-2px);
        }

        .contact-info {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 40px;
          gap: 25px;
        }

        .info-card {
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
          width: 250px;
          transition: transform 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-4px);
        }

        /* ✅ Changed icon color here */
        .info-icon {
          font-size: 2rem;
          margin-bottom: 10px;
          color: #198754ff;
        }

        .info-title {
          font-weight: 600;
          margin-bottom: 10px;
          color: #2c3e50;
          font-size: 1.2rem;
        }

        .info-detail {
          color: #6c757d;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .contact-heading {
            font-size: 1.7rem;
          }
          .contact-subheading {
            font-size: 1rem;
          }
          .contact-info {
            flex-direction: column;
            gap: 20px;
          }
          .info-card {
            width: 90%;
            max-width: 350px;
          }
        }
      `}</style>
    </section>
  );
};

export default letstalk;