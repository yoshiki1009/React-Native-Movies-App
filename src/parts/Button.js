import * as React from 'react'
import { Button } from 'react-native-paper'

const SearchButton = (props) => (
  <Button
    icon="magnify"
    mode="contained"
    onPress={() => {
      props.onPress()
      props.validation()
    }}
    color={'#00B6D4'}
    labelStyle={{ color: 'white', fontSize: 16 }}
  >
    Search
  </Button>
)

export default SearchButton
