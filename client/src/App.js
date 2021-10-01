import React from 'react';
import logo from './img/climbingLogo.jpg';
import { Counter } from './components/counter/Counter';
import './App.css';
import Table from "./components/Table/Table";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";



function App() {
  return (
    <Container className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          Convert That Climb
      </header>
        <Table />
    </Container>
  );
}

export default App;
