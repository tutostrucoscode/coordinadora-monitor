import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";

export default function Footer() {
  return (
    <>
      <footer className="">
        <div className="container">
          <h6 className="PBold700 color-txt-footer-A">OVERALL UPTIME</h6>
        </div>
        <div className="container background-color-B-footer padding-top padding-bottom">
          <Row className=" justify-content-md-around">
            <Col md="auto">
              <h4 className="color-white">100%</h4>
              <p className="color-white">Last 24 hours</p>
            </Col>
            <Col md="auto">
              <div className="verticleLine-footer" />
            </Col>
            <Col md="auto">
              <h4 className="color-white">98.93%</h4>
              <p className="color-white">Last 24 hours</p>
            </Col>
            <Col md="auto">
              <div className="verticleLine-footer" />
            </Col>
            <Col md="auto">
              <h4 className="color-white">98.93%</h4>
              <p className="color-white">Last 24 hours</p>
            </Col>
          </Row>
        </div>
      </footer>
    </>
  );
}
