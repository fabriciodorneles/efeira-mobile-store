import React, {useState, useEffect} from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {View, Image} from 'react-native';

// import formatValue from '../../utils/formatValue';
// import {useCart} from '../../hooks/cart';
import api from '../../services/api';
import Logo from '../../assets/Logo.png';


// import FloatingCart from '../../components/FloatingCart';

import {
  Container,
  StoreHeader,
  ProductContainer,
  ProductImage,
  ProductList,
  Product,
  ProductTitle,
  PriceContainer,
  ProductPrice,
  ProductButton,
  ImageContainer,
  ActionButton
} from './styles';
import { ActionContainer } from '../Cart/styles';

interface Product {
  id: string;
  name: string;
  avatar: string;
  price: number;
  quantity: number;
  description: string;
}



const Dashboard: React.FC = () => {
  // const {addToCart} = useCart();

  const [products, setProducts] = useState<Product[]>([]);

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
      </StoreHeader>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={(item: any) => item.id}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }}
          renderItem={({item}: any) => (
            <Product>
              <ProductImage source={{uri: item.avatar}} />
              <ProductTitle>{item.name}</ProductTitle>
              <PriceContainer>
                <ProductPrice>{item.price}</ProductPrice>
                <ProductButton
                  testID={`add-to-cart-${item.id}`}
                  // onPress={() => handleAddToCart(item)}
                  onPress={() => {}}>
                  <FeatherIcon size={20} name="plus" color="#C4C4C4" />
                </ProductButton>
              </PriceContainer>
              <ActionContainer>
                <ActionButton
                  testID={`increment-${item.id}`}
                  onPress={() => {}}
                >
                  <FeatherIcon name="plus" color="#E83F5B" size={16} />
                </ActionButton>
                <ActionButton
                  testID={`decrement-${item.id}`}
                  onPress={() => {}}
                >
                  <FeatherIcon name="minus" color="#E83F5B" size={16} />
                </ActionButton>
              </ActionContainer>
            </Product>
          )}
        />
      </ProductContainer>
      {/* <FloatingCart /> */}
    </Container>
  );
};

export default Dashboard;
