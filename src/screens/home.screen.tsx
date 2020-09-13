import React, {useCallback, useEffect, useState} from 'react';
import {Text, Button, StatusBar, View, TouchableOpacity} from 'react-native';
import {Header} from '../components/header.component';
import {AuthNavProps} from '../_core/services/auth.service';
import {ListModel} from '../_core/models/list.model';
import {ListStyle} from '../styles/list.style';
import {ListView} from '../components/listview.component';
import * as ListService from '../_core/services/session.service';

export const HomeScreen = ({navigation, route}: AuthNavProps<'HomeScreen'>) => {
  console.log(`===HomeScreen===`);
  const [list, getList] = useState<ListModel[]>([]);

  const getData = async () => {
    let data: ListModel[] = await ListService.getSession();
    getList(data.reverse());
    console.log(`HomeScreen::getData::${list.length}`);
  };
  const getSessionID = async () => {
    const id = ListService.setSession()
      .then((res) => {
        console.log(`HomeScreen::HomeSessionID::${res}`);
        // sessionID = Number(res);
        // @ts-ignore
        navigation.navigate('SessionScreen', {
          sessionID: Number(res),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    //Make sure to load new data when navigating back to home
    const test = navigation.addListener('focus', () => {
      getData();
    });
    console.log(`HomeScreen::useEffect::Test::count${list.length}`);
  }, [navigation]);

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
            getSessionID();
          }}>
          <View>
            <Text style={ListStyle.text}>Next Session</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={ListStyle.nextSession}
          onPress={() => {
            getData();
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
