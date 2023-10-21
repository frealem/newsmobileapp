import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Title from './title'
import FlatList from './Flatlist'

const DownList = ({title,data}) => {
  return (
    <View>
      <Title >{title}</Title>
      <View style={styles.container}>
        {data.map(item=>(<FlatList item={item} key={item.id}/>))}
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        marginVertical:15,
    }
})

export default DownList