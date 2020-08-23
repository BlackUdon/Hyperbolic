import {listenerCount} from 'process';
import React from 'react';
import {FlatList} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {ListItemComponent} from './listitem.component';

export const ListView = (props: {list: any[]}) => {
  let a = props.list;
  console.log('listv');
  console.log(a[0]);
  return (
    <>
      <FlatList<any>
        // keyExtractor={(item) => item.id}
        data={a}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({item, separators}) => (
          <TouchableHighlight
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
            <ListItemComponent id={item.id} item={{...item}} />
          </TouchableHighlight>
        )}></FlatList>
    </>
  );
};
