import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DownList from './DownList'

const TechNews = ({data}) => {
  return (
    <DownList title="Technology News" data={data}/>
  )
}

export default TechNews

const styles = StyleSheet.create({})