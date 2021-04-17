// import 'react-native-gesture-handler';
import React from 'react';
import {Text, View, StatusBar} from 'react-native';

import Routes from './routes';
import AppContainer from './hooks';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => (
  <View style={{backgroundColor: '#312e38', flex: 1}}>
    {/* <AppContainer> */}
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    {/* <Text>HELLO WORLD</Text> */}
    <Dashboard />
    {/* <Routes /> */}
    {/* </AppContainer> */}
  </View>
);

export default App;