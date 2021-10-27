import React from "react";
import {Col, Row} from "react-bootstrap";
import logo from "../../img/climbingLogo.jpg";
import './Header.css'

export const Header = () => {
    return (
        <div className="App-header">
            <Row>
                <Col>
                    <img src={logo} className="App-logo" alt="logo"/>
                </Col>
                <Col className="App-title">
                    Convert That Climb
                </Col>
            </Row>
        </div>
)
}
