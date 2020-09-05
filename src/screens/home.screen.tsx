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

export const HomeScreen = ({navigation, route}: AuthNavProps<'HomeScreen'>) => {
  // const testDATA: ListModel[] = TestDB();
  // console.log(`HomeScreen - TestCT: ${testDATA[0]}`);
  // console.log(testDATA[0]);

  const [a, setState] = useState<ListModel[]>([]);
  const [triggered, setTrigger] = useState<Boolean>(true);
  // const dal: ListModel[] = DAL('Session');
  // let dal: ListModel[] = ListService.getSession().then({});
  // console.log(`HomeScreen - Data: ${dal[0]}`);
  // console.log(dal[0]);

  const test = async () => {
    ListService.getSession()
      .then((res) => {
        if (triggered == true) {
          setState(res);
          setTrigger(false);
          log(2);
          return a;
        } else {
          log(3);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const log = (param: Number) => {
    console.log(`${param}::Data: ${a}, triggered: ${triggered}`);
  };

  if (test()) {
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
              // sessionID: 'New Session',
              // });
              ListService.setSession();
              console.log('HomeScreen::On Press::ListService');
              setTrigger(true);
              log(1);
            }}>
            <View>
              <Text style={ListStyle.text}>Next Session</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={ListStyle.nextSession}
            onPress={() => {
              test();
              log(4);
            }}>
            <View>
              <Text style={ListStyle.text}>Test</Text>
            </View>
          </TouchableOpacity>
          {/* <ListView list={dalDATA}></ListView> */}
          <ListView list={a}></ListView>
        </View>
      </>
    );
  } else {
    log(7);
  }
};
