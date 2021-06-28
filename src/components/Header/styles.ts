import styled from 'styled-components';



export const Container = styled.div`
  width: 100%;
  height: 87px;
  background:  #F6F6F6;
  padding: 25px;
  display: flex;
  justify-content: space-around;
  @media all and (max-width: 769px) {
    background: #fff;
    h3 {
      display: none;
    }
  }
  h3 {
    font-size: 26px;
    font-family: Arial;
  }
`;

export const Content = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

`;


export const Avatar = styled.div`
  display: flex;
  justify-content: flex-end;
  img {
    margin-right: 10%;
    @media all and (max-width: 300px) {
      margin-right: 0px;
    }
  }
`;