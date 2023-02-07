import React, { useState } from "react";
import { Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import "./App.css";
import BarChart from "./Components/BarChart";
import LineChart from "./Components/LineChart";
import Header from "./Components/Header";
import { UserData } from "./data.js";

function App() {
  const [chartType, setChartType] = useState('BarChart');
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.Country),
    datasets: [
      {
        label: "Daily Users",
        data: UserData.map((data) => data["Daily Users"]),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div className="App">
      <Header />
      <div className="ui container center">
      <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Form>
            <FormControl as="select" value={chartType} onChange={e => setChartType(e.target.value)}>
              <option value="BarChart">Bar Chart</option>
              <option value="LineChart">Line Chart</option>
            </FormControl>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col>
          {chartType === 'BarChart' ? <BarChart chartData={userData}/> : <LineChart chartData={userData}/>}
        </Col>
      </Row>
    </Container>

      </div>
      
      {/* <div>
        <BarChart chartData={userData} />
      </div>
      <div>
        <LineChart chartData={userData} />
      </div> */}
      <h1 className="ui container center header"> Table </h1>
      <div className="ui container center">
        <div className="ui celled table">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Country</th>
                <th>App</th>
                <th>Platform</th>
                <th>Ad Network</th>
                <th>Daily Users</th>
              </tr>
            </thead>
            <tbody>
              {UserData.map((data) => {
                const { Date, Country, App, Platform, "Daily Users":dailyUsers, "Ad Network": adNetwork } = data;
                return (
                  <tr>
                    <td>{Date}</td>
                    <td>{Country}</td>
                    <td>{App}</td>
                    <td>{Platform}</td>
                    <td>{dailyUsers}</td>
                    <td>{adNetwork}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
