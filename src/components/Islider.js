import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../assets/styles/Islider.css'
const Islider = () => {
  return (
    <Container>
      <Row className='justify-content-center align-items-center'>
        <Col lg={8}>
          <Carousel>
            <Carousel.Item>
              <img 
                className="d-block w-100"
                src={require('../assets/styles/gold4.jpg')}
                alt="First slide"
              />
              <Carousel.Caption>
                {/* <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('../assets/styles/gold 1.jpg')}
                alt="Second slide"
              />
              <Carousel.Caption>
                {/* <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('../assets/styles/com.jpg')}
                alt="Third slide"
              />
              <Carousel.Caption>
                {/* <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Islider;
