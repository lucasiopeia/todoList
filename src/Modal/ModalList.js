import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const MyVerticallyCenteredModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>

            </Modal.Header>
            <Modal.Body>
                <div className="form-group">
                    <label></label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter name of task"
                        onChange={props.isChangedName}

                    />

                </div>

            </Modal.Body>
            <Modal.Footer>
                <button
                    type="submit"
                    className="btn btn-danger"
                    onClick={props.handleAddTask}
                >
                    Save{" "}
                </button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};
export default MyVerticallyCenteredModal;
