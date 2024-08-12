import React from "react";
import ReactDOM from "react-dom";
import * as Styled from "./modalWindow.styles";
import { ModalWindowProps } from "./modalWindow.types";

const Modal: React.FC<ModalWindowProps> = ({
  title,
  children,
  open,
  onClose
}) => {
  if (!open) return null;

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <Styled.Overlay open={open} onClick={onClose}>
      <Styled.ModalContainer onClick={(event) => event.stopPropagation()}>
        <Styled.Header>
          <Styled.Title>{title}</Styled.Title>
          <Styled.CloseButton onClick={onClose}>&times;</Styled.CloseButton>
        </Styled.Header>
        <Styled.Content>{children}</Styled.Content>
      </Styled.ModalContainer>
    </Styled.Overlay>,
    modalRoot
  );
};

export default Modal;
