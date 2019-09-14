import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View} from 'react-native';

interface IStarRating {
  size?: number;
  rating?: number;
  stars?: number;
}

export function StarRating({size = 30, rating = 0, stars = 5}: IStarRating) {
  const _stars = Array.apply(null, Array(5));
  return (
    <View style={{flexDirection: 'row', height: size, backgroundColor: 'red'}}>
      {_stars.map((_, index) => (
        <Icon key={`${index}`} name={'comments'} size={size} color="white" />
      ))}
    </View>
  );
}
