import React from 'react';
import {View, StyleSheet,StatusBar, ScrollView} from 'react-native';

const Screen = ({children}) => {
    return (
        <ScrollView style={styles.container}>
            {children}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight,
        paddingHorizontal:15,
    }
})

export default Screen;
