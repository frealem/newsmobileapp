import React from 'react';
import {View, StyleSheet,Text} from 'react-native';

const Title = ({children ,numberOfLines=2,size=18}) => {
    return (
        <Text numberOfLines={numberOfLines} style={{fontSize:size,fontWeight:"bold"}}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
})

export default Title;
