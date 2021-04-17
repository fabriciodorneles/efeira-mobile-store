import styled from 'styled-components/native';
import { FlatList } from 'react-native';

interface Product {
  id: string;
  name: string;
  avatar: string;
  price: number;
  quantity: number;
  description: string;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const ProductContainer = styled.View`
  border-radius: 5px;
  margin-top: 20px;
  flex: 1;
  flex-direction: row;
`;

export const StoreHeader = styled.View`
  width:100%;
  height: 100px;
  background: #3bb946;
  justify-content:flex-start;
`;

export const ImageContainer = styled.Image`
  margin-left: 12px;
`;

export const ProductList = styled(
  FlatList as new () => FlatList<Product>,
).attrs({
  numColumns: 2,
})`
  flex: 1;
  padding: 0 10px;
`;

export const Product = styled.View`
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
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  margin-top: auto;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #e83f5b;
`;

export const ActionContainer = styled.View`
  align-self: flex-end;
  align-items: center;
  justify-content: space-between;

  margin-left: auto;
`;

export const ActionButton = styled.TouchableOpacity`
  background: rgba(232, 63, 91, 0.1);
  border-radius: 5px;
  padding: 12px;
  margin-bottom: 5px;
`;

export const ProductButton = styled.TouchableOpacity``;
