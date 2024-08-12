import styled, { css } from "styled-components";

export const HeaderWrapper = styled.header`
  ${({ theme }) => {
    return css`
      position: fixed;
      top: 0;
      z-index: 100;
      background-color: ${theme.palette.primary.light};
      padding: 16px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: ${theme.breakpoints.lg};
      width: 100%;

      @media (max-width: ${theme.breakpoints.sm}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        row-gap: 12px;
      }
    `;
  }}
`;

export const Logo = styled.img`
  width: 48px;
  height: auto;
  display: block;
`;

export const Title = styled.h1`
  ${({ theme }) => {
    return css`
      font-size: 1.5rem;
      color: ${theme.palette.primary};
      margin-left: 1rem;
    `;
  }}
`;

export const LogoTitleContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      padding: 0 1.5rem;
      max-width: 150px;
      @media (max-width: ${theme.breakpoints.sm}) {
        max-width: 250px;
      }
    `;
  }}
`;
