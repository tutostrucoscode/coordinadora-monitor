import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ResponsiveWaffleHtml } from "@nivo/waffle";
import * as api from "../API/API";
import "./styles.css";

export default function Cards(props) {
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
      console.log(result.data.status.apis[1].authenticacion.days);
      setauthenticacions(result.data.status.apis[1].authenticacion);
    };
    fetchData();
  }, []);

  const tiempo = todos.last_updated;
  const tituloA = trackings.title;
  const statusA = trackings.current_status;
  const tituloB = authenticacions.title;
  const statusB = authenticacions.current_status;
  const daysB = authenticacions.days;

  const dataTest = [
    {
      id: "men",
      label: "men",
      value: 24.09136321396135,
      color: "#468df3",
    },
    {
      id: "women",
      label: "women",
      value: 19.02889484746935,
      color: "#ba72ff",
    },
    {
      id: "children",
      label: "children",
      value: 21.705236988462115,
      color: "#a1cfff",
    },
  ];

  const countDaysB = () => {
    let count = 0;
    for (const i in daysB) {
      count++;
    }
    return count;
  };

  const objeB = () => {
    var myservB = [];

    for (const i in daysB) {
      myservB.push((myservB["id"] = daysB[i]));
    }
    console.log(myservB);
  };

  return (
    <>
      {objeB()}
      <Row className="margin-bottom-50px">
        <Col>
          <div className="list-group ">
            <div className="list-group-item list-group-item-action flex-column align-items-start">
              <div className="d-flex w-100 justify-content-between">
                <h6 className="mb-1">
                  {tituloA} | {countDaysB()}
                </h6>
                <small>{statusA}</small>
              </div>
              <div className="mb-1 height-100">
                <ResponsiveWaffleHtml
                  data={dataTest}
                  total={100}
                  rows={1}
                  columns={30}
                  padding={2}
                  margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
                  colors={{ scheme: "accent" }}
                  borderColor={{ from: "color", modifiers: [] }}
                  animate={true}
                  motionStiffness={0}
                  motionDamping={0}
                />
              </div>
              <div className="d-flex w-100 justify-content-between">
                <small>98%</small>
                <small>Today</small>
              </div>
            </div>
            <div className="list-group-item list-group-item-action flex-column align-items-start">
              <div className="d-flex w-100 justify-content-between">
                <h6 className="mb-1">{tituloB}</h6>
                <small>{statusB}</small>
              </div>
              <div className="mb-1 height-100">
                <ResponsiveWaffleHtml
                  data={dataTest}
                  total={100}
                  rows={1}
                  columns={30}
                  padding={3}
                  margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
                  colors={{ scheme: "accent" }}
                  borderColor={{ from: "color", modifiers: [] }}
                  animate={true}
                  motionStiffness={0}
                  motionDamping={0}
                />
              </div>
              <div className="d-flex w-100 justify-content-between">
                <small>98%</small>
                <small>Today</small>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
