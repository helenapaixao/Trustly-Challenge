/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback } from 'react';
import { IoIosSearch } from 'react-icons/io';
import * as S from './styles';
import SearchInput from '../../components/SearchInput';
import { Sneaker, Action } from '../../utils/types';
import Card from '../../components/Card';

interface SneakerProps {
  navigation: any;
  sneakers: Sneaker[];
  sneakersToShow: Sneaker[];
  setSneakersToShow: React.Dispatch<Action>;
  setCart: React.Dispatch<Action>;
}

const Shoes: React.FC<SneakerProps> = ({
  navigation,
  sneakers,
  sneakersToShow,
  setSneakersToShow,
  setCart,
}: SneakerProps) => {
  const handleSearchChange = useCallback(
    (value: string) => {
      const newSneakers = sneakers.filter(sneaker =>
        sneaker.description
          .toLowerCase()
          .includes(value.length > 0 ? value.toLocaleLowerCase() : ''),
      );
      setSneakersToShow({ type: 'UPDATE-ALL', payload: newSneakers });
    },
    [sneakers, setSneakersToShow],
  );
  return (
    <S.Container>
      <S.ContainerCenter>
        <SearchInput
          icon={IoIosSearch}
          name="search"
          placeholder="Search for your sneaker"
          onChange={e => handleSearchChange(e.target.value)}
        />
        {sneakersToShow.length > 0 ? (
          <S.ContainerShoes>
            {sneakersToShow.map((sneaker: Sneaker, index: number) => (
              <Card
                key={index}
                sneaker={sneaker}
                navigation={navigation}
                setCart={setCart}
              />
            ))}
          </S.ContainerShoes>
        ) : (
          <S.NoSearchTitle>
            There are no results for the selected filter
          </S.NoSearchTitle>
        )}
      </S.ContainerCenter>
    </S.Container>
  );
};

export default Shoes;
