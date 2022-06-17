import React from 'react'
import { MotiView, useAnimationState } from 'moti';
import { Pressable, IPressableProps, Spinner, Box } from 'native-base';
import { Text } from './text';
import { colors } from '@styles/theme';
import { MotiPressable, useMotiPressableTransition } from 'moti/interactions';
import { Easing } from 'react-native-reanimated';


type Props = IPressableProps & {
  onPress?: () => void;
  title?: string;
  isLoading?: boolean;
  variant?: 'primary' | 'secondary';
};


const Button = (props: Props) => {
  
  const animate = ({ pressed }: any) => {
    'worklet'
    return {
      scale: pressed ? 0.98 : 1,
      opacity: pressed ? 0.5 : 1,
    }
  }

  const transition = () => {
    'worklet'
    return {
      type: 'timing',
      duration: 100,
    }
  }

  return (
    <MotiView style={{width: "100%"}}>
      {/* @ts-ignore */}
      <MotiPressable onPress={props.onPress} animate={animate} transition={transition}>
        <Pressable bg={props.variant === "secondary" ? colors.transparent : colors.primary}
          w="100%" h="56px" rounded='8px' alignItems="center" justifyContent="center"
          {...props}
        >
          {props.isLoading ? 
            <Spinner color={props.variant === "secondary" ? colors.primary : colors.white} />
          : 
            <Text color={props.variant === "secondary" ? colors.primary : colors.white} size='semibold'>{props.title}</Text>
          }
        </Pressable>
      </MotiPressable>
    </MotiView>
  )
}

export default Button