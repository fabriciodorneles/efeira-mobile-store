import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Logo from '../../assets/Logo.png';
import { useCart } from '../../hooks/cart';
import {
  ActionButton,
  ActionContainer,
  Address,
  AddressContainer,
  BackButton,
  ConfirmButton,
  ConfirmText,
  Container,
  ImageContainer,
  LogoImage,
  Product,
  ProductContainer,
  ProductList,
  ProductPrice,
  ProductPriceContainer,
  ProductQuantity,
  ProductTitle,
  ProductTitleContainer,
  StoreHeader,
  SubTitleCheckout,
  SubtotalValue,
  TitleCheckout,
  TotalContainer,
  TotalPriceContainer
} from './styles';

interface IProduct {
  id: string;
  name: string;
  avatar: string;
  price: number;
  quantity: number;
  description: string;
}

const Cart: React.FC = () => {
  const navigation  = useNavigation();
  const { increment, decrement, products, cartTotalPrice } = useCart();

  function handleIncrement(id: string): void {
    increment(id);
  }

  function handleDecrement(id: string): void {
    decrement(id);
  }

  return (
    <Container>
      <StoreHeader>
        <BackButton onPress={() => navigation.navigate('Dashboard')}>
          <FeatherIcon name="arrow-left" color="#1e5323" size={36} />
        </BackButton>
        <ImageContainer>
          <LogoImage source={Logo} />
        </ImageContainer>
      </StoreHeader>
      <AddressContainer>
        <TitleCheckout>Confirmação de Pedido</TitleCheckout>
        <SubTitleCheckout>Endereço de Entrega:</SubTitleCheckout>
        <Address>
          Rua Pedro Paulo Freitas{"\n"}
          Rua Altamiro de Abreu, 237{"\n"}
          Apto. 707 Partenon - RJ{"\n"}
          Fone: 21 9785-4800
        </Address>
      </AddressContainer>
      <ProductContainer>
        <TotalPriceContainer>
          <SubtotalValue>TOTAL: {cartTotalPrice} R$</SubtotalValue>
        </TotalPriceContainer>
        <ConfirmButton>
          <ConfirmText>Confirmar Pedido</ConfirmText>
        </ConfirmButton>
        <ProductList
          data={products}
          keyExtractor={(item: IProduct) => item.id}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }}
          renderItem={({ item }) => (
            <Product>
              <ProductTitleContainer>
                <ProductTitle>{item.name}</ProductTitle>
                <ProductPriceContainer>
                  <TotalContainer>
                    <ProductQuantity>{`${item.quantity}Kg x`}</ProductQuantity>
                    <ProductQuantity>{`${item.price} R$ = `}</ProductQuantity>
                    <ProductPrice>
                      {`${item.price * item.quantity} R$`}
                    </ProductPrice>
                  </TotalContainer>
                </ProductPriceContainer>
              </ProductTitleContainer>
              <ActionContainer>
                <ActionButton
                  testID={`increment-${item.id}`}
                  onPress={() => handleIncrement(item.id)}
                >
                  <FeatherIcon name="plus" color="#1e5323" size={16} />
                </ActionButton>
                <ActionButton
                  testID={`decrement-${item.id}`}
                  onPress={() => handleDecrement(item.id)}
                >
                  <FeatherIcon name="minus" color="#1e5323" size={16} />
                </ActionButton>
              </ActionContainer>
            </Product>
          )}
        />
      </ProductContainer>
    </Container>
  );
};

export default Cart;
