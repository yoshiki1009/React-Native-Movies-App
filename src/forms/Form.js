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
      style={[props.validation && styles.validationBorder, styles.search]}
    />
  )
}

const styles = StyleSheet.create({
  validationBorder: {
    borderWidth: 2,
    borderColor: 'red',
  },
  search: {
    height: 30,
    backgroundColor: 'rgba(171, 159, 166, 0.17)',
  },
})

export default Form
