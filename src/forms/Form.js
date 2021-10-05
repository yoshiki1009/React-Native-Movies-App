import React from 'react'
import { Searchbar } from 'react-native-paper'
import { StyleSheet } from 'react-native'

const Form = (props) => {
  // const [searchQuery, setSearchQuery] = useState('')
  // console.log(searchQuery)

  // const onChangeSearch = (query) => setSearchQuery(query)

  return (
    <Searchbar
      placeholder="i.e. James Bond, CSI"
      onChangeText={(e) => props.onChangeText(e)}
      value={props.searchQuery}
    />
  )
}

export default Form
