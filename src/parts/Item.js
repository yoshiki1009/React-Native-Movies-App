import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native'

const Item = (props) => {
  const imageUrl = 'https://image.tmdb.org/t/p/original'
  return (
    <TouchableOpacity>
      <View>
        <Image
          source={{ uri: imageUrl + props.poster_path }}
          style={{
            width: 64,
            height: 64,
          }}
        />
      </View>
      <View>
        <Text>{props.title}</Text>
        <Text>{props.name}</Text>
        <Text>Popularity: {props.popularity}</Text>
        <Text>Release Date: {props.release_date}</Text>
        <TouchableOpacity>
          <Button
            title="More Details"
            onPress={() =>
              props.navigation.navigate('ItemDetail', {
                id: props.id,
                title: props.title,
                genre: props.genre,
                name: props.name,
              })
            }
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}
export default Item
