import React from 'react';
import { Modal,  Button } from 'react-bootstrap';

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
                <h4>Centered Modal</h4>
                <p>
                    {props.body}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}