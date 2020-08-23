import React from 'react';
import {View, Text} from 'react-native';

interface CenterProps {}

export const Center: React.FC<CenterProps> = ({children}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {children}
    </View>
  );
};
