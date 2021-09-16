import React, { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, View, Text } from 'react-native';

const MenuItem = ({ title, image, videoId}) => {
  return <Text style={styles.item}>{title}</Text>;
};
export default MenuItem;

const styles = StyleSheet.create({
    item: {
        marginBottom:10,
        color: 'blue'
    },
  });
