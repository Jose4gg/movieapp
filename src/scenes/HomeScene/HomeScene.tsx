import React, {useCallback, useEffect} from 'react';
import {useTheme} from '../../utils/theme';
import styled from 'styled-components/native';
import {Headline, Subheading} from 'react-native-paper';
import {
  SectionList,
  ImageBackground,
  StyleSheet,
  SectionListRenderItem,
  FlatList,
  View,
  Dimensions,
  RefreshControl,
} from 'react-native';
import {Poster} from '../../components';
import {SafeAreaView} from 'react-navigation';
import color from 'color';
import {useSelector, useDispatch} from 'react-redux';
import {ReduxState} from '../../store';
import {loadPopularAndUpcoming} from '../../store/movies/moviesActions';

const BG = require('../../assets/images/movietheater.jpg');

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.8);
  margin-bottom: 0px;
`;

const SubHeader = styled(Subheading)<{color: string}>`
  font-weight: bold;
  color: ${props => props.color};
  padding-top: 16px;
  padding-bottom: 16px;
`;

const PADDING_HORIZONTAL = 16;

export function HomeScene() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const width = Dimensions.get('screen').width;
  const [popular, upcoming, isLoading] = useSelector((state: ReduxState) => [
    state.movies.popular,
    state.movies.upcoming,
    state.movies.popular.isLoading || state.movies.upcoming.isLoading,
  ]);

  const load = useCallback(() => {
    dispatch(loadPopularAndUpcoming());
  }, []);

  useEffect(() => {
    load();
  }, []);

  const data = [
    {
      title: 'Whats hot 🔥',
      data: [{data: popular.movies}],
    },
    {
      title: 'Upcoming 📽',
      data: upcoming.movies,
    },
  ];

  const _Header = (
    <>
      <Headline
        style={{
          fontSize: 32,
          fontWeight: 'bold',
          color: color(theme.colors.text)
            .alpha(1)
            .rgb()
            .toString(),
          marginVertical: 0,
        }}>
        Now Showing
      </Headline>
      <Subheading
        style={{
          color: theme.colors.placeholder,
          fontWeight: 'bold',
          marginTop: 0,
        }}>
        Richmong, Victoria
      </Subheading>
    </>
  );

  const _SubHeader = ({section: {title}}: any) => (
    <>
      <SubHeader color={theme.colors.text}>{title}</SubHeader>
    </>
  );

  const _renderItems: SectionListRenderItem<any> = ({section, index}) => {
    if (section.data[index] && section.data[index].data) {
      return (
        <FlatList
          horizontal
          style={{
            marginHorizontal: PADDING_HORIZONTAL * -1,
          }}
          data={section.data[index].data}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item: any) => `${item.id}`}
          ListFooterComponent={() => (
            <View style={{width: PADDING_HORIZONTAL}} />
          )}
          renderItem={({item}: {item: any}) => {
            return (
              <Poster
                data={item}
                showInfo={false}
                size={180}
                margin={18}
                url={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
              />
            );
          }}
        />
      );
    }

    const numColumns = 3;
    if (index % numColumns !== 0) return null;
    const items = [];
    for (let i = index; i < index + numColumns; i++) {
      if (i >= section.data.length) {
        break;
      }
      items.push(
        <Poster
          key={section.data[i].poster_path}
          url={`https://image.tmdb.org/t/p/w300/${section.data[i].poster_path}`}
          size={width / numColumns - PADDING_HORIZONTAL}
          data={section.data[i]}
        />,
      );
    }

    return (
      <>
        <View
          style={{
            marginTop: index == 1 ? 50 : 0,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {items}
        </View>
        <View style={{height: 5}} />
      </>
    );
  };

  return (
    <ImageBackground
      source={BG}
      style={[
        StyleSheet.absoluteFill,
        {backgroundColor: theme.colors.surface},
      ]}>
      <Container forceInset={{bottom: 'never'}}>
        <SectionList
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              colors={[theme.colors.text]}
              tintColor={theme.colors.text}
              onRefresh={load}
            />
          }
          sections={data}
          keyExtractor={item => `${item.id}`}
          stickySectionHeadersEnabled={false}
          contentContainerStyle={{
            paddingHorizontal: PADDING_HORIZONTAL,
            marginTop: 10,
          }}
          ListHeaderComponent={_Header}
          renderItem={_renderItems}
          renderSectionHeader={_SubHeader}
          ListFooterComponent={
            <View
              style={{
                height: 70,
              }}
            />
          }
        />
      </Container>
    </ImageBackground>
  );
}
