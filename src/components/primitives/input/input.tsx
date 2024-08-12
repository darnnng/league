import React from "react";
import * as Styled from "./input.styles";
import { InputProps } from "./input.types";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ icon, error, ...props }, ref) => {
    return (
      <Styled.Container>
        <Styled.InputContainer>
          <Styled.InputField type="text" ref={ref} error={error} {...props} />
          {icon && <Styled.Icon src={icon} alt="Search" />}
        </Styled.InputContainer>
        <Styled.ErrorMessage>{error || ""}</Styled.ErrorMessage>
      </Styled.Container>
    );
  }
);

export default Input;
