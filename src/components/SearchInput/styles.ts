import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-bottom: 1px solid #bdbdbd;
  padding: 16px;
  width: 100%;
  color: #666360;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      color:   #666360;
      border-color: #666360;
    `}
  ${props =>
    props.isFilled &&
    css`
      color: #666360;
    `}
  input {
    font-family: Open Sans;
    font-style: normal;
    flex: 1;
    background: transparent;
    border: 0;
    color: #A8A8A8;
    font-size: 24px;
    text-align: center;
    &::placeholder {
      font-weight: 300;
      font-size: 24px;
      text-align: center;
      color: #A8A8A8;
    }
  }
  svg {
    margin-right: 16px;
    width: 30px;
    height: 30px;
  }
`;
