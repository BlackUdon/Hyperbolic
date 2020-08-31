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

export function HomeScreen({navigation, route}: AuthNavProps<'HomeScreen'>) {
  // const testDATA: ListModel[] = TestDB();
  // console.log(`HomeScreen - TestCT: ${testDATA[0]}`);
  // console.log(testDATA[0]);

  const [a, setState] = useState<ListModel[]>([]);
  const [triggered, setTrigger] = useState<Boolean>(false);
  // const dal: ListModel[] = DAL('Session');
  // let dal: ListModel[] = ListService.getSession().then({});
  // console.log(`HomeScreen - Data: ${dal[0]}`);
  // console.log(dal[0]);

  ListService.getSession()
    .then((res) => {
      if (triggered == false) {
        setState(res);
        console.log('Got data');
      } else {
        console.log('No data');
      }
    })
    .catch((err) => {
      console.log(err);
    });

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
                // @ts-ignore
                // navigation.navigate('SessionScreen', {
                // sessionID: 'New Session',
                // });
                ListService.setSession();
                console.log('HomeScreen::On Press::ListService');
                setTrigger(true);
              }}
              style={ListStyle.text}>
              Next Session
            </Text>
          </TouchableOpacity>
        </View>
        {/* <ListView list={dalDATA}></ListView> */}
        <ListView list={a}></ListView>
      </View>
    </>
  );
}
