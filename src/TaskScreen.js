import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderBar from './HeaderBar';
import TaskList from './TaskList';

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

Icon.loadFont();
const TaskScreen = () => {
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
      <HeaderBar handleEditing={handleEditing}></HeaderBar>
      <TaskList
        tasks={tasks}
        handleRemove={handleRemove}
        handleCheck={handleCheck}
        isEditing={isEditing}></TaskList>
      <View>
        <TextInput
          onSubmitEditing={handleTaskAdd}
          value={currentTask}
          onChangeText={input => setCurrentTask(input)}
          onPressIn={() => setIsEditing(false)}
          placeholder="+ Add task to do"
          style={[styles.inputField]}></TextInput>
      </View>
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
    color: Colors.darker,
    borderRadius: 4 * vw,
    borderWidth: 0.8 * vw,
    padding: 3 * vw,
    margin: 2 * vw,
  },
});

export default TaskScreen;
