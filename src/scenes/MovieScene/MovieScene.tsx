import React, {useRef, useState, useEffect} from 'react';
import {
  ImageBackground,
  Dimensions,
  Animated,
  View,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import {useNavigationParam} from 'react-navigation-hooks';
import {useTheme} from '../../utils/theme';
import styled from 'styled-components/native';
import {Headline, Button, Subheading} from 'react-native-paper';
import color from 'color';
import {StarRating} from '../../components';
import {NavigationStackOptions} from 'react-navigation-stack';

const ContentContainer = styled.View<{color: string}>`
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  background-color: ${props => props.color};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

var AnimatedImage = Animated.createAnimatedComponent(ImageBackground);

export function MovieScene() {
  const movie = useNavigationParam('movie');
  const theme = useTheme();
  const scroll = useRef<ScrollView>(null);
  const [scrolled, setScrolled] = useState(false);
  const {height} = Dimensions.get('screen');
  const backgroundColor = theme.colors.surface;
  const deltaY = useRef(new Animated.Value(height)).current;

  useEffect(() => {
    setTimeout(() => {
      if (scroll.current && !scrolled) {
        scroll.current.scrollTo({
          y: height * 0.5,
          animated: true,
        });
      }
    }, 200);
  });

  return (
    <View style={{flex: 1, backgroundColor}}>
      <Animated.Image
        source={{
          uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
        }}
        style={[
          StyleSheet.absoluteFillObject,
          {
            transform: [
              {
                scaleX: deltaY.interpolate({
                  inputRange: [1, height],
                  outputRange: [1.5, 1],
                  extrapolateRight: 'clamp',
                }),
              },
              {
                scaleY: deltaY.interpolate({
                  inputRange: [1, height],
                  outputRange: [1.5, 1],
                  extrapolateRight: 'clamp',
                }),
              },
            ],
          },
        ]}
      />

      <ScrollView
        ref={scroll}
        bounces={false}
        bouncesZoom
        endFillColor={backgroundColor}
        style={{backgroundColor: 'rgba(0,0,0,0.01)'}}
        scrollEventThrottle={16}
        onScroll={event => {
          deltaY.setValue(height - event.nativeEvent.contentOffset.y);
        }}>
        <View style={{height: height}} />
        <ContentContainer
          style={{minHeight: height * 0.6}}
          color={color(backgroundColor)
            .darken(0.85)
            .rgb()
            .string()}>
          <View
            style={{
              alignSelf: 'center',
              backgroundColor: 'rgba(255,255,255,0.25)',
              marginVertical: 8,
              width: 60,
              height: 5,
              borderRadius: 10,
            }}></View>
          <Headline
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: color(theme.colors.text)
                .alpha(1)
                .rgb()
                .string(),
            }}>
            {movie.title}
          </Headline>
          <StarRating rating={Math.round(movie.vote_average / 2)} />
          <View style={{height: 16}} />
          <View style={{flexDirection: 'row'}}>
            <Button
              style={{backgroundColor: theme.colors.primary}}
              mode="contained"
              onPress={() => alert('Not supperted yet')}>
              Bookmark
            </Button>
            <View style={{width: 8}}></View>
            <Button
              style={{backgroundColor: theme.colors.error}}
              mode="contained"
              onPress={() => alert('Not supperted yet')}>
              Buy Tickets
            </Button>
          </View>
          <View style={{height: 16}} />
          <Subheading
            style={{
              color: color(theme.colors.text)
                .alpha(1)
                .rgb()
                .string(),
            }}>
            {movie.overview}
          </Subheading>
        </ContentContainer>
      </ScrollView>
    </View>
  );
}
