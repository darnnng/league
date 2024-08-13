import { css, styled } from "styled-components";
import { InputFieldProps } from "./input.types";

export const InputField = styled.input<InputFieldProps>`
  ${({ theme, error }) => {
    const { palette } = theme;
    const { fontFamily, fontWeight, fontSize } = theme.typography;

    return css`
      min-width: 250px;
      width: 100%;
      height: 48px;
      padding: 16px 40px 16px 12px;
      border: 1px solid ${palette.primary.dark};
      border-radius: 20px;
      color: ${palette.text.dark};
      background-color: ${palette.text.light};
      font-family: ${fontFamily};
      font-size: ${fontSize.sm};
      font-weight: ${fontWeight.normal};
      overflow: hidden;
      transition: 0.3s;

      &::placeholder {
        color: ${palette.text.main};
        font-weight: ${fontWeight.normal};
        font-size: ${fontSize.sm};
        opacity: 1;
      }

      &:focus {
        outline: none;
        &::placeholder {
          opacity: 0;
        }
      }

      ${error &&
      `
      border: 1px solid ${palette.error.main};
      `}
    `;
  }}
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const Icon = styled.img`
  ${({ theme }) => {
    return css`
      position: absolute;
      right: 16px;
      top: 50%;
      z-index: 100;
      transform: translateY(-50%);
      display: block;
    `;
  }}
`;

export const ErrorMessage = styled.span<InputFieldProps>`
  ${({ error }) => {
    return css`
      color: ${({ theme }) => theme.palette.error.main};
      font-size: 0.875rem;
      margin-top: 0.5rem;
      max-width: 250px;
      ${error &&
      `
      display:none
      `}
    `;
  }}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
