import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import * as api from "../API/API";
import Circle from "react-colorful-circle";
import "./styles.css";

export default function Banners() {
  //const [todo, setTodo] = useState({});
  const [todos, setTodos] = useState([]);
  const [trackings, settrackings] = useState([]);
  const [authenticacions, setauthenticacions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.getAPI();
      //console.log(result.data.status.apis);
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
      <Row className="justify-content-md-around">
        <Col md="auto">
          {statusAB()}
          <h5 className="none-space">All systems operational</h5>
        </Col>
        <Col md="auto">
          <div className="verticleLine"></div>
        </Col>
        <Col md="auto">
          <h6>Refreshed {tiempo}</h6>
        </Col>
      </Row>
    </>
  );
}
