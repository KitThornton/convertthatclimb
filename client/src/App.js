import React, {Fragment} from 'react';
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "./components/table/Table";
import './App.css';
import {Header} from "./components/title/Header";
import {Footer} from "./components/footer/Footer";

function App() {
    return (
        <Fragment>
            <Container className="App">
                <Header />
                <body className="App-body p-3">
                    <Table />
                </body>
                <Footer />
            </Container>
        </Fragment>
    );
}

export default App;
