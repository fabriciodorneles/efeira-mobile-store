import { useNavigation } from '@react-navigation/native';
import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useCart } from '../../hooks/cart';
import {
  CartButton,
  CartButtonText,
  CartTotalPrice,
  IconContainer,
  InfoContainer
} from './styles';


const FloatingCart: React.FC = () => {
  const navigation  = useNavigation();
  const { totalItensInCart, cartTotalPrice } = useCart();

  return (
      <CartButton
        testID="navigate-to-cart-button"
        onPress={() => navigation.navigate('Cart')}
      >
        <>
          <IconContainer>
            <FeatherIcon name="shopping-cart" size={24} color="#fff" />
          </IconContainer>
          <InfoContainer>
            <CartButtonText>{`${totalItensInCart} itens`}</CartButtonText>
            <CartTotalPrice>{cartTotalPrice},00 R$</CartTotalPrice>
          </InfoContainer>
        </>
      </CartButton>
  );
};

export default FloatingCart;
