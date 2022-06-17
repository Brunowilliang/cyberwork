import React from 'react'
import { Badge as Status, IBadgeProps } from 'native-base'
import { Text } from './text';
import { colors } from '@styles/theme';

type Props = IBadgeProps & {
  title: string;
  color: string;
}

const Badge = (p: Props) => {
  return (
    <Status rounded="5px" px="8px" py="3px" bg={p.color + 20} {...p}>
      <Text size='medium' variant='mono' transform='uppercase' color={p.color}>{p.title}</Text>
    </Status>
)
}

export default Badge