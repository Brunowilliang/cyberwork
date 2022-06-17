import React from 'react'

import { createIconSetFromFontello } from '@expo/vector-icons';
import fontelloConfig from '@assets/icon/config.json';
import { useTheme } from 'styled-components';
import { MotiPressable, MotiPressableProps } from 'moti/interactions';
import { IPressableProps, Pressable } from 'native-base';
import { colors } from '@styles/theme';
const Icone = createIconSetFromFontello(fontelloConfig, 'fontello', 'fontello.ttf');

type Props = {
  name: string;
  size?: number;
  color?: string;
  onPress?: () => void;
}


const Icon = (p: Props) => {
  return (
    <Icone name={p.name} size={p.size ? p.size : 25} color={p.color ? p.color : colors.white} />
  )
}

export default Icon