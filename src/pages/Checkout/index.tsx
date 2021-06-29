import React from "react";
import { Cart } from "../../utils/types";
import * as S from "./styles";
import { Row, Col } from "react-bootstrap";
import CartDetails from "../../components/Cart";
import Payment from "../../components/Payment";
import { Action } from "../../utils/types";

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
  if (cart) {
    return (
      <S.Container>
        <S.ContainerCenter>
          <Row>
            <Col md={5}>
              <S.ContainerImg url={cart.sneaker.maxresURL}></S.ContainerImg>
            </Col>
            <Col md={7}>
              <S.ContainerDetails>
                <h3 className="checkout-title">Checkout</h3>
                <CartDetails cart={cart} navigation={navigation} />
                <h3 className="payment-title">Payment Method</h3>
                <Payment
                  cart={cart}
                  navigation={navigation}
                  setCart={setCart}
                />
              </S.ContainerDetails>
            </Col>
          </Row>
        </S.ContainerCenter>
      </S.Container>
    );
  }
  return <div />;
};

export default Checkout;
