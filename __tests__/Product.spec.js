/**
 * @format
 */

 import React from 'react';
 import 'react-native';
 import App from '../src';
 import { act, fireEvent, render, wait, waitFor } from '@testing-library/react-native';
 // import AxiosMock from 'axios-mock-adapter';
 import { mocked } from 'ts-jest/utils';
 import { useCart } from '../src/hooks/cart';
 // import api from '../src/services/api';
 import Dashboard from '../src/pages/Dashboard';
 import Cart from '../src/pages/Cart';
 import Product from '../src/components/Product';
 
 jest.mock('@react-navigation/native', () => {
   // Require the original module to not be mocked...
   const originalModule = jest.requireActual('@react-navigation/native');
 
   return {
     __esModule: true, // Use it when dealing with esModules
     ...originalModule,
     useNavigation: jest.fn(),
   };
 });
 
 jest.mock('../src/hooks/cart.tsx', () => ({
   __esModule: true,
   useCart: jest.fn().mockReturnValue({
     addToCart: jest.fn(),
     products: [],
   }),
 }));
 
 
 const useCartMocked = mocked(useCart);

 useCartMocked.mockReturnValue({
   addToCart: jest.fn(),
   products: [
    {
      id: "4b41c58f-5ad5-4d65-9ece-27bbfe8558d0",
      name: "Batata doce",
      avatar: "https://s3-sa-east-1.amazonaws.com/vitta-blog-vitta-me/wp-content/uploads/2020/05/beneficios-da-batata-doce-conheca-ja-1200x675.jpg",
      description: null,
      price: "10.00",
      quantity: 3,
      },
      {
      id: "36e3a38e-b871-4314-8a3c-905a15844a1d",
      name: "mandioca",
      avatar: "https://conteudo.imguol.com.br/c/entretenimento/c5/2019/06/14/mandioca-1560551340610_v2_1257x835.jpg",
      description: null,
      price: "8.00",
      quantity: 4,
      },
      {
      id: "6524f9b2-34a4-464f-8489-ae6d5fa75aec",
      name: "Espinafre",
      avatar: "https://www.spdm.org.br/media/k2/items/cache/4782e61929e852d1cbbbbebe70425508_XL.jpg",
      description: "jnlj",
      price: "20.00",
      quantity: 2,
      }
   ],
   increment: jest.fn(),
   decrement: jest.fn(),
   totalItensInCart: 2,
   cartTotalPrice: 127,
 });
 
 describe('Product', () => {
    it('renders correctly', async () => {
      const {container} = render(
      <Product item={{
         id: "4b41c58f-5ad5-4d65-9ece-27bbfe8558d0",
         name: "Batata doce",
         avatar: "https://s3-sa-east-1.amazonaws.com/vitta-blog-vitta-me/wp-content/uploads/2020/05/beneficios-da-batata-doce-conheca-ja-1200x675.jpg",
         description: null,
         price: "10.00",
         quantity: 23,
         }} 
     />);
      await waitFor(() => expect(container).toBeTruthy());
    });
  })
 
