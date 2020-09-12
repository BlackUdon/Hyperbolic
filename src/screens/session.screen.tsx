import React, {useEffect, useState} from 'react';
import {Text, StatusBar, View, TouchableOpacity} from 'react-native';

import {AuthNavProps} from '../_core/services/auth.service';
import {getData, Entities} from '../_core/services/storage.service';

import {ListModel} from '../_core/models/list.model';
import {Header} from '../components/header.component';
import {ListView} from '../components/listview.component';

import {ListStyle} from '../styles/list.style';
import * as ListService from '../_core/services/list.service';

export function SessionScreen({
  navigation,
  route,
}: AuthNavProps<'SessionScreen'>) {
  console.log('====ScreeSession====');
  // const DATA: ListModel[] = getData(Entities.LIST);
  // console.log(route.params);
  let sessionID;
  if (!(route.params == '' || null)) {
    sessionID = route.params;
    console.log(`Screen::${sessionID}`);
  } else {
    console.log(`Screen::other::${route.params}`);
  }
  let temp;

  const getSessionID = async () => {
    ListService.setSession()
      .then((res) => {
        console.log(`ResultID::${res}`);
        temp = res;
        // setSessionID(res);
        console.log(temp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   ListService.setSession()
  //     .then((res) => {
  //       console.log(`ResultID::${res}`);
  //       temp = res;
  //       // setSessionID(temp);
  //       console.log(temp);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  if (temp) {
    return <></>;
  } else {
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
                // navigation.navigate('HomeScreen');
              }}
              style={ListStyle.text}>
              sessionID: {temp}
            </Text>
          </TouchableOpacity>
        </View>
        {/* <ListView list={DATA}></ListView> */}
      </View>
    </>
  );
}
