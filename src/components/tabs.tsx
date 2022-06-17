import { colors } from '@styles/theme';
import React from 'react'
import SwitchSelector from 'react-native-switch-selector';

type Props = {
  options: Array<{ label: string, value: string }>;
  onPress: (value: string) => void;
}

const Tabs = (p: Props) => {
  return (
    //@ts-ignore
      <SwitchSelector
        textStyle={{ color: colors.white, fontWeight: "500" }}
        selectedTextStyle={{ color: colors.white }}
        textContainerStyle={{ height: 45 }}
        selectedTextContainerStyle={{ height: 45 }}
        bold
        buttonColor={colors.primary}
        backgroundColor={colors.grayLight}
        borderColor={colors.grayLight}
        borderRadius={10}
        height={50}
        fontSize={16}
        initial={0}
        animationDuration={200}
        onPress={p.onPress}
        options={p.options}
      />
  )
}

export default Tabs