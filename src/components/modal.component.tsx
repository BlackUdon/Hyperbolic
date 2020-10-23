import React, {forwardRef, useState} from 'react';
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

export const ModalTest = forwardRef((props, ref) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setvalue] = useState('');
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert('Value');
          setModalVisible(!modalVisible);
        }}>
        <View style={ListStyle.modalbody}>
          <View style={ListStyle.modalView}>
            <Text style={ListStyle.darktext}>Enter Name</Text>

            <TextInput
              placeholder={'Name'}
              style={{fontSize: 20, borderBottomColor: 'gray'}}
              onChangeText={(text) => setvalue(text)}
              value={value}></TextInput>
            <TouchableHighlight
              style={{...ListStyle.modalButton, backgroundColor: '#79A4A4'}}
              onPress={() => {
                if (ref) {
                  ref.current = value;
                }
                console.log(`Modal::ref.current`);
                setModalVisible(!modalVisible);
                return ref;
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
});
