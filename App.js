import React from 'react';
import { Image, ScrollView, Text } from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};

const App = () => (
  <ScrollView>
    <Text style={{ fontSize: 45 }}>Manuel Ivan Chavez Pacheco</Text>
    <Image source={logo} />
   
    <Text style={{ fontSize: 45 }}>Manuel Ivan Chavez Pacheco</Text>
    <Image source={logo} />
  
    <Text style={{ fontSize: 45 }}>Manuel Ivan Chavez Pacheco</Text>
    <Image source={logo} />
  
    <Text style={{ fontSize: 45 }}>Manuel Ivan Chavez Pacheco</Text>
    <Image source={logo} />
   
    <Text style={{ fontSize: 45 }}>Manuel Ivan Chavez Pacheco</Text>
    <Image source={logo} />

    <Text style={{ fontSize: 45 }}>Manuel Ivan Chavez Pacheco</Text>
  </ScrollView>
);

export default App;