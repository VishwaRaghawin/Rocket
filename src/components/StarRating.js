import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StarRating = ({ size = 20 }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <Text key={index} style={[styles.star, { fontSize: size }]}>★</Text>
  ));

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {stars}
    </View>
  );
};

const styles = StyleSheet.create({
  star: {
    color: 'gold',
  },
});

export default StarRating;
