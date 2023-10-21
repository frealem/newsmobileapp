import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Subtitle from './subtitle';
import Title from './title';
//import {thumbnail,title,description}from '../assets/data'

const Card = ({styled,imageStyle,item}) => {
    const {thumbnail,title,description}=item
    return (
        <View style={[styles.container,styled]}>
        <Image style={[styles.image,imageStyle]} source={{uri:thumbnail}}/>
            <View style={styles.content}>
                <Title>{title}</Title>
                <Subtitle>{description}</Subtitle>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:300,
        borderRadius:8,
        overflow:'hidden',
        
    },
    image:{
        width:"100%",
        height:200,
        borderRadius:10,
    },
    content:{
        padding:5,
    }
})

export default Card;
