import React, { useState } from 'react'
import { View, Picker, StyleSheet } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'

const ContentsPicker = (props) => {
  return <RNPickerSelect onValueChange={(e) => props.onValueChange(e)} items={props.items} />
}

export default ContentsPicker
