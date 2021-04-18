import styled from 'styled-components/native';

export const Container = styled.View`
  width: 120px;
  bottom: 0px;
  flex-direction: row;
  background: #e83f5b;
  padding: 0 0px;
  justify-content: space-between;
  align-items: center;
`;
export const IconContainer = styled.View`
`;
export const InfoContainer = styled.View`
`;

export const CartPricing = styled.Text`
`;

export const CartTotalPrice = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const CartButton = styled.TouchableOpacity`
  width: 130px;
  height: 65px;
  border-radius: 5px;
  flex-direction: row;
  background: #52a759;
  padding: 12px 12px;
  justify-content: space-between;
  align-items: center;
  border: 1px;
  border-color: #fff;
`;

export const CartButtonText = styled.Text`
  font-weight: bold;
  color: #fff;
  flex: 1;
  margin-right: auto;
`;
