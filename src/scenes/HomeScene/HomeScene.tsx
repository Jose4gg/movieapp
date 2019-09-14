import React from 'react';
import {useTheme} from '../../utils/theme';
import styled from 'styled-components/native';
import {Title} from 'react-native-paper';
import {StatusBar, StatusBarIOS} from 'react-native';

const Container = styled.SafeAreaView<{color: string}>`
  flex: 1;
  background-color: ${props => props.color};
  padding-left: 20px;
  padding-right: 20px;
`;

export function HomeScene() {
  const theme = useTheme();
  return (
    <Container color={theme.colors.surface}>
      <Title>Now Playing</Title>
      {/* kepp */}
      {/* kepp */}
    </Container>
  );
}
