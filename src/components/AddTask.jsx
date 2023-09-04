import React, { useState } from "react";
import FormAddTask from "./FormAddTask";
import Button from "./UI/buttons/Button";
import "./AddTask.css";

export const AddTask = (props) => {
  const [modal, setModal] = useState(false);

  const twiggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className={`popup ${modal ? "active" : "deactive"}`}>
        <div className={`modal ${modal ? "active" : "deactive"}`}>
          <FormAddTask addTask={props.addFunc} closeModal={twiggleModal} />
          <Button className="modal__form-close" onClick={twiggleModal}>
            X
          </Button>
        </div>
      </div>
      <Button className={`modal__add ${!modal ? "active" : "deactive"}`} onClick={twiggleModal}>
        +
      </Button>
    </>
  );
};
