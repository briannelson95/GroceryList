import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import React, { Component, useEffect, useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput, FlatList, TouchableOpacity, Pressable } from 'react-native';
import { FIRESTORE_DB } from '../../firebaseConfig';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons'

export interface Todo {
    title: string;
    done: boolean;
    id: string;
}

const List = ({ navigation }: any) => {
    const [todos, setTodos] = useState<any[]>([]);
    const [todo, setTodo] = useState('')

    useEffect(() => {
        const todoRef = collection(FIRESTORE_DB, 'todos')

        const subscriber = onSnapshot(todoRef, {
            next: (snapshot) => {
                const todos: Todo[] = [];
                snapshot.docs.forEach(doc => {
                    todos.push({
                        id: doc.id,
                        ...doc.data()
                    } as Todo)
                })
                setTodos(todos);
            }
        })

        return () => subscriber();
    }, []);

    const addTodo = async () => {
        const doc = await addDoc(collection(FIRESTORE_DB, 'todos'), { title: todo, done: false});
        setTodo('')
    }

    const renderTodo = ({ item }: any) => {
        const ref = doc(FIRESTORE_DB, `todos/${item.id}`)
        const toggleDone = async() => {
            updateDoc(ref, { done: !item.done })
        }

        const deleteItem = async() => {
            deleteDoc(ref)
        }

        return (
            <View style={styles.todoContainer}>
                <TouchableOpacity onPress={toggleDone} style={styles.todo}>
                    {item.done ? <Ionicons name='md-checkmark-circle' size={32} color="#008800" /> : <Entypo name="circle" size={32} color="#000" /> }
                    <Text key={item.id} style={styles.todoText}>{item.title}</Text>
                </TouchableOpacity>
                <Ionicons name="trash-bin-outline" size={32} color="#ff0000" onPress={deleteItem} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <TextInput
                    placeholder='Add new todo'
                    onChangeText={(text: string) => setTodo(text)}
                    value={todo}
                    style={styles.input}
                />
                <Pressable style={styles.button} onPress={addTodo} disabled={todo === ''}>
                    <Text style={styles.buttonText}>Add Todo</Text>
                </Pressable>
            </View>

            { todos.length > 0 && (
                <FlatList
                    data={todos}
                    renderItem={renderTodo}
                    keyExtractor={(todo: Todo) => todo.id}
                />
            )}
            
        </View>
    )
};

export default List;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    form: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        alignSelf: 'flex-end'
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff',
        marginEnd: 4,
    },
    button: {
        backgroundColor: '#0088ff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3
    },
    buttonText: {
        fontSize: 14,
        color: '#fff'
    },
    todoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 4
    },
    todoText: {
        flex: 1,
        paddingHorizontal: 4,
        fontSize: 18,
    },
    todo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    }
})
