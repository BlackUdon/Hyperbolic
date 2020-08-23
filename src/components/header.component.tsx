import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {Constants} from 'react-native-unimodules';

type HeaderProps = {
  title: string;
  subTitle: string;
} & typeof defaultProps;

//Default prop
const defaultProps = {
  title: 'Hyperbolic',
  subTitle: 'Gains',
};

export const Header = ({title, subTitle}: HeaderProps) => {
  return (
    <>
      <View>
        <StatusBar backgroundColor="#23395B" barStyle="light-content" />
        <Text style={styles.header}>
          {title} - <Text style={styles.text}>{subTitle} </Text>
        </Text>
      </View>
    </>
  );
};

Header.defaultProps = defaultProps;

const styles = StyleSheet.create({
  header: {
    height: 40,
    padding: 0,
    backgroundColor: '#23395B',
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default Header;
