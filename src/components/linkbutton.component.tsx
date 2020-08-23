import {useLinkProps} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const LinkButton = ({to, action, children, ...rest}: any) => {
  const {onPress, ...props} = useLinkProps({to, action});
  // const [isHovered, setIsHovered] = React.useState(false);
  return (
    <TouchableOpacity onPress={onPress} {...props} {...rest}>
      <View style={{flex: 1}}>{children}</View>
    </TouchableOpacity>
  );
};
