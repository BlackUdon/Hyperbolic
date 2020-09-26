import {StyleSheet} from 'react-native';

export const ListStyle = StyleSheet.create({
  body: {
    backgroundColor: 'white',
  },
  nextSession: {
    backgroundColor: '#40618E',
    padding: 30,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },

  darktext: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  modalbody: {
    backgroundColor: '#DADDD8',
    borderRadius: 20,
  },
  modalButton: {
    backgroundColor: '#363732',
    // borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
