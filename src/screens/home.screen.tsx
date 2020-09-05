import React, {useCallback, useEffect, useState} from 'react';
import {Text, Button, StatusBar, View, TouchableOpacity} from 'react-native';
import {Header} from '../components/header.component';
import {AuthNavProps} from '../_core/services/auth.service';
import {Center} from '../styles/center.style';
import {ListModel} from '../_core/models/list.model';
import {getData, Entities} from '../_core/services/storage.service';
import {ListStyle} from '../styles/list.style';
import {ListView} from '../components/listview.component';
import {DAL} from '../_core/services/database.service';
import * as ListService from '../_core/services/list.service';
import TestDB from '../db';
import {Session} from '../_core/entities/session.entity';
import {getDate} from 'date-fns';

export const HomeScreen = ({navigation, route}: AuthNavProps<'HomeScreen'>) => {
  const [data, setState] = useState<ListModel[]>([]);

  const getData = async () => {
    let data: Session[] = await ListService.getSession();
    setState(data.reverse());
  };

  useEffect(() => {
    getData();
  }, []);

  const log = (param: string) => {
    console.log(`${param}::Data: ${data.length}, triggered: `);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={ListStyle.body}>
        <Header subTitle={route.name} />
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={ListStyle.nextSession}
          onPress={() => {
            // @ts-ignore
            // navigation.navigate('SessionScreen', {
            // sessionID: 'New Session',E
            // });
            ListService.setSession();
            console.log('HomeScreen::On Press::ListService');
            log('Save');
          }}>
          <View>
            <Text style={ListStyle.text}>Next Session</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={ListStyle.nextSession}
          onPress={() => {
            getData();
            log('Load');
          }}>
          <View>
            <Text style={ListStyle.text}>getData</Text>
          </View>
        </TouchableOpacity>
        <ListView list={data}></ListView>
      </View>
    </>
  );
};
