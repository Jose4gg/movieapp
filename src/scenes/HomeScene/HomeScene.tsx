import React, {useCallback} from 'react';
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
} from 'react-native';
import {Poster} from '../../components';
import {SafeAreaView} from 'react-navigation';
import color from 'color';

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

const exampleData = [
  {
    title: 'Whats hot 🔥',
    data: [
      {
        data: [
          {
            popularity: 481.769,
            vote_count: 364,
            video: false,
            poster_path: '/zfE0R94v1E8cuKAerbskfD3VfUt.jpg',
            id: 474350,
            adult: false,
            backdrop_path: '/p15fLYp0X04mS8cbHVj7mZ6PBBE.jpg',
            original_language: 'en',
            original_title: 'It Chapter Two',
            genre_ids: [35, 27],
            title: 'It Chapter Two',
            vote_average: 7.2,
            overview:
              "27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.",
            release_date: '2019-09-06',
          },
          {
            popularity: 281.362,
            vote_count: 499,
            video: false,
            poster_path: '/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg',
            id: 429203,
            adult: false,
            backdrop_path: '/6X2YjjYcs8XyZRDmJAHNDlls7L4.jpg',
            original_language: 'en',
            original_title: 'The Old Man & the Gun',
            genre_ids: [35, 80, 18],
            title: 'The Old Man & the Gun',
            vote_average: 6.3,
            overview:
              'The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public. Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.',
            release_date: '2018-09-28',
          },
          {
            popularity: 255.151,
            vote_count: 3402,
            video: false,
            poster_path: '/lcq8dVxeeOqHvvgcte707K0KVx5.jpg',
            id: 429617,
            adult: false,
            backdrop_path: '/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg',
            original_language: 'en',
            original_title: 'Spider-Man: Far from Home',
            genre_ids: [28, 12, 878],
            title: 'Spider-Man: Far from Home',
            vote_average: 7.7,
            overview:
              'Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.',
            release_date: '2019-07-02',
          },
        ],
      },
    ],
  },
  {
    title: 'Upcoming 📽',
    data: [
      {
        popularity: 165.602,
        vote_count: 2400,
        video: false,
        poster_path: '/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg',
        id: 458156,
        adult: false,
        backdrop_path: '/stemLQMLDrlpfIlZ5OjllOPT8QX.jpg',
        original_language: 'en',
        original_title: 'John Wick: Chapter 3 – Parabellum',
        genre_ids: [28, 80, 53],
        title: 'John Wick: Chapter 3 – Parabellum',
        vote_average: 7.1,
        overview:
          'Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.',
        release_date: '2019-05-17',
      },
      {
        popularity: 140.014,
        vote_count: 20,
        video: false,
        poster_path: '/zBhv8rsLOfpFW2M5b6wW78Uoojs.jpg',
        id: 540901,
        adult: false,
        backdrop_path: '/mBBJ3N3an8FLkp0ZpGgIJwHKhBP.jpg',
        original_language: 'en',
        original_title: 'Hustlers',
        genre_ids: [35, 80, 18],
        title: 'Hustlers',
        vote_average: 6.9,
        overview:
          'Inspired by Jessica Pressler\'s "The Hustlers at Scores," which details a crew of savvy former strip club employees who band together to turn the tables on their Wall Street clients.',
        release_date: '2019-09-13',
      },
      {
        popularity: 84.399,
        vote_count: 193,
        video: false,
        poster_path: '/jIthqo2tQmW8TFN1fYpF8FmVL0o.jpg',
        id: 521777,
        adult: false,
        backdrop_path: '/6Xsz9KHQmCcIcj3CoWQq5eLtVoT.jpg',
        original_language: 'en',
        original_title: 'Good Boys',
        genre_ids: [35],
        title: 'Good Boys',
        vote_average: 6.6,
        overview:
          'A group of young boys on the cusp of becoming teenagers embark on an epic quest to fix their broken drone before their parents get home.',
        release_date: '2019-08-16',
      },
      {
        popularity: 90.684,
        vote_count: 451,
        video: false,
        poster_path: '/1rjaRIAqFPQNnMtqSMLtg0VEABi.jpg',
        id: 515195,
        adult: false,
        backdrop_path: '/rLBkg55NUSwFjPjVYHOXyQc0hAL.jpg',
        original_language: 'en',
        original_title: 'Yesterday',
        genre_ids: [35, 14, 10402, 10749],
        title: 'Yesterday',
        vote_average: 6.7,
        overview:
          "Jack Malik is a struggling singer-songwriter in an English seaside town whose dreams of fame are rapidly fading, despite the fierce devotion and support of his childhood best friend, Ellie. After a freak bus accident during a mysterious global blackout, Jack wakes up to discover that he's the only person on Earth who can remember The Beatles.",
        release_date: '2019-06-28',
      },
      {
        popularity: 85.55,
        vote_count: 62,
        video: false,
        poster_path: '/vVYU0x9FRpiJNX7c54ciFnRBVYG.jpg',
        id: 441282,
        adult: false,
        backdrop_path: '/6rJAeP8xlq0bHUdCNg5epBvrFVa.jpg',
        original_language: 'en',
        original_title: 'Night Hunter',
        genre_ids: [80, 9648, 53],
        title: 'Night Hunter',
        vote_average: 6.2,
        overview:
          'A police task force traps an online predator, only to discover that the depth of his crimes goes far beyond anything they had anticipated.',
        release_date: '2019-09-06',
      },
      {
        popularity: 64.417,
        vote_count: 960,
        video: false,
        poster_path: '/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg',
        id: 466272,
        adult: false,
        backdrop_path: '/kKTPv9LKKs5L3oO1y5FNObxAPWI.jpg',
        original_language: 'en',
        original_title: 'Once Upon a Time in Hollywood',
        genre_ids: [28, 35, 80, 18, 37],
        title: 'Once Upon a Time in Hollywood',
        vote_average: 7.5,
        overview:
          "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
        release_date: '2019-07-26',
      },
      {
        popularity: 65.227,
        vote_count: 1114,
        video: false,
        poster_path: '/bk8LyaMqUtaQ9hUShuvFznQYQKR.jpg',
        id: 456740,
        adult: false,
        backdrop_path: '/5BkSkNtfrnTuKOtTaZhl8avn4wU.jpg',
        original_language: 'en',
        original_title: 'Hellboy',
        genre_ids: [28, 12, 14, 878],
        title: 'Hellboy',
        vote_average: 5.1,
        overview:
          "Hellboy comes to England, where he must defeat Nimue, Merlin's consort and the Blood Queen. But their battle will bring about the end of the world, a fate he desperately tries to turn away.",
        release_date: '2019-04-12',
      },
      {
        popularity: 48.877,
        vote_count: 646,
        video: false,
        poster_path: '/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
        id: 496243,
        adult: false,
        backdrop_path: '/fjPhDdmJJNK68cx19X0QQuNuHNY.jpg',
        original_language: 'ko',
        original_title: '기생충',
        genre_ids: [35, 18, 53],
        title: 'Parasite',
        vote_average: 8.5,
        overview:
          "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
        release_date: '2019-10-11',
      },
      {
        popularity: 49.19,
        vote_count: 34,
        video: false,
        poster_path: '/lbGzEyESjANpOeD48aROlc3X7aa.jpg',
        id: 475557,
        adult: false,
        backdrop_path: '/gZWl93sf8AxavYpVT1Un6EF3oCj.jpg',
        original_language: 'en',
        original_title: 'Joker',
        genre_ids: [80, 18, 53],
        title: 'Joker',
        vote_average: 0,
        overview:
          'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.',
        release_date: '2019-10-04',
      },
      {
        popularity: 44.534,
        vote_count: 150,
        video: false,
        poster_path: '/vOl6shtL0wknjaIs6JdKCpcHvg8.jpg',
        id: 567609,
        adult: false,
        backdrop_path: '/j8uPZSPjKYzHlN2B4NhPQVWWZ5x.jpg',
        original_language: 'en',
        original_title: 'Ready or Not',
        genre_ids: [35, 27, 9648, 53],
        title: 'Ready or Not',
        vote_average: 7.1,
        overview:
          "A bride's wedding night takes a sinister turn when her eccentric new in-laws force her to take part in a terrifying game.",
        release_date: '2019-08-21',
      },
      {
        popularity: 42.714,
        vote_count: 5,
        video: false,
        poster_path: '/k3e3y2WuoklYOIdsX90qITWsIU1.jpg',
        id: 535544,
        adult: false,
        backdrop_path: '/mFcfdnAYaQQhXhKcoITiDYtuO5b.jpg',
        original_language: 'en',
        original_title: 'Downton Abbey',
        genre_ids: [18],
        title: 'Downton Abbey',
        vote_average: 5.8,
        overview:
          'The continuing story of the Crawley family, wealthy owners of a large estate in the English countryside in the early 20th century',
        release_date: '2019-09-20',
      },
      {
        popularity: 41.515,
        vote_count: 0,
        video: false,
        poster_path: '/maHr4ceIxkb22uJCFIvPgx0rZsq.jpg',
        id: 522938,
        adult: false,
        backdrop_path: '/tA0p1nYtLcNUyxYgZzAywv1UI1e.jpg',
        original_language: 'en',
        original_title: 'Rambo: Last Blood',
        genre_ids: [28, 12, 53],
        title: 'Rambo: Last Blood',
        vote_average: 0,
        overview:
          'When his housekeeper’s daughter is kidnapped, Rambo crosses the U.S.-Mexican border to bring her home but finds himself up against the full might of one of Mexico’s most ruthless cartels.',
        release_date: '2019-09-20',
      },
      {
        popularity: 38.804,
        vote_count: 106,
        video: false,
        poster_path: '/ebe8hJRCwdflNQbUjRrfmqtUiNi.jpg',
        id: 454640,
        adult: false,
        backdrop_path: '/k7sE3loFwuU2mqf7FbZBeE3rjBa.jpg',
        original_language: 'en',
        original_title: 'The Angry Birds Movie 2',
        genre_ids: [28, 12, 16, 35, 10751],
        title: 'The Angry Birds Movie 2',
        vote_average: 6,
        overview:
          'Red, Chuck, Bomb and the rest of their feathered friends are surprised when a green pig suggests that they put aside their differences and unite to fight a common threat. Aggressive birds from an island covered in ice are planning to use an elaborate weapon to destroy the fowl and swine.',
        release_date: '2019-08-14',
      },
      {
        popularity: 37.658,
        vote_count: 132,
        video: false,
        poster_path: '/xvYCZ740XvngXK0FNeSNVTJJJ5v.jpg',
        id: 499701,
        adult: false,
        backdrop_path: '/61sbyO47yIpsMFyLhY1MWcqjg1Q.jpg',
        original_language: 'en',
        original_title: 'Dora and the Lost City of Gold',
        genre_ids: [12, 35, 10751],
        title: 'Dora and the Lost City of Gold',
        vote_average: 6.2,
        overview:
          'Dora, a girl who has spent most of her life exploring the jungle with her parents, now must navigate her most dangerous adventure yet: high school. Always the explorer, Dora quickly finds herself leading Boots (her best friend, a monkey), Diego, and a rag tag group of teens on an adventure to save her parents and solve the impossible mystery behind a lost Inca civilization.',
        release_date: '2019-08-09',
      },
      {
        popularity: 34.985,
        vote_count: 23,
        video: false,
        poster_path: '/rp3PS9hl0sTZ6eOrXQF95Ben2N8.jpg',
        id: 419704,
        adult: false,
        backdrop_path: '/uDQKnOYo1uhKJQ0xE0Euwr3VZoN.jpg',
        original_language: 'en',
        original_title: 'Ad Astra',
        genre_ids: [12, 18, 9648, 878, 53],
        title: 'Ad Astra',
        vote_average: 4.5,
        overview:
          'An astronaut travels to the outer edges of the solar system to find his father and unravel a mystery that threatens the survival of our planet. He uncovers secrets which challenge the nature of human existence and our place in the cosmos.',
        release_date: '2019-09-20',
      },
      {
        popularity: 46.623,
        vote_count: 5,
        video: false,
        poster_path: '/uNWk5HZfVBHpARcV1z9cwUAbtpF.jpg',
        id: 537739,
        adult: false,
        backdrop_path: '/sQBVmI8jra82O6dVswBQgmNI0lq.jpg',
        original_language: 'en',
        original_title: 'Can You Keep a Secret?',
        genre_ids: [35, 10749],
        title: 'Can You Keep a Secret?',
        vote_average: 7.7,
        overview:
          'Emma Corrigan, a girl with a few secrets on a turbulent plane ride, thinks she’s about to die, Emma spills them all to the handsome stranger sitting next to her. At least, she thought he was a stranger. But then, her company’s young and elusive CEO, arrives at the office. It’s him. And he knows every single humiliating detail about Emma.',
        release_date: '2019-09-13',
      },
      {
        popularity: 35.099,
        vote_count: 6,
        video: false,
        poster_path: '/8NwONmcJmPr0w9A176JorJ3tbJx.jpg',
        id: 472674,
        adult: false,
        backdrop_path: '/lXSJETt0cbiemixfHuBpopAg8pT.jpg',
        original_language: 'en',
        original_title: 'The Goldfinch',
        genre_ids: [18],
        title: 'The Goldfinch',
        vote_average: 6.5,
        overview:
          "A boy in New York is taken in by a wealthy family after his mother is killed in a bombing at the Metropolitan Museum of Art. In a rush of panic, he steals 'The Goldfinch', a painting that eventually draws him into a world of crime.",
        release_date: '2019-09-13',
      },
      {
        popularity: 41.235,
        vote_count: 77,
        video: false,
        poster_path: '/vdWzIFpiUcV2uNGUrmgbtyNK2I0.jpg',
        id: 534259,
        adult: false,
        backdrop_path: '/5xVj9qDkZTALvIounsBdkqlLzH1.jpg',
        original_language: 'en',
        original_title: 'Blinded by the Light',
        genre_ids: [35, 18, 10402],
        title: 'Blinded by the Light',
        vote_average: 7.5,
        overview:
          'In 1987, during the austere days of Thatcher’s Britain, a teenager learns to live life, understand his family, and find his own voice through the music of Bruce Springsteen.',
        release_date: '2019-08-14',
      },
    ],
  },
];

const PADDING_HORIZONTAL = 16;

export function HomeScene() {
  const theme = useTheme();
  const width = Dimensions.get('screen').width;

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
          sections={exampleData}
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
