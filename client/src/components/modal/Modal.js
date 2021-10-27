import React from 'react';
import { Modal,  Button } from 'react-bootstrap';
import './Modal.css'
import * as Descriptions from "./GradingSystemsDescriptions";

export default function GradingSystemModal(props) {

    return(

        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            {...props}
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    {props.body}
                </p>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
            </Modal.Body>
            {/*<Modal.Footer>*/}
            {/*</Modal.Footer>*/}
        </Modal>
    )
}