// import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, View } from 'react-native';
import AppProvider from './hooks';
import Dashboard from './pages/Dashboard';


const App: React.FC = () => (
  <View style={{backgroundColor: '#fff', flex: 1}}>
    <AppProvider>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Dashboard />
      {/* <Routes /> */}
    </AppProvider>
  </View>
);

export default App;
