import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native'

const Item = (props) => {
  const imageUrl = 'https://image.tmdb.org/t/p/original'
  return (
    <TouchableOpacity style={styles.listContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl + props.poster_path }} style={styles.image} />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={[styles.description, styles.title]}>{props.title}</Text>
        <Text style={styles.description}>{props.name}</Text>
        <Text style={styles.description}>Popularity: {props.popularity}</Text>
        <Text style={styles.description}>Release Date: {props.release_date}</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="More Details"
            color="white"
            onPress={() =>
              props.navigation.navigate('ItemDetail', {
                id: props.id,
                title: props.title,
                genre: props.genre,
                name: props.name,
              })
            }
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}
export default Item

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  imageContainer: {
    width: '25%',
  },
  image: {
    flex: 1,
  },
  descriptionContainer: {
    paddingHorizontal: 15,
    width: '100%',
  },

  description: {
    width: '70%',
  },
  title: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '70%',
    backgroundColor: '#00B6D4',
    margin: 3,
  },
})
