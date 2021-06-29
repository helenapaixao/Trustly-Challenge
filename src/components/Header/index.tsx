
import React from 'react';
import Avatar from '../../assets/images/Avatar.png';
import * as S from './styles';
import { FiArrowLeft } from 'react-icons/fi';

interface HeaderProps {
  title: string;
  previous?: any;
}

const Header: React.FC<HeaderProps> = ({ title, previous }: HeaderProps) => {
  return (
    <S.Container>
      {previous && (
        <S.ButtonBack onClick={previous}>
          <FiArrowLeft size={20} />
          Back
        </S.ButtonBack>
      )}
      <S.Content>
        <h3>{title}</h3>
      </S.Content>
      <S.Avatar>
        <img src={Avatar} />
      </S.Avatar>
    </S.Container>
  );
};

export default Header;
