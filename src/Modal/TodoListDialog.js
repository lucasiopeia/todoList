import React from "react";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "./ModalList";
import "./TodoListDialog.css";

function TodoListDialog(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="addBtn">
        <Button variant="primary" onClick={() => setModalShow(true)}>To Do New</Button>
      </div>

      <MyVerticallyCenteredModal
        isChangedName={props.isChangedName}
        handleAddTask={props.handleAddTask}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default TodoListDialog;
