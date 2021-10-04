import React from 'react'
import { StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ContentsContainer from '../component/ContentsContainer'
import Search from '../component/Search'

const Tab = createMaterialTopTabNavigator()

const Section = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Movies" component={ContentsContainer} />
      <Tab.Screen name="Search Results" component={Search} />
      <Tab.Screen name="TV Shows" component={ContentsContainer} />
    </Tab.Navigator>
  )
}
export default Section
const styles = StyleSheet.create({})
