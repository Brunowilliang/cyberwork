import React from 'react'

import { HStack, VStack } from 'native-base';
import { colors } from '@styles/theme';
import { Text } from '@components/text';
import IconButton from '@components/iconButton';
import Pressable from '@components/presseable';
import Badge from '@components/badge';
import { Ordens } from '@services/types';

type Props = {
  onPress?: () => void;
  data?: Ordens;
};

const CardAgenda = (p: Props) => {
  return (
    <Pressable onPress={p.onPress} bg={colors.grayLight} p="20px" rounded="10px">
      <HStack space="10px" w="100%" alignItems="center" justifyContent="space-between">
        <VStack space="5px" alignItems="flex-start">
          <Badge title={p.data?.aberta ? 'aberta' : 'Fechada'} color={colors.white}/>
          <Text variant="body" size="bold">{p.data?.nomePeca}</Text>
          <Text variant="mono" size="medium">{p.data?.carro}</Text>
          <Text variant="mono" size="medium" color={colors.gray} >João Hoffmann</Text>
        </VStack>
        <IconButton iconName='menu' iconSize={25} color={colors.white} />
      </HStack>
    </Pressable>
  )
}

export default CardAgenda