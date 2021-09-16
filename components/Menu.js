import React,{useEffect, useState} from 'react';
import { Alert, Button, StyleSheet, View, Text } from 'react-native';
import {getVideos} from '../services/youtubeFetch'

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=direct%20tv&key=AIzaSyDpcrJuY4lCNTkWu5WuWaaMQC4n72zRVcA

function Menu({ navigation }) {
  const [request, setRequest] = useState()
  const [youtubeResponse, setYouTubeResponse] = useState()

  useEffect(()=> {
      getVideos().then((res) => {
        if (res === 'error'){
          Alert.alert(
            "Something went wrong with your request.",
            "Please try again.",
            [{ cancelable: true }]
          );
        }
        setYouTubeResponse(res.items);
      })
      
  },[request])

  //  console.log({youtubeResponse})
  // fetch menu items
  // display menu 
  // after selected expo-video-player


  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 5,
      }}
    ></View>
  );
}

export default Menu;
