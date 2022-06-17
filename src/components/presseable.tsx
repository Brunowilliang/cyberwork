import React from 'react'
import { MotiView } from 'moti';
import { Pressable, IPressableProps } from 'native-base';
import { MotiPressable } from 'moti/interactions';


type Props = IPressableProps & {
  onPress?: () => void;
  title?: string;
  isLoading?: boolean;
  variant?: 'primary' | 'secondary';
};


const Presseable = (props: Props) => {
  
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
    <MotiView>
      {/* @ts-ignore */}
      <MotiPressable onPress={props.onPress} animate={animate} transition={transition}>
        <Pressable w="auto" h="auto" alignItems="center" justifyContent="center" {...props}>
          {props.children}
        </Pressable>
      </MotiPressable>
    </MotiView>
  )
}

export default Presseable