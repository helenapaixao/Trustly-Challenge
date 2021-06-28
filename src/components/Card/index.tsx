import React from 'react';
import Button from '../Button'
import * as S from './styles'

const Card: React.FC = () => {
  return(
    <S.Container>
   <h1>Card</h1>
   <S.Content>
     <S.Selects>
       <select>teste</select>
     </S.Selects>
  {/*    <Button type="submit">Add to Cart</Button> */}
   </S.Content>
    </S.Container>
 
  )
}

export default Card;