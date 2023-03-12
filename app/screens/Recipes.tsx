import React, { Component, useState } from 'react'
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

const createRecipe = () => {
    return (
        <View style={styles.overlay}>
            <Text>Hello world</Text>
        </View>
    )
}

const Recipes = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>Create Recipe</Text>
            </Pressable>
            <Text> textInComponent </Text>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Recipes;

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    button: {
        backgroundColor: '#0088ff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        marginVertical: 2,
    },
    buttonText: {
        fontSize: 14,
        color: '#fff'
    },
    overlay: {
        zIndex: 999,
        backgroundColor: '#ff00ff',
        display: 'none'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
})
