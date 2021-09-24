import React from "react";
import LogoA from "../../assets/png/logoA.png";
import { Col, Container, Row, Image } from "react-bootstrap";
import "./styles.css";
import Cards from "../../components/Cards/Cards";
import Banners from "../../components/Banners/Banners";

export default function Status() {
  return (
    <>
      <Container>
        {/*LOGO*/}
        <Row>
          <Col>
            <Image src={LogoA} />
          </Col>
        </Row>

        <Banners />
        <Cards />
      </Container>
    </>
  );
}
