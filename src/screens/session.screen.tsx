import React from 'react';
import {Text, StatusBar, View, TouchableOpacity} from 'react-native';

import {AuthNavProps} from '../_core/services/auth.service';
import {getData, Entities} from '../_core/services/storage.service';

import {ListModel} from '../_core/models/list.model';
import {Header} from '../components/header.component';
import {ListView} from '../components/listview.component';

import {ListStyle} from '../styles/list.style';

interface sessionProps {}

export function SessionScreen({
  navigation,
  route,
}: AuthNavProps<'SessionScreen'>) {
  const DATA: ListModel[] = getData(Entities.LIST);
  // console.log(route.params);
  var sessionID;
  if (!(route.params == '')) {
    sessionID = route.params;
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={ListStyle.body}>
        <Header subTitle={route.name} />
      </View>
      <View style={{flex: 1}}>
        <View style={ListStyle.nextSession}>
          <TouchableOpacity>
            <Text
              onPress={() => {
                navigation.navigate('HomeScreen');
              }}
              style={ListStyle.text}>
              sessionID: {JSON.stringify(sessionID)}
            </Text>
          </TouchableOpacity>
        </View>
        <ListView list={DATA}></ListView>
      </View>
    </>
  );
}
