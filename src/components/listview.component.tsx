import {listenerCount} from 'process';
import React from 'react';
import {FlatList} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {ListItemComponent} from './listitem.component';

export const ListView = (props: {list: any[]}): JSX.Element => {
  let a = props.list;
  // console.log('list view');
  // console.log(a[0]);
  const onRefresh = () => {};
  return (
    <>
      <FlatList<any>
        // keyExtractor={(item) => item.id}
        data={a}
        inverted={false}
        invertStickyHeaders={false}
        keyExtractor={(item, index) => item.ID.toString()}
        renderItem={({item, separators}) => (
          <TouchableHighlight
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
            <ListItemComponent id={item.ID} item={{...item}} />
          </TouchableHighlight>
        )}
        // onRefresh={() => onRefresh()}
      ></FlatList>
    </>
  );
};
