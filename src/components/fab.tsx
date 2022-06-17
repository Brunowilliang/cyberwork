import React from 'react'
import { colors } from '@styles/theme'
import { Box, Center, HStack, Stagger, useDisclose, VStack} from 'native-base'
import Pressable from './presseable'
import Icon from './icon'

type Props = {
  onPress?: () => void;
  visible?: boolean;
  iconColor?: string;
  bgColor?: string;
  renderFabAction: React.ReactElement;
}

const Fab = (p: Props) => {
  const { isOpen, onToggle } = useDisclose();

  return (
    <Center position="absolute" bottom="20px" right="20px" bg={colors.transparent}>
      <Box alignItems="center" bg={colors.transparent}>
        <Stagger visible={p.visible ? p.visible : isOpen}
        initial={{
          opacity: 0,
          scale: 0,
          translateY: 34
        }}
        animate={{
          translateY: 0,
          scale: 1,
          opacity: 1,
          transition: {
            type: "spring",
            mass: 0.5,
            stagger: {
              offset: 30,
              reverse: true
            }
          }
        }}
        exit={{
          opacity: 0,
          scale: 0.5,
          translateY: 34,
          transition: {
            duration: 100,
            stagger: {
              offset: 30,
              reverse: true
            }
          }
        }}>
        <VStack space="10px" mb="20px" display={isOpen ? 'flex' : 'none'}>
          {p.renderFabAction}
        </VStack>
        </Stagger>
      </Box>
      <HStack alignItems="center">
        <Pressable onPress={p.onPress ? p.onPress : onToggle} shadow={4} bg={p.bgColor ? p.bgColor : colors.primary} h="56px" w="56px" alignItems="center" justifyContent="center" rounded="full">
          <Icon
            name={isOpen ? 'remove' : 'mais'}
            size={isOpen ? 27 : 30}
            color={p.iconColor ? p.iconColor : colors.white}
          />
        </Pressable>
      </HStack>
    </Center>
  )
};

export default Fab