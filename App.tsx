import React, { useEffect } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

export default function App() {
  useEffect(() => {
    async function authenticate() {

      const hasPassword = await LocalAuthentication.isEnrolledAsync();

      if (!hasPassword) return;

      const { success } = await LocalAuthentication.authenticateAsync({ promptMessage: 'Autentique-se' });

      if (success) {
        Alert.alert('Autenticação realizada com sucesso!');
      } else {
        Alert.alert('A autenticação falhou. Por favor, digite a sua senha!');
      }
    }
    { LocalAuthentication.hasHardwareAsync && authenticate() };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#444" />
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#444" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2d2d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 60,
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#d4d4d4',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    fontSize: 16
  },
  button: {
    width: '80%',
    height: 60,
    backgroundColor: '#a07c05',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: "center",
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: "bold"
  }
});
