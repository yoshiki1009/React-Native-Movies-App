import React, { useState } from 'react'
import { View, Picker, StyleSheet } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'

const ContentsPicker = (props) => {
  return (
    <RNPickerSelect
      onValueChange={(e) => props.onValueChange(e)}
      items={props.items}
      style={props.validation ? validationStyles : customPickerStyles}
    />
  )
}

const customPickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 5,
    width: '100%',
    borderWidth: 1,
    borderColor: '#222f3e',
    borderRadius: 6,
    color: '#222f3e',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: '#222f3e',
    borderRadius: 6,
    color: '#222f3e',
    paddingRight: 30,
  },
})

const validationStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 5,
    width: '100%',
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 6,
    color: '#222f3e',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 6,
    color: '#222f3e',
    paddingRight: 30,
  },
})

export default ContentsPicker
