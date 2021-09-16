import React, { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, View, Text } from 'react-native';
import { getVideos } from '../services/youtubeFetch';
import { youtubeArray } from './temp';
import MenuItem from './MenuItem';
// https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=direct%20tv&key=AIzaSyDpcrJuY4lCNTkWu5WuWaaMQC4n72zRVcA

function Menu({ navigation }) {
  const [request, setRequest] = useState();
  const [youtubeResponse, setYouTubeResponse] = useState(youtubeArray);

  useEffect(() => {
    // getVideos().then((res) => {
    //   if (res === 'error'){
    //     Alert.alert(
    //       "Something went wrong with your request.",
    //       "Please try again.",
    //       [{ cancelable: true }]
    //     );
    //   }
    //   setYouTubeResponse(res.items);
    // })
  }, [request]);

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Text style={styles.title}> Menu </Text>
        {youtubeResponse &&
          youtubeResponse.map((item, index) => {
            return (
              <MenuItem
                key={index}
                title={item.snippet.title}
                image={item.snippet.thumbnails.default}
                videoId={item.id.videoId}
              />
            );
          })}
      </View>
    </View>
  );
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    
  },
  menu: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'red',
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
  }
});
