import React, {useState, useEffect} from 'react';
// import FeatherIcon from 'react-native-vector-icons/Feather';

import {View} from 'react-native';

// import formatValue from '../../utils/formatValue';
// import {useCart} from '../../hooks/cart';
import api from '../../services/api';

// import FloatingCart from '../../components/FloatingCart';

import {
  Container,
  ProductContainer,
  ProductImage,
  ProductList,
  Product,
  ProductTitle,
  PriceContainer,
  ProductPrice,
  ProductButton,
} from './styles';

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
                  {/* <FeatherIcon size={20} name="plus" color="#C4C4C4" /> */}
                </ProductButton>
              </PriceContainer>
            </Product>
          )}
        />
      </ProductContainer>
      {/* <FloatingCart /> */}
    </Container>
  );
};

export default Dashboard;