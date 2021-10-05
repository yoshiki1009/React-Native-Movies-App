import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, Container, Center, SafeAreaView, FlatList } from 'react-native'
import { API_KEY, BASE_URL } from '../config/api_config'
import Form from '../forms/Form'
import ContentsPicker from '../parts/Picker'
import SearchButton from '../parts/Button'
import Item from '../parts/Item'

const Search = (props) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [category, setCategory] = useState('movie')
  const [contentsLists, setContentsLists] = useState([])
  const [validation, setValidation] = useState(false)

  const items = [
    { label: 'movie', value: 'movie' },
    { label: 'multi', value: 'multi' },
    { label: 'tv', value: 'tv' },
  ]

  const fetchData = async () => {
    if (searchQuery !== '') {
      const searchResults = await fetch(
        `${BASE_URL}/search/${category}?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .catch((error) => console.log(error))
      // console.log(searchResults)
      setContentsLists(searchResults.results)
    }
  }

  const onChangeSearch = (query) => setSearchQuery(query)
  // console.log(searchQuery)

  const onValueChange = (itemValue) => setCategory(itemValue)

  const checkValidation = () => {
    if (!searchQuery) {
      setValidation(true)
    } else setValidation(false)
  }

  return (
    <SafeAreaView>
      <View>
        <Text>
          Search Movie/TV Show Name<Text>*</Text>
        </Text>
        <Form onChangeText={onChangeSearch} value={searchQuery} validation={validation} />
        <Text>
          Choose Search Type<Text>*</Text>
        </Text>
        <ContentsPicker items={items} onValueChange={onValueChange} validation={validation} />
        {validation && <Text>Movie / TV show name is required</Text>}
        <SearchButton onPress={fetchData} validation={checkValidation} />
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
            genre={item.title ? 'movie' : 'tv'}
          />
        )}
      />
    </SafeAreaView>
  )
}

export default Search
