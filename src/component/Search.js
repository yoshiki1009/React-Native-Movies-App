import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { Button } from 'react-native-paper'

const Search = (props) => {
  return (
    <TouchableOpacity>
      <View>
        <Text> This is Search Screen</Text>
        <Button title="More Details" onPress={() => props.navigation.navigate('ItemDetail')}>
          Click
        </Button>
      </View>
    </TouchableOpacity>
  )
}

export default Search
