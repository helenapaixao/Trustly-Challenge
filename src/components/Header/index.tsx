import React from 'react';
import Avatar from '../../assets/images/Avatar.png';
import * as S from './styles'


const Header: React.FC = () => {
  return(
    <>
    <S.Container>
      <S.Content>
      <h1>Header</h1>
      </S.Content>
      <S.Avatar>
      <img src={Avatar} />
      </S.Avatar> 
    </S.Container>
    </>
  )
}

export default Header;