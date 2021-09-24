import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import * as api from "../API/API";
import "./styles.css";

export default function Banners() {
  const [todos, setTodos] = useState([]);
  const [trackings, settrackings] = useState([]);
  const [authenticacions, setauthenticacions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.getAPI();
      console.log(result.data);
      setTodos(result.data);
      console.log(result.data.status.apis[0].tracking.title);
      settrackings(result.data.status.apis[0].tracking);
      console.log(result.data.status.apis[1].authenticacion.title);
      setauthenticacions(result.data.status.apis[1].authenticacion);
    };
    fetchData();
  }, []);

  const tiempo = todos.last_updated;
  const statusA = trackings.current_status;
  const statusB = authenticacions.current_status;

  const statusAB = () => {
    const colorA = "#56C2D6";
    const colorB = "#56C2D6";
    const colorC = "#56C2D6";
    const colorD = "#56C2D6";

    if (statusA === "up" && statusB === "up") {
      return <div className="circle" style={{ background: colorA }}></div>;
    } else if (statusA !== "up" && statusB === "up") {
      return <div className="circle" style={{ background: colorB }}></div>;
    } else if (statusA === "up" && statusB !== "up") {
      return <div className="circle" style={{ background: colorC }}></div>;
    } else if (statusA !== "up" && statusB !== "up") {
      return <div className="circle" style={{ background: colorD }}></div>;
    }
  };

  return (
    <>
      <div className="container-full">
        <Row className="justify-content-md-around background-color-B padding-top-10px margin-bottom-10px">
          <Col md="auto">
            {statusAB()}
            <h5 className="none-space color-white">All systems operational</h5>
          </Col>
          <Col md="auto">
            <div className="verticleLine"></div>
          </Col>
          <Col md="auto">
            <h6 className="color-white margin-top-3px" >Refreshed {tiempo}</h6>
          </Col>
        </Row>
      </div>
    </>
  );
}
