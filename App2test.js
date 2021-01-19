import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'


export default function App() {


const [afficher, setAfficher] = useState(false);

const handlePress = function () {
    setAfficher(!afficher)
}
return (
    <View style={styles.container}>
      <Header title="Blackjack app" />
      <View style={styles.body}>
        {afficher === true &&
          <Text>Coucou</Text>
        }
        <Button title={afficher === false ? "Afficher" : "Cacher"} onPress={handlePress} />
      </View>
      <StatusBar style="auto"/>
    </View>
);
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    body: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'red',
    }
});