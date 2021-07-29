import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { vh, vw } from './ConstFile';

const ListElement = ({ task, id, handleCheck, handleRemove, isEditing }) => {
  return (
    <View key={id} style={[styles.listElement]}>
      {!isEditing && (
        <TouchableOpacity>
          <Icon
            name={task.checked === true ? 'check-square' : 'square-o'}
            onPress={() => handleCheck(id)}
            style={styles.listElementButton}
            size={18}
          />
        </TouchableOpacity>
      )}
      <Text style={[styles.listElementText]}>{task.title}</Text>
      {isEditing && (
        <TouchableOpacity>
          <Icon
            name="close"
            onPress={() => handleRemove(id)}
            style={styles.listElementButton}
            size={18}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  listElement: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 4 * vw,
    borderWidth: 0.8 * vw,
    padding: 3 * vw,
    margin: 2 * vw,
  },
  listElementText: {
    fontWeight: '700',
    fontSize: 18,
    color: Colors.darker,
    alignSelf: 'center',
  },
  listElementButton: {
    display: 'flex',
    paddingLeft: 0.3,
    backgroundColor: '#0000',
    marginRight: 0,
    alignSelf: 'center',
  },
});

export default ListElement;
