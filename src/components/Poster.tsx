import React, {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {useTheme} from '../utils/theme';
import {View, TouchableOpacity, Image as RNImage} from 'react-native';
import {Text} from 'react-native-paper';
import {StarRating} from './StarRating';
import {useNavigation} from 'react-navigation-hooks';
import {animated, useSpring} from 'react-spring';
import color from 'color';

const Image = styled(animated(RNImage))<{size: number; color: string}>`
  width: ${props => props.size};
  height: ${props => props.size * 1.5};
  border-radius: ${props => props.size * 0.08};
  border-color: ${props => props.color};
  border-width: 0.1px;
`;
const ImageContainer = styled(View)<{size: number; color: string}>`
  width: ${props => props.size};
  height: ${props => props.size * 1.5};
  border-radius: ${props => props.size * 0.08};
  background-color: ${props => props.color}
  border-width: 0.1px;
`;

interface IPoster {
  url: string;
  size?: number;
  margin?: number;
  data: any;
  showInfo?: boolean;
}

export function Poster({
  url,
  size = 40,
  margin = 0,
  data,
  showInfo = true,
}: IPoster) {
  const theme = useTheme();
  const navigation = useNavigation();
  const [loaded, setLoaded] = useState(false);
  const spring = useSpring({opacity: loaded ? 1 : 0});

  const goToMovie = useCallback(() => {
    navigation.navigate('MovieScene', {movie: data});
  }, [data]);

  const primary = theme.colors.primary;
  return (
    <>
      <TouchableOpacity
        onPress={goToMovie}
        style={{
          maxWidth: size,
          minHeight: size * 1.5 + 5,
          shadowColor: primary,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,
          elevation: 7,
          marginLeft: margin,
        }}>
        <ImageContainer color={theme.colors.surface} size={size}>
          <Image
            source={{uri: url}}
            size={size}
            onLoadEnd={() => setLoaded(true)}
            color={primary}
            style={[
              spring,
              {
                backgroundColor: color(theme.colors.surface)
                  .darken(0.8)
                  .rgb()
                  .string(),
              },
            ]}
          />
        </ImageContainer>

        {showInfo ? (
          <View style={{paddingTop: 5, paddingHorizontal: size * 0.02}}>
            <Text
              style={{
                color: theme.colors.text,
                fontWeight: '500',
                fontFamily: 'Arial',
              }}>
              {data.title}
            </Text>
            <View style={{height: 4}} />
            <StarRating
              size={size / 6}
              rating={Math.round(data.vote_average / 2)}
            />
          </View>
        ) : null}
      </TouchableOpacity>
    </>
  );
}
