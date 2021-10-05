import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { API_KEY, BASE_URL } from '../config/api_config'

const ItemDetail = (props) => {
  // console.log('===========================')
  // console.log(props.route.params.id)

  const [movieDetail, setMovieDetail] = useState([])
  const imageUrl = 'https://image.tmdb.org/t/p/original'

  const fetchData = async (id, genre) => {
    const Results = await fetch(`${BASE_URL}/${genre}/${id}?api_key=${API_KEY}&language=en-US`)
      .then((response) => response.json())
      .catch((error) => console.log(error))

    // setCategory(category)
    // console.log(Results)
    setMovieDetail(Results)
  }

  useEffect(() => {
    fetchData(props.route.params.id, props.route.params.genre)
  }, [])
  // console.log(movieDetail)

  return (
    <TouchableOpacity style={styles.detailContainer}>
      <View style={styles.item}>
        {movieDetail.title && <Text style={styles.title}>{movieDetail.title}</Text>}
        {movieDetail.name && <Text style={styles.title}>{movieDetail.name}</Text>}
        <Image source={{ uri: imageUrl + movieDetail.poster_path }} style={styles.image} />
      </View>
      <View style={styles.item}>
        <Text>{movieDetail.overview}</Text>
      </View>
      <View style={[styles.description, styles.item]}>
        <Text>Popularity: {movieDetail.popularity} |</Text>
        <Text> Release Date: {movieDetail.release_date}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  detailContainer: {
    width: '100%',
    flexDirection: 'column',
    paddingVertical: 5,
    marginTop: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    flexDirection: 'row',
    marginTop: 10,
  },
  item: {
    alignSelf: 'center',
    width: '80%',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
})
