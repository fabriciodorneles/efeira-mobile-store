import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Logo from '../../assets/Logo.png';
import FloatingCart from '../../components/FloatingCart';
import Product from '../../components/Product/index';
// import formatValue from '../../utils/formatValue';
// import {useCart} from '../../hooks/cart';
import api from '../../services/api';
// import FloatingCart from '../../components/FloatingCart';
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
  // const {addToCart} = useCart();

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get('/products');

      setProducts(response.data);
    }

    loadProducts();
  }, []);

  // function handleAddToCart(item: Product): void {
  //   addToCart(item);
  // }

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
      {/* <FloatingCart /> */}
    </Container>
  );
};

export default Dashboard;
