import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import Menu from '../components/Menu';

function VideoScreen({ navigation }) {
    return (
    <View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginTop: 5 }}>
        <Text>Video Screen</Text>
      </View>
      <View>
        <Menu/>
      </View>
    </View>
    );
  }
  
  export default VideoScreen