import { FlatList } from 'react-native';
import styled from 'styled-components/native';

interface Product {
  id: string;
  name: string;
  avatar: string;
  price: number;
  quantity: number;
  description: string;
}

export const ProductList = styled(
  FlatList as new () => FlatList<Product>,
).attrs({
  numColumns: 2,
})`
  flex: 1;
  padding: 0 10px;
`;

export const ProductContainer = styled.View`
  background: #f0f0f5;
  padding: 16px 16px;
  border-radius: 5px;
  margin: 8px;
  flex: 1;
`;

export const ProductImage = styled.Image`
  height: 122px;
  width: 122px;
  align-self: center;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  margin-top: 10px;
  align-self: center;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 8px;
  margin-top: auto;
  align-self: center;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #e83f5b;
`;

export const ActionContainer = styled.View`
  background: #fff;
  flex-direction: row;
  align-self: flex-end;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  border-radius: 5px;
  margin-top: 9px;
`;

export const PlusButton = styled.TouchableOpacity`
  background: #dadaf1;
  border-radius: 5px;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
  padding: 8px;
`;

export const MinusButton = styled.TouchableOpacity`
  background: #dadaf1;
  border-radius: 5px;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
  padding: 8px;
`;

export const QuantityContainer = styled.View`
padding: 2px 2px;
flex:1;
align-items:center
`;



