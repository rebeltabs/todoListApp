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

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

Icon.loadFont();

const HeaderBar = ({ handleEditing }) => {
  return (
    <View style={styles.titleRegion}>
      <Text style={styles.sectionTitle}>ToDoor</Text>
      <TouchableOpacity style={{ alignSelf: 'center' }}>
        <Icon
          name="edit"
          onPress={handleEditing}
          style={styles.editButton}
          size={26}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    color: Colors.darker,
    fontSize: 32,
    fontWeight: '800',
    margin: 2 * vh,
  },
  editButton: {
    display: 'flex',
    paddingLeft: 0.3,
    backgroundColor: '#0000',
    marginRight: 3 * vw,
    alignSelf: 'center',
  },
  titleRegion: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HeaderBar;
