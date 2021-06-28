import React, { ButtonHTMLAttributes, Children } from "react";
import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

// eslint-disable-next-line react/prop-types
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container {...rest}>{Children}</Container>
);

export default Button;
