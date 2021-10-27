import React from 'react';
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "./components/table/Table";
import './App.css';
import {Header} from "./components/title/Header";

function App() {
    return (
        <Container className="App">
            <Header />
            <body className="App-body p-3">
                <Table />
            </body>
        </Container>
    );
}

export default App;
