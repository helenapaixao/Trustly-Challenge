import React, { ButtonHTMLAttributes, Children } from "react";
import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container {...rest}>{Children}</Container>
);

export default Button;
