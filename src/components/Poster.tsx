import React from 'react';
import styled from 'styled-components/native';
import {useTheme} from '../utils/theme';
import {View, TouchableOpacity} from 'react-native';
import {Text, Divider} from 'react-native-paper';

const Image = styled.Image<{size: number; color: string}>`
  width: ${props => props.size};
  height: ${props => props.size * 1.5};
  border-radius: ${props => props.size * 0.08};
  border-color: ${props => props.color};
  border-width: 0.1px;
`;

interface IPoster {
  url: string;
  size?: number;
  margin?: number;
  data?: any;
}

export function Poster({url, size = 40, margin = 0, data}: IPoster) {
  const theme = useTheme();
  const primary = theme.colors.primary;
  return (
    <TouchableOpacity
      style={{
        maxWidth: size,
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
      <Image source={{uri: url}} size={size} color={primary} />
      {data ? (
        <>
          <Divider style={{height: 5}}></Divider>
          <Text
            style={{
              color: theme.colors.text,
              fontWeight: '500',
              fontFamily: 'Arial',
              paddingLeft: size * 0.03,
            }}>
            {data.title}
          </Text>
        </>
      ) : null}
    </TouchableOpacity>
  );
}
