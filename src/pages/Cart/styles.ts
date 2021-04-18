import { FlatList } from 'react-native';
import styled from 'styled-components/native';


interface IProduct {
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
  background-color:#3bb946;
`;

export const StoreHeader = styled.View`
  flex-direction: row;
  width:100%;
  height: 90px;
  background: #3bb946;
  justify-content: space-between;
  align-items:center;
  padding: 10px;
`;

export const BackButton = styled.TouchableOpacity`
  /* width: 130px;
  height: 65px;
  border-radius: 5px;
  flex-direction: row;
  background: #52a759;
  padding: 12px 12px;
  justify-content: space-between;
  align-items: center;
  border: 1px;
  border-color: #fff; */
`;

export const ImageContainer = styled.View`
  margin-top: -10px;
`;
export const LogoImage = styled.Image`
`;

export const AddressContainer = styled.View`
  width:90%;
  padding: 2px 5px;
  margin: 2px;
  align-self:center;
  margin-top: 5px;

`;

export const TitleCheckout = styled.Text`
  text-align:center;
  font-size: 20px;
  color: #1e5323;
  font-weight: bold;
`;

export const SubTitleCheckout = styled.Text`
  text-align:center;
  font-size: 16px;
  color: #1e5323;
  font-weight: bold;
`;

export const Address = styled.Text`
  text-align:center;
  font-size: 14px;
  color: #1e5323;
  font-weight: bold;
`;

export const ProductContainer = styled.View`
  width: 90%;
  flex:1;
  background-color: rgba(206, 212, 207, 0.31);
  border-radius: 10px;
  padding-top: 16px;
  padding-bottom: 16px;
  margin-top: 10px;
  margin-bottom: 20px;
`;
export const ProductList = styled(
  FlatList as new () => FlatList<IProduct>,
)`
  flex: 1;
  padding: 0 10px;
`;

export const Product = styled.View`
  width: 92%;
  padding: 2px 5px;
  border-radius: 5px;
  margin: 2px;
  flex: 1;
  flex-direction: row;
  align-self:center;
`;



export const TotalPriceContainer = styled.View`
  width:90%;
  padding: 0px 5px;
  flex-direction: row;
  align-self:center;
  border-bottom-width: 1px;
  padding-bottom: 8px;
`;

export const SubtotalValue = styled.Text`
  text-align:center;
  flex:1;
  font-size: 22px;
  color: #1e5323;
  font-weight: bold;
`;

export const ConfirmButton = styled.TouchableOpacity`
  width: 180px;
  border-radius: 5px;
  flex-direction: row;
  background: #378d3e;
  padding: 9px 9px;
  margin: 8px;
  align-self:center;
`;

export const ConfirmText = styled.Text`
  text-align:center;
  font-weight: bold;
  color: #fff;
  flex: 1;
`;

export const ProductTitleContainer = styled.View`
  font-size: 16px;
  margin-left: 5px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductPriceContainer = styled.View`
  flex-direction: column;
`;

export const TotalContainer = styled.View`
  flex-direction: row;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  margin-top: 5px;
  font-size: 16px;
  color: #1e5323;
`;

export const ProductQuantity = styled.Text`
  font-weight: bold;
  margin-top: 5px;
  margin-right: 10px;
  font-size: 16px;
  color: #1e5323;
`;

export const ActionContainer = styled.View`
  flex-direction:row;
  align-self: flex-end;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
`;

export const ActionButton = styled.TouchableOpacity`
  background: rgba(232, 63, 91, 0.1);
  border-radius: 5px;
  padding: 8px;
  margin-right:4px;
`;



