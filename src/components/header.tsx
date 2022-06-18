import React from 'react'
import { Text } from '@components/text';;
import { colors } from '@styles/theme';
import { Box } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import Presseable from './presseable';
import IconButton from './iconButton';
import { useNavigation } from '@react-navigation/native';

type Props = {
  back?: boolean;
  title?: string;
  subtitle?: string;
}

const Header = (p: Props) => {
  const navigation = useNavigation();

  return (
    <Box safeAreaTop bg={colors.grayDark}>
      <Box px="20px" flexDir="row" mt="10px" alignItems="center" justifyContent="space-between">
        {p.back &&
          <IconButton iconName='arrowleft' pr="10px" onPress={() => navigation.goBack()} />
        }
        <Box flex={1}>
          <Text variant="body" size="medium" color={colors.white}>{p.title}</Text>
          <Text variant="body" size="bold" numberOfLines={1} color={colors.white}>{p.subtitle}</Text>
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