import React from 'react'
import { Text } from '@components/text';;
import { colors } from '@styles/theme';
import { Box } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import Presseable from './presseable';

const Header = () => {
  return (
    <Box safeAreaTop bg={colors.grayDark}>
      <Box px="20px" flexDir="row" mt="10px" alignItems="center" justifyContent="space-between">
        <Box flex={1}>
          <Text variant="body" size="medium" color={colors.white}>Bem vindo,</Text>
          <Text variant="body" size="bold" numberOfLines={1} color={colors.white}>Bruno Garcia</Text>
        </Box>
        <Presseable w="50px" h="50px" alignItems="flex-end" >
          <FontAwesome name="search" size={24} color={colors.white} />
        </Presseable>
      </Box>
      <Box bg={colors.grayMedium} h="30px" w="100%" mt="20px" borderTopLeftRadius={24} borderTopRightRadius={24} />
    </Box>
  )
}


export default Header