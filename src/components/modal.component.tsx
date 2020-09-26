import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {ListStyle} from '../styles/list.style';

export const ModalTest = (): JSX.Element => {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setvalue] = useState('Enter');
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={ListStyle.modalbody}>
          <View style={ListStyle.modalView}>
            <Text style={ListStyle.darktext}>Hello World!</Text>

            <TextInput
              style={{fontSize: 20, borderBottomColor: 'gray'}}
              onChangeText={(text) => setvalue(text)}
              value={value}></TextInput>
            <TouchableHighlight
              style={{...ListStyle.modalButton, backgroundColor: '#79A4A4'}}
              onPress={() => {
                setModalVisible(!modalVisible);
                return value;
              }}>
              <Text style={ListStyle.text}>Submit</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={ListStyle.modalButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={ListStyle.text}>Show Modal</Text>
      </TouchableHighlight>
    </>
  );
};
