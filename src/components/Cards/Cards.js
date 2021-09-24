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
      setTodos(result.data);
      settrackings(result.data.status.apis[0].tracking);
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
      id: "1",
      label: "100",
      value: 100,
      color: "#56C2D6",
    },
    {
      id: "1",
      label: "100",
      value: 100,
      color: "#56C2D6",
    },
    {
      id: "1",
      label: "100",
      value: 100,
      color: "#56C2D6",
    },
    {
      id: "2",
      label: "75",
      value: 75,
      color: "#D6C756",
    },
    {
      id: "2",
      label: "75",
      value: 75,
      color: "#D6C756",
    },
    {
      id: "3",
      label: "92",
      value: 92,
      color: "#56C2D6",
    },
  ];

  const statusAup = () => {
    const colorA = "#56C2D6";
    const colorD = "#56C2D6";

    if (statusA === "up") {
      return <div className="circle" style={{ background: colorA }}></div>;
    } else if (statusA !== "up") {
      return <div className="circle" style={{ background: colorD }}></div>;
    }
  };

  const statusBup = () => {
    const colorA = "#56C2D6";
    const colorD = "#56C2D6";

    if (statusB === "up") {
      return <div className="circle" style={{ background: colorA }}></div>;
    } else if (statusB !== "up") {
      return <div className="circle" style={{ background: colorD }}></div>;
    }
  };

  const countDaysB = () => {
    let count = 0;
    for (const i in daysB) {
      count++;
    }
    return count;
  };

  const objeB = () => {
    var myservB = [];
    var myservtemp = [];
    var miObjeto = new Object();
    let myArraytemp = new Array(daysB);

    /*
    id: "men",
    label: "men",
    value: 24.09136321396135,
    color: "#468df3",
    */

    let propiedadesDays = dataTest.map(() => {
      let propiedades = {
        id: "datos",
        label: "datos",
        value: "datos",
        color: "datos",
      };
      let porcent = (daysB * 100) / 100;
      if (porcent < 60) {
        propiedades["value"] = "< 60%";
      }
      if (porcent > 60 && porcent < 80) {
        propiedades["value"] = "60% y 80%";
      }
      if (porcent > 80) {
        propiedades["value"] = "> 80%";
      }
      return propiedades;
    });
    ///console.log(daysB);
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
                  {tituloA}
                </h6>
                <small>
                  {statusAup()}{statusA}
                </small>
              </div>
              <div className="mb-1 height-100">
                <ResponsiveWaffleHtml
                  data={dataTest}
                  total={1000}
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
                <small>{statusBup()}{statusB}</small>
              </div>
              <div className="mb-1 height-100">
                <ResponsiveWaffleHtml
                  data={dataTest}
                  total={1000}
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
