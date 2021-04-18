import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, View } from 'react-native';
import 'react-native-gesture-handler';
import AppProvider from './hooks';
import Routes from './routes';


const App: React.FC = () => (
  <NavigationContainer>
  <View style={{backgroundColor: '#fff', flex: 1}}>
    <AppProvider>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Routes />
    </AppProvider>
  </View>
  </NavigationContainer>
);

export default App;
