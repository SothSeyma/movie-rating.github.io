import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


function Footer() {
  const modelImages = [
 
    'https://logos-world.net/wp-content/uploads/2020/11/Marvel-Studios-Symbol.png', //marvel
    'https://i.pinimg.com/474x/9a/f6/4a/9af64a1ab946516ca1a6e2ffdab58021--design-branding-logo-design.jpg',//dc
    'https://th.bing.com/th/id/R.79860dfb50ad5bd0c6dd6e0cccc71f78?rik=nXD23sT3gV5cHA&pid=ImgRaw&r=0', // universal
    'https://i.pinimg.com/564x/3f/d6/f9/3fd6f96e5f7ea6d1af18ba451df45e3d.jpg', //fox
    'https://i.pinimg.com/564x/75/9f/c8/759fc868de23cb190b3301c12205eca9.jpg', //sony
    'https://i.pinimg.com/564x/a1/71/d6/a171d64eaca9306b41d7916e97520e8c.jpg', //paramount
    
    // Add more model image URLs as needed
  ];
  const setting = {
    infinite: true,
    dots: false,
    infinite: true,
    speed: 10000,           // Adjust the speed (lower values mean faster)
    slidesToShow: 5,      // Number of slides to show at once
    slidesToScroll: 1,    // Number of slides to scroll at a time
    autoplay: true,
    autoplaySpeed: 1,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: '0',   // No padding for a closer look
  };
  return (
    <footer className="bg-black text-center py-4" style={{ overflow:'hidden', marginTop:'80px'}}>
      <div className="model-images">
      <Slider {...setting}>
        {modelImages.map((modelImage, index) => (
          <div key={index}>
            <img src={modelImage} alt={`Model ${index + 1}`}   style={{ width: '100px', height: '60px',  }}/>
          </div>
        ))}
      </Slider>
    </div>
      <Container>
        <Row>
          <Col>
            <div className="mb-3">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
                <FaFacebook size={30} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="me-3">
                <FaInstagram size={30} />
              </a>
              <a href="https://www.telegram.org" target="_blank" rel="noopener noreferrer">
                <FaTelegram size={30} />
              </a>
            </div>
            <div > 
              <p style={{ color: 'white', fontWeight: 'bold'}}>ITE WCT Project G19, RUPP, Cambodia <br />
              Email: contact@movierating.com <br />
              Phone: +1234567890 
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
