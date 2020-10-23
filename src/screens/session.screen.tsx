import React, {useEffect, useState, useRef, createRef} from 'react';
import {Text, StatusBar, View, TouchableOpacity, Alert} from 'react-native';

import {AuthNavProps} from '../_core/services/auth.service';
import {getData, Entities} from '../_core/services/storage.service';

import {ListModel} from '../_core/models/list.model';
import {Header} from '../components/header.component';
import {ListView} from '../components/listview.component';

import {ListStyle} from '../styles/list.style';
import * as ListService from '../_core/services/session.service';
import * as ExerciseService from '../_core/services/exercise.service';

import * as Modal from '../components/modal.component';
import {title} from 'process';

export const SessionScreen = ({
  navigation,
  route,
}: AuthNavProps<'SessionScreen'>) => {
  // console.log('===ScreeSession===');
  const [id, setID] = useState(0);

  let numNewID: Number = 0;
  let listExercise: ListModel[] = [];
  const addExercise = async () => {
    ExerciseService.setExercise()
      .then((res) => {
        // console.log(`ScreeSession::getSessionID::ResultID::${res}`);
        numNewID = Number(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getExercise = async () => {
    ExerciseService.getExercise()
      .then((res) => {
        // console.log(`ScreeSession::getSessionID::ResultID::${res}`);
        listExercise = res;
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

  const ref = createRef();

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
        <TouchableOpacity
          onPress={() => {
            // addExercise();
            // getExercise();
            console.log(`This Value::${ref}`);
          }}>
          <View style={ListStyle.nextSession}>
            <Text style={ListStyle.text}>Go</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            // Alert.alert('hey', 'now');
            // Alert.prompt(
            //   'Enter password',
            //   'Enter your password to claim your $1.5B in lottery winnings',
            //   [
            //     {
            //       text: 'Cancel',
            //       onPress: () => console.log('Cancel Pressed'),
            //       style: 'cancel',
            //     },
            //     {
            //       text: 'OK',
            //       onPress: (password) =>
            //         console.log('OK Pressed, password: ' + password),
            //     },
            //   ],
            //   'secure-text',
            // );
          }}>
          <View style={ListStyle.nextSession}>
            <Text style={ListStyle.text}> Alert</Text>
          </View>
        </TouchableOpacity>
        <Modal.ModalTest ref={ref}></Modal.ModalTest>

        {/* <ListView list={listExercise}></ListView> */}
      </View>
    </>
  );
};
