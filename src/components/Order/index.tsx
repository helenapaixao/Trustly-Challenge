import React from 'react';
import { Cart, PaymentMethod } from '../../utils/types';
import * as S from '../Cart/styles';
import { Col } from 'react-bootstrap';
import { AiFillBank, AiOutlineCreditCard, AiFillApple } from 'react-icons/ai';


interface OrderDetailsProps {
  cart: Cart;
}
const Order: React.FC<OrderDetailsProps> = ( { cart } ) => {
  return (
    <S.Container>
     <S.Content>
        <Col xs={4} className="container-img">
          <S.ContainerImg url={cart.sneaker.thumbnailURL} />
        </Col>
        <S.ContainerDetails>
          <Col md={6}>
            <h3>Order Sumary</h3>
            <h4>{cart.sneaker.description}</h4>
            <p>
              x {cart.quantity} {cart.sneaker.color} {cart.size}
            </p>
            <p>item #{cart.sneaker.id}</p>
          </Col>
          <Col className="payment-method">
            <h3>Payment Method</h3>
            <div>
              {cart.paymentMethod === PaymentMethod.ONLINE ? (
                <AiFillBank size={40} color="#6B8067" />
              ) : cart.paymentMethod === PaymentMethod.CARD ? (
                <AiOutlineCreditCard size={30} color="#6B8067" />
              ) : (
                <AiFillApple size={30} color="#6B8067" />
              )}
              <h4>{cart.paymentMethod}</h4>
            </div>
          </Col>
        </S.ContainerDetails>
      </S.Content> 
    </S.Container>
  );
};

export default OrderDetails;
