import React, { Component, useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { FIREBASE_AUTH, provider } from "../../firebaseConfig"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();
    
    const signUp = async() => {
        const after = await createUserWithEmailAndPassword(auth, email, password);
        console.log('Success');
        alert('Check your email')
    };

    const signIn =async () => {
        const user = await signInWithEmailAndPassword(auth, email, password)
    };

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Grocery App</Text>
            <View style={styles.form}>
                <TextInput
                    placeholder='Email'
                    onChangeText={(text: string) => setEmail(text)}
                    value={email}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Password'
                    textContentType='password'
                    onChangeText={(text: string) => setPassword(text)}
                    value={password}
                    style={styles.input}
                />
                <Pressable style={styles.button} onPress={signUp}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </Pressable>
                <Pressable style={styles.signIn} onPress={signIn}>
                    <Text style={{fontSize: 14}}>Log In</Text>
                </Pressable>
            </View>
           
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

