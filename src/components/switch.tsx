import React, { useState } from 'react'
import { colors } from '@styles/theme';
import ToggleSwitch, { ToggleSwitchProps } from 'toggle-switch-react-native'

type Props = ToggleSwitchProps & {
  isOn?: boolean | undefined;
  onToggle?: () => void;
}

const Switch = ({isOn, onToggle, ...rest}: Props) => {
  return (
    <ToggleSwitch
      isOn={isOn}
      onColor={colors.primary}
      offColor={colors.border}
      size="medium"
      onToggle={onToggle}
      {...rest}
    />
  )
}

export default Switch