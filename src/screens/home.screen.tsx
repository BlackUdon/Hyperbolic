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
import {session} from 'electron';

export const HomeScreen = ({navigation, route}: AuthNavProps<'HomeScreen'>) => {
  const [list, getList] = useState<ListModel[]>([]);
  // const [sessionID, setSessionID] = useState(Number);
  let sessionID: Number;

  const getData = async () => {
    let data: ListModel[] = await ListService.getSession();
    getList(data.reverse());
  };
  const setData = async () => {
    getData();
    const id = ListService.setSession()
      .then((res) => {
        console.log(`HomeSessionID::${res}`);
        sessionID = Number(res);
      })
      .catch((err) => {
        console.log(err);
      });
    return id;
  };
  useEffect(() => {
    getData();
  }, []);

  const log = (param: string) => {
    console.log(`${param}::Data: ${list.length}, triggered: `);
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
            setData();
            console.log(`OnClick::${sessionID}`);
            // @ts-ignore
            navigation.navigate('SessionScreen', {
              sessionID: sessionID,
            });
            console.log(`OnClick::${sessionID}`);
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
            console.log('HomeScreen::On Press::ListService');
          }}>
          <View>
            <Text style={ListStyle.text}>Data</Text>
          </View>
        </TouchableOpacity>
        <ListView list={list}></ListView>
      </View>
    </>
  );
};
