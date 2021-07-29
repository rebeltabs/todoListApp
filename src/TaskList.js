import React from 'react';
import {
  ScrollView,
  ScrollViewStickyHeader,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ListElement from './ListElement';
import { vh, vw } from './ConstFile';

const TaskList = ({ tasks, handleRemove, handleCheck, isEditing }) => {
  return (
    <ScrollView style={[{ maxHeight: tasks.length * (vw * 11.6 + 25) }]}>
      {tasks.map((task, id) => (
        <ListElement
          key={id}
          task={task}
          id={id}
          handleRemove={handleRemove}
          handleCheck={handleCheck}
          isEditing={isEditing}></ListElement>
      ))}
    </ScrollView>
  );
};

export default TaskList;
