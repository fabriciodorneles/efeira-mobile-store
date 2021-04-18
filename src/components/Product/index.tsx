import React, { useMemo } from 'react';
import { Text } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useCart } from '../../hooks/cart';
import {
  ActionContainer, MinusButton, PlusButton,


  PriceContainer,
  ProductContainer,
  ProductImage,
  ProductPrice,
  ProductTitle,
  QuantityContainer
} from './styles';

interface IProduct {
  id: string;
  name: string;
  avatar: string;
  price: number;
  quantity: number;
  description: string;
}

interface IProps {
  item: IProduct;
}

const Product: React.FC<IProps> = ({ item }: IProps) => {
  const { addToCart, decrement, products } = useCart();

  function handleAddToCart(itemToAdd: IProduct): void {
      addToCart(itemToAdd);
  }

  const orderQuantity = useMemo(() => {
      const productEspe = products.find(
          (orderProduct) => orderProduct.id === item.id,
      );
      if (!productEspe) return 0;
      return productEspe.quantity;
  }, [products, item.id]);
  return (
    <ProductContainer> 
      <ProductImage source={{ uri: item.avatar }} />
      <ProductTitle>{item.name}</ProductTitle>
      <PriceContainer>
        <ProductPrice>{item.price} R$/Kg</ProductPrice>
      </PriceContainer>
      <ActionContainer>
        <PlusButton testID={`increment-${item.id}`} onPress={() => handleAddToCart(item)}>
          <FeatherIcon name="plus" color="#3d3d4d" size={16} />
        </PlusButton>
        <QuantityContainer>
        <Text>{orderQuantity} Kg</Text>
        </QuantityContainer>
        <MinusButton testID={`decrement-${item.id}`} onPress={() => decrement(item.id)}>
          <FeatherIcon name="minus" color="#3d3d4d" size={16} />
        </MinusButton>
      </ActionContainer>
    </ProductContainer>
  );
};

export default Product;
