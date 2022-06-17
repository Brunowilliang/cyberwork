import React from 'react'
import { MotiPressable, MotiPressableProps } from 'moti/interactions';
import { IPressableProps, Pressable } from 'native-base';
import { colors } from '@styles/theme';
import Icon from './icon';

type Props = IPressableProps & {
  iconName: string;
  iconSize?: number;
  color?: string;
  onPress?: () => void;
}


const IconButton = (p: Props) => {
  return (
    <MotiPressable
        onPress={p.onPress}
        animate={({ pressed }) => {
          'worklet'
          return {
            scale: pressed ? 0.95 : 1,
            opacity: pressed ? 0.5 : 1,
          }
        }}
        transition={() => {
          'worklet'
          return {
            type: 'timing',
            duration: 100,
          }
        }}
      >
        <Pressable {...p} w="auto" height="auto">
          <Icon name={p.iconName} size={p.iconSize ? p.iconSize : 25} color={p.color ? p.color : colors.white} />
        </Pressable>
      </MotiPressable>

  )
}

export default IconButton