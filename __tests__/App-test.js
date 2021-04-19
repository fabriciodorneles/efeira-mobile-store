/**
 * @format
 */

import React from 'react';
import 'react-native';
import App from '../src';
import { act, fireEvent, render, wait, waitFor } from '@testing-library/react-native';
// import AxiosMock from 'axios-mock-adapter';
// import { mocked } from 'ts-jest/utils';
//import { useCart } from '../src/hooks/cart';
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

//const apiMock = new AxiosMock(api);

describe('Dashboard', () => {
  it('renders correctly', async () => {
    const {container} = render(<Dashboard />);
    await waitFor(() => expect(container).toBeTruthy());
  });
})




