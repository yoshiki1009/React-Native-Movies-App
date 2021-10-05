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
    height={'80%'}
    width={'40%'}
    labelStyle={{ color: 'white', fontSize: 14 }}
  >
    Search
  </Button>
)

export default SearchButton
