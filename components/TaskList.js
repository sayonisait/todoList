import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Task from './Task';

export default function TaskList({ tasks, updateTask, removeTask }) {

    return (

        <View style={styles.container}>
            <FlatList
                data={tasks}
                renderItem={({ item, index }) =>
                    <Task task={item} updateTask={() => updateTask(index)} removeTask={() => removeTask(index)} />}
                keyExtractor={(item) => item?.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#E7F3FF',
        padding: 10
    },
    list: {
        padding: 20,

    },



});
