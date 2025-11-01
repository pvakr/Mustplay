import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from './Navigation';
import Footer from './Footer';
import StickyFooter from './StickyFooter';
import './Game.css';
import MT_Banner_0 from '../assets/images/MT_Banner_0.png';
import MT_Banner_1 from '../assets/images/MT_Banner_1.png';
import MT_Banner_2 from '../assets/images/MT_Banner_2.png';
import MT_Banner_3 from '../assets/images/MT_Banner_3.png';
import MT_Banner_4 from '../assets/images/MT_Banner_4.png';
import MT_Banner_5 from '../assets/images/MT_Banner_5.png';

const Game = () => {
  const gameImages = [
    MT_Banner_0,
    MT_Banner_1,
    MT_Banner_2,
    MT_Banner_3,
    MT_Banner_4,
    MT_Banner_5
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-900 to-purple-950 px-6 py-4">
      <Navigation />
      <Container className="py-5 flex-grow">
      <Row className="g-4">
        {gameImages.map((image, index) => (
          <Col key={index} md={6} className="game-card-col">
            <div className="game-card border-2 border-purple-300 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 hover:border-yellow-400">
              <img
                src={image}
                alt={`Game Banner ${index}`}
                className="img-fluid w-full h-100 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-2 bg-gradient-to-b from-purple-900/80 to-purple-950/90">
                {/* Removed game number text */}
              </div>
            </div>
          </Col>
        ))}
      </Row>
      </Container>
      <StickyFooter />
      <Footer />
    </div>
  );
};

export default Game;