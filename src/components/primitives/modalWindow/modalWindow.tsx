import React from "react";
import * as Styled from "./modalWindow.styles";
import { ModalWindowProps } from "./modalWindow.types";

export const Modal: React.FC<ModalWindowProps> = ({
  title,
  children,
  open,
  onClose
}) => {
  if (!open) return null;

  const handleOnOutsideClick = (
    event: React.SyntheticEvent<HTMLDivElement>
  ) => {
    event.stopPropagation();
  };

  return (
    <Styled.Overlay open={open} onClick={onClose}>
      <Styled.ModalContainer onClick={handleOnOutsideClick}>
        <Styled.Header>
          <Styled.Title>{title}</Styled.Title>
          <Styled.CloseButton onClick={onClose}>&times;</Styled.CloseButton>
        </Styled.Header>
        <Styled.Content>{children}</Styled.Content>
      </Styled.ModalContainer>
    </Styled.Overlay>
  );
};
