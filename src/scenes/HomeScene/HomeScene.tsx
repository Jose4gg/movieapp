import React from 'react';
import {View} from 'react-native';
import {useTheme} from '../../utils/theme';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background: ${(props: any) => props.color};
`;

export function HomeScene() {
  const theme = useTheme();
  return (
    <Container>
      {/* kepp */}
      {/* kepp */}
    </Container>
  );
}
