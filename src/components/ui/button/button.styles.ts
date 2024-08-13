import { css, styled } from "styled-components";

import { IStyledButtonProps } from "./button.types";

export const Button = styled.button<IStyledButtonProps>`
  ${({ theme }) => {
    const { fontSize, fontFamily, fontWeight } = theme.typography;
    const { primary, text } = theme.palette;

    return css`
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 12px 24px;
      color: ${text.light};
      background-color: transparent;
      border: none;
      border-radius: 10px;
      font-family: ${fontFamily};
      font-size: ${fontSize.sm};
      font-weight: ${fontWeight.bold};
      transition: background-color 0.3s ease;
      cursor: pointer;
      background-color: ${primary.main};
      &:hover {
        background-color: ${primary.light};
      }
      &:disabled {
        background-color: ${text.main};
        &:hover {
          box-shadow: none;
          background-color: ${text.main};
          filter: none;
        }
      }
    `;
  }}
`;
