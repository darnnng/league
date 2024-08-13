import { css, keyframes } from "styled-components";
import styled from "styled-components";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
`;

export const Loader = styled.div`
  ${({ theme }) => {
    const { text } = theme.palette;

    return css`
      border: 8px solid ${text.light};
      border-left-color: ${text.main};
      border-radius: 50%;
      width: 60px;
      height: 60px;
      animation: ${spinAnimation} 1.2s infinite linear;
    `;
  }}
`;
