import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HorizontalList from './horizaontal'

const BreakNews = ({data}) => {
  return (
    <HorizontalList title='Breaking News'  data={data}/>
  )
}

export default BreakNews

const styles = StyleSheet.create({})