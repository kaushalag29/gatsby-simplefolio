import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

const CustomNavbar = () => {

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const linkStyle = {float: "left", cursor: "pointer", border: "solid", padding: "5px"};

  return (
    <Container>
      <Navbar bg="primary" variant="dark" fixed="top">
        <Navbar.Brand style={{cursor: "default"}}>My Portfolio</Navbar.Brand>
          <Nav className="mr-auto">
            <Container>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <Link to="hero" smooth duration={1000} style={linkStyle}>Home</Link>
              </Fade>
            </Container>
            <Container>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <Link to="about" smooth duration={1000} style={linkStyle}>About</Link>
              </Fade>
            </Container>
            <Container>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <Link to="projects" smooth duration={1000} style={linkStyle}>Projects</Link>
              </Fade>
            </Container>
            <Container>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <Link to="contact" smooth duration={1000} style={linkStyle}>Contact</Link>
              </Fade>
            </Container>
            <Container>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <Link to="footer" smooth duration={1000} style={linkStyle}>SocialProfiles</Link>
              </Fade>
            </Container>
          </Nav>
      </Navbar>
    </Container>
  );
};

export default CustomNavbar;
