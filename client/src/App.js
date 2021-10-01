import React from 'react';
import {Container} from "react-bootstrap";
import logo from './img/climbingLogo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "./components/Table/Table";
import './App.css';

function App() {
    return (
        <Container className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                Convert That Climb
            </header>
            <body className="App-body">
                <Table/>
            </body>
        </Container>
    );
}

export default App;
