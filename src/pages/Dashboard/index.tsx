import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Logo from '../../assets/Logo.png';
import FloatingCart from '../../components/FloatingCart';
import Product from '../../components/Product/index';
import api from '../../services/api';
import {
  Container,
  ImageContainer,
  ProductContainer,
  ProductList,
  StoreHeader
} from './styles';

interface IProduct {
  id: string;
  name: string;
  avatar: string;
  price: number;
  quantity: number;
  description: string;
}

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get('/products');

      setProducts(response.data);
    }

    loadProducts();
  }, []);

  return (
    <Container>
      <StoreHeader>
        <ImageContainer source={Logo} />
        <FloatingCart />
      </StoreHeader>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={(item: IProduct) => item.id}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }}
          renderItem={({item}) => (
            <Product key={item.id} item={item} />
          )}
        />
      </ProductContainer>
    </Container>
  );
};

export default Dashboard;
