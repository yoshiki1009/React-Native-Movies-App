import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, SafeAreaView, View, FlatList } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import { API_KEY, BASE_URL } from '../config/api_config'
import Item from '../parts/Item'

const ContentsContainer = (props) => {
  console.log(props.route.name)
  const [contentsLists, setContentsLists] = useState([])
  // console.log(props)
  // useEffect(() => {
  //   console.log(props.route.name)
  // })

  let genre
  props.route.name == 'Movies' ? (genre = 'movie') : (genre = 'tv')
  // console.log(genre)

  const fetchData = async (category) => {
    const Results = await fetch(`${BASE_URL}/${genre}/${category}?api_key=${API_KEY}&language=en-US`)
      .then((response) => response.json())
      .catch((error) => console.log(error))

    setContentsLists(Results.results)

    // console.log(Results.results)
  }
  let items
  props.route.name == 'Movies'
    ? (items = [
        { label: 'Upcoming', value: 'upcoming' },
        { label: 'Top rated', value: 'top_rated' },
        { label: 'Now Playing', value: 'now_playing' },
      ])
    : (items = [
        { label: 'Airing today', value: 'airing_today' },
        { label: 'On the air', value: 'on_the_air' },
        { label: 'Top rated', value: 'top_rated' },
      ])

  useEffect(() => fetchData('popular'), [])

  return (
    <SafeAreaView>
      <View>
        <RNPickerSelect
          placeholder={{ label: 'Popular', value: 'popular' }}
          onValueChange={(value) => {
            fetchData(value)
          }}
          items={items}
          style={customPickerStyles}
        />
      </View>

      <FlatList
        data={contentsLists}
        renderItem={({ item }) => (
          <Item
            navigation={props.navigation}
            id={item.id}
            poster_path={item.poster_path}
            title={item.title}
            release_date={item.release_date}
            popularity={item.popularity}
            overview={item.overview}
            name={item.name}
            genre={genre}
          />
        )}
      />
    </SafeAreaView>
  )
}

export default ContentsContainer

const customPickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 5,
    alignSelf: 'center',
    margin: 10,
    width: '60%',
    borderWidth: 0.5,
    borderColor: 'rgba(66, 64, 81, 0.43)',
    borderRadius: 6,
    color: '#222f3e',
  },
  inputAndroid: {
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 5,
    alignSelf: 'center',
    margin: 10,
    width: '60%',
    borderWidth: 0.5,
    borderColor: 'rgba(66, 64, 81, 0.43)',
    borderRadius: 6,
    color: '#222f3e',
  },
})
