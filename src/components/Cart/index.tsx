import React from 'react';
import { Cart } from '../../utils/types';
import * as S from './styles';
import { Col } from 'react-bootstrap';
import { AiFillMinusCircle } from 'react-icons/ai';

interface CartDetailsProps {
  cart: Cart;
  navigation: any;
}

const Cart: React.FC<CartDetailsProps> = ({
  cart,
  navigation,
}: CartDetailsProps) => {
  const { previous } = navigation;
  return (
    <S.Container>
      <S.Content>
        <Col xs={4} className="container-img">
          <S.ContainerImg url={cart.sneaker.thumbnailURL} />
        </Col>
        <S.ContainerDetails>
          <S.ContainerIcon>
            <AiFillMinusCircle onClick={previous} size={20} color="#A5A5A5" />
          </S.ContainerIcon>
          <Col md={6}>
            <h3>Cart total</h3>
            <h4>{cart.sneaker.description}</h4>
            <p>
              x {cart.quantity} {cart.sneaker.color} {cart.size}
            </p>
            <p>item #{cart.sneaker.id}</p>
          </Col>
          <Col className="delivery-details">
            <h3>Delivery Details</h3>
            <p>{cart.customer.name}</p>
            <p>Phone no: {cart.customer.phone}</p>
            <p>
              Address: {cart.customer.address.street},{' '}
              {cart.customer.address.number}
            </p>
            <div className="total-cost">
              <div>
                <h4>Total cost</h4>
                <p>Delivery included</p>
              </div>
              <h2>$ {cart.totalCost}</h2>
            </div>
          </Col>
        </S.ContainerDetails>
      </S.Content>
      <div className="total-cost-mobile">
        <div>
          <h4>Total cost</h4>
          <p>Delivery included</p>
        </div>
        <h2>$ {cart.totalCost}</h2>
      </div>
    </S.Container>
  );
};

export default Cart;
