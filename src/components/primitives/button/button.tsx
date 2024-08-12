import * as Styled from "./button.styles";
import { IButtonProps } from "./button.types";

export const Button = ({ children, ...props }: IButtonProps) => {
  return <Styled.Button {...props}>{children}</Styled.Button>;
};
