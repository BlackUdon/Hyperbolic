import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {AuthParamList, AuthNavProps} from './../_core/services/auth.service';
import {SessionScreen} from '../screens/session.screen';
import {HomeScreen} from '../screens/home.screen';

interface RoutesProps {}

const Stack = createStackNavigator<AuthParamList>();

export const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => null,
        }}
        initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SessionScreen" component={SessionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
