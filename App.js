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

import Icon from 'react-native-vector-icons/FontAwesome';

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

  const [tasks, setTasks] = useState([
    { title: 'Servus', checked: false },
    { title: 'Do the UI', checked: true },
    { title: 'Refactorize', checked: false },
  ]);

  const [currentTask, setCurrentTask] = useState('');

  const [isEditing, setIsEditing] = useState(false);

  const handleTaskAdd = () => {
    let tempTask = {
      title: currentTask,
      checked: false,
    };

    if (tempTask.checked !== '') {
      setTasks([...tasks, tempTask]);
      setCurrentTask('');
    }
  };

  const handleRemove = id => {
    setTasks(tasks.filter((value, index, arr) => index !== id));
  };
  const handleEditing = () => {
    setIsEditing(!isEditing);
  };
  const handleCheck = id => {
    let updatedTasks = [];
    tasks.forEach((task, index) => {
      updatedTasks.push({
        title: task.title,
        checked: index == id ? !task.checked : task.checked,
      });
    });
    setTasks(updatedTasks);
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.app]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.titleRegion}>
        <Text style={styles.sectionTitle}>ToDoor</Text>
        <Icon
          name="edit"
          onPress={handleEditing}
          style={styles.editButton}
          size={26}
        />
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[backgroundStyle]}>
        {tasks.map((task, id) => (
          <View key={id} style={[styles.listElement]}>
            {!isEditing && (
              <Icon
                name={task.checked === true ? 'check-square' : 'square-o'}
                onPress={() => handleCheck(id)}
                style={styles.listElementButton}
                size={18}
              />
            )}
            <Text style={[styles.listElementText]}>{task.title}</Text>
            {isEditing && (
              <Icon
                name="close"
                onPress={() => handleRemove(id)}
                style={styles.listElementButton}
                size={18}
              />
            )}
            {/* {!isEditing ? (
              <Text style={[styles.inputField]}>{task}</Text>
            ) : (
              <TextInput
                style={[styles.inputField]}>
                {task}
              </TextInput>
            )} */}
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
    color: Colors.darker,
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
    fontWeight: '700',
    fontSize: 18,
    borderRadius: 2 * vh,
    color: Colors.darker,
    borderWidth: 3,
    padding: 3 * vw,
    height: 6 * vh,
    margin: 10,
  },
  listElement: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 2 * vh,
    borderWidth: 3,
    padding: 3 * vw,
    margin: 10,
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

export default App;
