// app/login.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (!username && !password) {
            setError('Username and Password are required');
        } else if (!username) {
            setError('Username is required');
        } else if (!password) {
            setError('Password is required');
        } else {
            setError('');
            // Handle successful login
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title} testID="title">Login</Text>
            <TextInput
                placeholder="Username"
                style={styles.input}
                onChangeText={setUsername}
                testID="usernameInput"
                value={username}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.input}
                onChangeText={setPassword}
                testID="passwordInput"
                value={password}
            />
            <Button title="Login" onPress={handleLogin} testID="loginButton" />
            {error ? <Text testID="errorText">{error}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});
