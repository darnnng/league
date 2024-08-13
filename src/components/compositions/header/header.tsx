import React from "react";
import * as Styled from "./header.styles";
import logoSrc from "@/assets/icons/camera.svg";
import { SearchBox } from "../searchBox";

export const Header: React.FC = () => {
  return (
    <Styled.HeaderWrapper>
      <Styled.LogoTitleContainer>
        <div>
          <Styled.Logo src={logoSrc} alt="logo" />
        </div>
        <Styled.Title>PhotoCenter</Styled.Title>
      </Styled.LogoTitleContainer>
      <SearchBox />
    </Styled.HeaderWrapper>
  );
};
