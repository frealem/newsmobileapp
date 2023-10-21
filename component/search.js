import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React from 'react'

export const Search=() =>{
  return (
    <View>
   <View style={styles.container}><TextInput placeholder="search news" style={styles.searchBar}/></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:60,
        borderRadius:6,
        paddingLeft:10,
        marginHorizontal:-10
    },
    searchBar:{
        width:'100%',
        borderRadius:8,
        height:40,
        paddingLeft:10,
        borderColor:"#333",
        backgroundColor:"#ddd"
    }

})
