import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Title from './title'
import TinyCards from './tinyCards'

const HorizontalList = ({title,data}) => {
  return (
    <>
<Title size={20}>{title}</Title>
<FlatList data={data} keyExtractor={item=>item.id} 
horizontal 
showsHorizontalScrollIndicator={false}
    renderItem={({item})=><TinyCards item={item} />}
/>
    </>
  )
}

export default HorizontalList