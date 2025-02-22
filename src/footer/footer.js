import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs={12} sm={6} className="footer-links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/user">User</Link>
              </li>
            </ul>
          </Col>
          <Col sm={6} className="footer-text">
            &copy; 2023 Bewery Review App (BRA). All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
