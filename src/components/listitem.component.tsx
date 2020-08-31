import React from 'react';
import {View, Text} from 'react-native';
import {ItemStyle} from './../styles//item.style';
import {ListItemModel} from './../_core/models/listitem.model';
import {LinkButton} from './linkbutton.component';
import {StackActions} from '@react-navigation/native';

export function ListItemComponent(props: ListItemModel): JSX.Element {
  const {id, ...rest} = props;
  // console.log('item');
  // console.log(rest.item.Date);

  return (
    <>
      <LinkButton
        // to="SessionScreen"
        action={StackActions.replace('SessionScreen', {
          sessionID: rest.item.id,
        })}>
        <View style={ItemStyle.previousSession}>
          <Text style={ItemStyle.text}>Previous Session {id}</Text>
          <Text style={ItemStyle.text}>{rest.item.Date}</Text>
        </View>
      </LinkButton>
    </>
  );
}
