import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Subtitle from './subtitle';
import Title from './title';
//import {thumbnail,title,description}from '../assets/data'

const FlatList = ({styled,imageStyle,item}) => {
    const {thumbnail,title,description}=item
    return (
        <View style={styles.container}>
        <Image style={styles.image} source={{uri:thumbnail}}/>
            <View style={styles.content}>
                <Title>{title}</Title>
                <Subtitle>{description}</Subtitle>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:"white",
        borderRadius:8,
        overflow:'hidden',
        marginBottom:10,
        height:80,
    },
    image:{
flex:0.35,
height:'100%'
    },
    content:{
        flex:0.65,
        paddingHorizontal:5
    }
})
export default FlatList;
