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
    <TouchableOpacity>
      <View>
        <Image
          source={{ uri: imageUrl + movieDetail.poster_path }}
          style={{
            width: 200,
            height: 200,
          }}
        />
      </View>
      <View>
        <Text>{movieDetail.overview}</Text>
      </View>
      <View>
        <Text>Popularity: {movieDetail.popularity} |</Text>
        <Text> Release Date: {movieDetail.release_date}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ItemDetail
