import { css, styled } from "styled-components";

export const Title = styled.h1`
  ${({ theme }) => {
    return css`
      color: ${theme.palette.text.light};
      font-size: ${theme.typography.fontSize["2xl"]};
      line-height: ${theme.typography.lineHeight["2xl"]};
      font-weight: ${theme.typography.fontWeight.extraBold};

      @media (max-width: ${theme.breakpoints.sm}) {
        font-size: ${theme.typography.fontSize.xl};
        line-height: ${theme.typography.lineHeight.xl};
      }
    `;
  }}
`;

export const Wrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 32px;

      width: 100%;
      background: ${theme.palette.primary.main};
      @media (max-width: ${theme.breakpoints.md}) {
        row-gap: 24px;
      }
    `;
  }}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
      gap: 16px;
      margin-top: 16px;
    `;
  }}
`;

export const NotFound = styled.p`
  ${({ theme }) => {
    return css`
      color: ${theme.palette.text.main};
      font-size: ${theme.typography.fontSize.lg};
    `;
  }}
`;
