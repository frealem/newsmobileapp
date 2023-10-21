import React from 'react';
import {View, StyleSheet,Dimensions} from 'react-native';
import Card from './Card';

const TinyCards = ({item}) => {
    return (
        <View>
            <Card item={item}styled={styles.container} imageStyle={styles.smallImg}/>
        </View>
    );
}

const {width}=Dimensions.get('window')
const styles = StyleSheet.create({
    container:{
width:width/2,
height:200,
marginRight:15,
marginTop:10,
    },
    smallImg:{
        height:100,
    }
})

export default TinyCards;
