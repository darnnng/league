import { css, styled } from "styled-components";

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 30px;
    background-color: ${theme.palette.text.light};
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: ${theme.breakpoints.md}) {
      padding: 20px;
    }
  `}
`;

export const Thumbnail = styled.img`
  ${({ theme }) => css`
    display: block;
    width: 350px;
    height: 230px;
    object-fit: cover;
    border-radius: 10px;

    @media (max-width: ${theme.breakpoints.md}) {
      width: 270px;
      height: 190px;
    }
  `}
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    gap: 16px;
    width: 100%;
    max-width: 350px;
    padding: 16px;

    @media (max-width: ${theme.breakpoints.md}) {
      max-width: 270px;
    }
  `}
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    color: ${theme.palette.text.dark};
    font-size: ${theme.typography.fontSize.lg};
    font-weight: ${theme.typography.fontWeight.extraBold};
    line-height: ${theme.typography.lineHeight.lg};

    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.typography.fontSize.md};
      line-height: ${theme.typography.lineHeight.md};
    }
  `}
`;
