import React, { Component } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FIREBASE_AUTH, provider } from "../../firebaseConfig"

const Login = () => {
    const signUp = async() => {
        signInWithPopup(FIREBASE_AUTH, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result)
                const token = credential.accessToken;
                const user = result.user;
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error)
            })
    };

    const signIn =async () => {
        
    };

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Grocery App</Text>
            <Pressable style={styles.button} onPress={signUp}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>
            <Pressable style={styles.signIn} onPress={signIn}>
                <Text style={{fontSize: 14}}>Log In</Text>
            </Pressable>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 24,
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

