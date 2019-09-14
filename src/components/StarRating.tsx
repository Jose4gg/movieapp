import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View} from 'react-native';
import {useTheme} from '../utils/theme';

interface IStarRating {
  size?: number;
  rating?: number;
  stars?: number;
}

export function StarRating({size = 30, rating = 0, stars = 5}: IStarRating) {
  const theme = useTheme();
  const _stars = Array.apply(null, Array(5));
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      {_stars.map((_, index) => (
        <Icon
          key={`${index}`}
          name="star"
          size={(size / stars) * 3.5}
          color={rating >= index + 1 ? 'white' : 'rgba(255, 255, 255, 0.3)'}
        />
      ))}
    </View>
  );
}
