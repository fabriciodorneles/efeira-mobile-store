import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Cart from '../pages/Cart';
import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#ffff'},
    }}
    initialRouteName="Dashboard">
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="Cart" component={Cart} />
  </App.Navigator>
);

export default AppRoutes;
