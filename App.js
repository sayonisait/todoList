import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native';
import TaskList from './components/TaskList';
import { useState } from 'react';
import { } from 'react-native-web';

export default function App() {


  const [tasks, setTasks] = useState([
    { title: 'Send Report', isDone: false, id: 0 },
    { title: 'Cook Dinner', isDone: false, id: 1 },
    // { title: 'Pay Bills', isDone: false, id: 2 }
  ]);

  const [newTask, setNewTask] = useState('');

  const removeTask = (index) => {
    let copy = [ ...tasks ];
    copy.splice(index, 1)
    setTasks(copy);
  }

  const updateTask = (index) => {
    let item = tasks[index]
    item.isDone = !item.isDone;
    setTasks([...tasks])
  }

  const addTask = () => {
    setTasks([{
      title: newTask,
      isDone: false
    }, ...tasks]);
    setNewTask('');
  }


  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>My Tasks</Text>
      </View>

      <TaskList tasks={tasks} updateTask={updateTask} removeTask={removeTask} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.textInputWrapper}>
          <TextInput
            value={newTask}
            onChangeText={(text) => setNewTask(text)}
            style={styles.textInput}
            placeholder='please enter your task' />
          <TouchableOpacity
            onPress={addTask}
            style={styles.addButton}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7F3FF',
    paddingBottom: 50
  },
  title: {
    padding: 20,
    paddingTop: 80,
    backgroundColor: '#007DB6'

  },

  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  },

  textInput: {
    borderRadius: 10,
    elevation: 10,
    flex: 1,
    padding: 10
  },

  textInputWrapper: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    elevation: 10,
    flexDirection: 'row'
  },

  addButton: {
    backgroundColor: '#007DB6',
    padding: 15,
    elevation: 10,
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10

  },
  addButtonText: {
    fontWeight: 'bold',
    color: 'white'
  },


});
