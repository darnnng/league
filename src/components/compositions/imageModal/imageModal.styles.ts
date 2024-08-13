import { css, styled } from "styled-components";

export const ModalImage = styled.img`
  ${({ theme }) => {
    return css`
      display: block;
      max-width: 600px;
      width: auto;
      height: auto;
      max-height: calc(100vh - 160px);
      border-radius: 10px;
      object-fit: cover;
    `;
  }}
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
