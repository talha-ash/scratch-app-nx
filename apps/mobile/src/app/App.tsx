import React from 'react';
import { shared } from '@nx/shared';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <View>
      <Text>{shared()}</Text>
    </View>
  );
};

export default App;
