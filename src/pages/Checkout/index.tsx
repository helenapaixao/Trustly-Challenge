import React from 'react';
import { Cart } from '../../utils/types';
import * as S from './styles';
import { Row, Col } from 'react-bootstrap';
/* import CartDetails from '../../components/CartDetails'; */
import PaymentMethods from '../../components/Payment';
import { Action } from '../../utils/types';

interface CheckoutProps {
  navigation: any;
  cart: Cart | undefined;
  setCart: React.Dispatch<Action>;
}

const Checkout: React.FC<CheckoutProps> = ({
  navigation,
  cart,
  setCart,
}: CheckoutProps) => {
  /* if (cart) {
    return (
      <S.Container>
        <S.ContainerCenter>
          <Row>
            <Col md={5}>
              <ContainerImg url={cart.sneaker.maxresURL}></ContainerImg>
            </Col>
            <Col md={7}>
              <ContainerDetails>
                <h3 className="checkout-title">Checkout</h3>
                <CartDetails cart={cart} navigation={navigation} />
                <h3 className="payment-title">Payment Method</h3>
                <PaymentMethods
                  cart={cart}
                  navigation={navigation}
                  setCart={setCart}
                />
              </ContainerDetails>
            </Col>
          </Row>
        </ContainerCenter>
      </Container>
    ); */
    return <div />;
  }



export default Checkout;
