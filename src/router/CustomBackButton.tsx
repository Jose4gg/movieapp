import React from 'react';
import {View, Image} from 'react-native';

export function CustomBack(props: {tintColor: string; title?: string | null}) {
  const source = require('../assets/images/back.png');
  return (
    <View
      style={{
        backgroundColor: 'rgba(0,0,0,0.55)',
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        transform: [
          {
            scaleX: 0.8,
          },
          {
            scaleY: 0.8,
          },
        ],
      }}>
      <Image source={source} style={{marginLeft: 10}} />
    </View>
  );
}
