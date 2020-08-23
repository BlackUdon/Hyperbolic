import React from 'react';
import {Text, Button, StatusBar, View, TouchableOpacity} from 'react-native';
import {Header} from '../components/header.component';
import {AuthNavProps} from '../_core/services/auth.service';
import {Center} from '../styles/center.style';
import {ListModel} from '../_core/models/list.model';
import {getData, Entities} from '../_core/services/storage.service';
import {ListStyle} from '../styles/list.style';
import {ListView} from '../components/listview.component';
import DAL from '../_core/services/database.service';
import TestDB from '../db';

interface homeProps {}

export function HomeScreen({navigation, route}: AuthNavProps<'HomeScreen'>) {
  const DATA: ListModel[] = getData(Entities.LIST);

  // const testDATA: ListModel[] = TestDB();
  // console.log(`HomeScreen - TestCT: ${testDATA[0]}`);
  // console.log(testDATA[0]);

  const dalDATA: ListModel[] = DAL();
  console.log(`HomeScreen - Data: ${dalDATA[0]}`);
  console.log(dalDATA[0]);

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
              }}
              style={ListStyle.text}>
              Next Session
            </Text>
            {/* <CT></CT> */}
            {/* <TestDB></TestDB> */}
          </TouchableOpacity>
        </View>
        <ListView list={dalDATA}></ListView>
      </View>
    </>
  );
}
