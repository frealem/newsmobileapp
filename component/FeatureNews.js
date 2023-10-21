import React from 'react';
import {View, StyleSheet} from 'react-native';
import Card from './Card';
import TinyCards from './tinyCards';

const FeatureNews = ({item}) => {
    return (
        <View>
            <Card item={item} style={{marginVertical:15}}/>
           
        </View>
    );
}
const styles = StyleSheet.create({})

export default FeatureNews;
