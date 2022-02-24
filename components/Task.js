import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Task({ task, updateTask, removeTask }) {
    return (

        <TouchableOpacity style={styles.wrapper} hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }} onPress={updateTask}>
            <View style={[styles.checkBox, task.isDone ? { backgroundColor: '#007DB6' } : { backgroundColor: 'white' }]}>
                {task.isDone ?
                    <Image style={styles.checkBoxIcon} source={require('../assets/icon-check.png')}></Image>
                    : null}
            </View>

            <Text style={styles.titleText}> {task.title}</Text>
            <TouchableOpacity onPress={removeTask}>
                <Image style={styles.deleteIcon} source={require('../assets/icon-del.png')}></Image>
            </TouchableOpacity>
            {/* <View></View> */}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    wrapper: {

        padding: 15,
        elevation: 10,
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center'

    },

    titleText: {

        fontWeight: 'bold',
        fontSize: 12,
        flex: 1

    },

    checkBox: {

        width: 25,
        height: 25,
        borderRadius: 100,
        marginRight: 5,
        borderColor: '#007DB6',
        backgroundColor: 'white',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    checkBoxIcon: {
        width: 10,
        height: 10,
        tintColor: 'white'
    },
    deleteIcon: {
        width: 20,
        height: 20,
        tintColor: '#007DB6'

    }







});
