import React, { Component, useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import auth from '@react-native-firebase/app';

const Login = () => {
    const [user, setUser] = useState(null);
    const [initializing, setInitializing] = useState(true);

    function onAuthStateChanged() {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, [])

    return (
        <View style={styles.container}>
            {!user 
                ? <Text>Login</Text>
                : <Text>Welcome {user.email}</Text>
            }
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    form: {
        flexDirection: 'column',
        marginVertical: 20,
    },
    logo: {
        fontSize: 32,
        fontWeight: "bold",
        justifyContent: 'center',
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff',
        marginVertical: 4,
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
    signIn: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        marginVertical: 2,
    }
})

function useAuthState(auth: any): [any] {
    throw new Error('Function not implemented.');
}

