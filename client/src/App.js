import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import logo from './img/climbingLogo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "./components/table/Table";
import './App.css';

function App() {
    return (
        <Container className="App">
            <div className="App-header">
                <Row>
                    <Col>
                        <img src={logo} className="App-logo" alt="logo"/>
                    </Col>
                    <Col>
                        Convert That Climb
                    </Col>
                </Row>
            </div>
            <body className="App-body p-3">
                <Table />
            </body>
        </Container>
    );
}

export default App;
