import styled from 'styled-components';

interface ContainerImgProps {
  url: string;
}
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #f7f7f7;
  border-radius: 10px;
  padding: 16px;
  h3 {
    font-size: 18px;
     color: #000; 
    margin-bottom: 1rem;
  }
  h4 {
    font-weight: 400;
    font-size: 16px;
     color: #000; 
    margin-bottom: 0px;
  }
  p {
    font-size: 14px;
  color: #A5A5A5;
    margin-bottom: 0px;
  }
  .total-cost {
    display: flex;
    margin-top: 1rem;
    @media all and (max-width: 769px) {
      display: none;
    }
  }
  .total-cost-mobile {
    margin-top: 1rem;
    justify-content: space-between;
    display: none;
    @media all and (max-width: 769px) {
      display: flex;
    }
  }
  h2 {

    font-size: 30px;
   color: #000;
    margin-left: 10px;
    font-weight: 400;
  }
  .container-column {
    display: flex;
    flex-direction: column;
  }
  .container-img {
    display: none;
    padding-right: 15px;
    padding-left: 0px;
    height: 150px;
    min-width: 120px;
    @media all and (max-width: 1000px) {
      display: block;
    }
    @media all and (max-width: 500px) {
      height: 100px;
    }
  }
  @media all and (max-width: 769px) {
    h2 {
      font-size: 26px;
      margin-left: 10px;
    }
  }
  .col-md-6 {
    padding-left: 0px;
  }
`;
export const Content = styled.div`
  display: flex;
  .delivery-details {
    margin-left: 1rem;
  }
  .payment-method {
    div {
      display: flex;
      align-items: center;
    }
    svg {
      margin-right: 5px;
    }
  }
  @media all and (max-width: 769px) {
    .delivery-details {
      margin-top: 1rem;
      margin-left: 0px;
      padding-left: 0px;
    }
    .payment-method {
      display: none;
    }
  }
`;
export const ContainerDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media all and (max-width: 769px) {
    flex-direction: column;
  }
`;
export const ContainerImg = styled.div<ContainerImgProps>`
  background-image: url(${props => props.url});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  @media all and (max-width: 400px) {
  }
`;
export const ContainerIcon = styled.div`
  display: none;
  justify-content: flex-end;
  @media all and (max-width: 769px) {
    display: flex;
  }
`;
