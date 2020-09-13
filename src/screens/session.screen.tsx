import React, {useEffect, useState} from 'react';
import {Text, StatusBar, View, TouchableOpacity} from 'react-native';

import {AuthNavProps} from '../_core/services/auth.service';
import {getData, Entities} from '../_core/services/storage.service';

import {ListModel} from '../_core/models/list.model';
import {Header} from '../components/header.component';
import {ListView} from '../components/listview.component';

import {ListStyle} from '../styles/list.style';
import * as ListService from '../_core/services/session.service';

export function SessionScreen({
  navigation,
  route,
}: AuthNavProps<'SessionScreen'>) {
  // console.log('===ScreeSession===');
  const [id, setID] = useState(0);

  let temp: Number = 0;

  const getSessionID = async () => {
    ListService.setSession()
      .then((res) => {
        // console.log(`ScreeSession::getSessionID::ResultID::${res}`);
        temp = Number(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const {sessionID}: any = route.params;
    setID(sessionID);
    // console.log(`ScreeSession::useEffect::sessionID::${id}`);
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={ListStyle.body}>
        <Header subTitle={route.name} />
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}>
          <View style={ListStyle.nextSession}>
            <Text style={ListStyle.text}>sessionID: {id}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={ListStyle.nextSession}>
            <Text style={ListStyle.text}>add</Text>
          </View>
        </TouchableOpacity>
        {/* <ListView list={DATA}></ListView> */}
      </View>
    </>
  );
}
