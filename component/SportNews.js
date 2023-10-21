import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HorizontalList from './horizaontal'

const SportNews = ({data}) => {
  return (
    <HorizontalList title='Sport News' data={data}/>
  )
}

export default SportNews