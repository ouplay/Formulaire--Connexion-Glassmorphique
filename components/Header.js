import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header(props) {
    return (
        <View style={styles.header}>
            <Text style={styles.appTitle}>
                {props.title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#5E2EFE',
        width:'100%',
        height: '50px',
        justifyContent: "center",
        alignItems:'center',
        margin:0,

        
        
    },
    appTitle: {
        color:'#FFF',
    }
})