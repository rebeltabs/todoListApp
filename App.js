/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Dimensions,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

const ListElement = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [tasks, setTasks] = useState([]);

  const [currentTask, setCurrentTask] = useState('');

  const [isEditing, setIsEditing] = useState(false);

  const handleTaskAdd = () => {
    setTasks([...tasks, currentTask]);
    setCurrentTask('');
  };

  const handleRemove = () => {};
  const handleEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.app]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.titleRegion}>
        <Text style={styles.sectionTitle}>ToDoor</Text>
        <Button title="x" onPress={handleEditing} />
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[backgroundStyle]}>
        {tasks.map((task, id) => (
          <View key={id}>
            <Text style={[styles.inputField]}>{task}</Text>
            {isEditing && <Button title="x" />}
          </View>
        ))}

        <View>
          <TextInput
            onSubmitEditing={handleTaskAdd}
            value={currentTask}
            onChangeText={input => setCurrentTask(input)}
            placeholder="+ Add task to do"
            style={[styles.inputField]}></TextInput>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    height: 100 * vh,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    color: Colors.dark,
    fontSize: 32,
    fontWeight: '800',
    margin: 2 * vh,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  inputField: {
    borderRadius: 2 * vh,
    color: Colors.dark,
    fontWeight: '700',
    fontSize: 18,
    borderWidth: 3,
    padding: 3 * vw,
    height: 6 * vh,
    margin: 10,
  },
  titleRegion: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default App;
