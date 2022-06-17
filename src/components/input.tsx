import React, { useState } from 'react';
import { Hoshi } from 'react-native-textinput-effects';
import { Box, HStack } from 'native-base';
import { colors, fonts } from '@styles/theme';
import { FilledTextField, TextFieldProps } from 'rn-material-ui-textfield'
import IconButton from './iconButton';
import { Text } from './text';
import { Alert, TouchableOpacity } from 'react-native';
import { Control, Controller } from 'react-hook-form';

type Props = TextFieldProps & {
  label: string;
  type?: 'password' | 'select' | 'search';
  errorMessage?: string;
  helpText?: string;
  textRight?: string;
  iconRight?: string;
  iconLeft?: string;
  iconRightOnPress?: () => void;
  iconLeftOnPress?: () => void;
  onPress?: () => void;
  control: Control;
  name: string;
}

const Input = ({ label, type, errorMessage, helpText, textRight, iconRight, iconRightOnPress, iconLeft, iconLeftOnPress, onPress, control, name, ...rest }: Props) => {
  const [showPassword, setShowPassword] = useState(true);

  const ShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={type === 'select' ? 0.5 : 1}>
      <HStack
        height="56px"
        bg={colors.white}
        pr={4}
        pl={4}
        mb={errorMessage ? 5 : 0 || helpText ? 5 : 0}
        space={3}
        borderRadius="8px"
        borderWidth={1}
        borderColor={errorMessage ? colors.attention : colors.white}
        pointerEvents={type === 'select' ? 'none' : 'auto'}
        alignItems="center"
      >
        {iconLeft && (
          <IconButton onPress={iconLeftOnPress} disabled iconName={iconLeft} color={errorMessage ? colors.attention : colors.gray}/>
        )}
        <Controller
          control={control}
          render={({ field: { onChange, value }}) => (
            <FilledTextField
              label={label}
              title={helpText}
              onChangeText={onChange}
              value={value}
              tintColor={colors.gray}
              baseColor={colors.gray}
              fontSize={16}
              lineWidth={0}
              labelFontSize={13}
              disabledLineWidth={0}
              activeLineWidth={0}
              autoCorrect={false}
              autoCapitalize="none"
              disabled={type === 'select'}
              error={errorMessage}
              secureTextEntry={type === 'password' && showPassword}
              errorColor={colors.attention}
              labelTextStyle={{
                fontFamily: fonts.medium,
                color: colors.gray,
                lineHeight: 18,
              }}
              titleTextStyle={{
                fontFamily: fonts.medium,
              }}
              style={{
                fontFamily: fonts.medium,
                color: errorMessage ? colors.attention : colors.black,
              }}
              containerStyle={{
                flex: 1,
                height: 56,
              }}
              inputContainerStyle={{
                backgroundColor: colors.transparent,
                borderTopEndRadius: 8,
                borderTopStartRadius: 8,
                borderBottomEndRadius: 8,
                borderBottomStartRadius: 8,
              }}
              affixTextStyle={{
                fontFamily: fonts.semibold,
              }}
              contentInset={{
                left: 0,
                right: 0,
              }}
              {...rest}
            />
          )}
          name={name}
        />
        {textRight && (
          <Text style={{fontSize: 16}} size="semibold" color={errorMessage ? colors.attention : colors.black}>{textRight}</Text>
        )}
        {iconRight && (
          <IconButton onPress={iconRightOnPress} iconName={iconRight} color={errorMessage ? colors.attention : colors.gray}/>
        )}
        {type === 'password' && (
          <IconButton onPress={ShowPassword} iconName={showPassword ? 'password' : 'password2'} color={errorMessage ? colors.attention : colors.gray}/>
        )}
        {type === 'select' && (
          <IconButton iconName={'arrowdown'} color={errorMessage ? colors.attention : colors.gray}/>
        )}
        {type === 'search' && (
          <IconButton onPress={iconRightOnPress} iconName={'search'} color={errorMessage ? colors.attention : colors.gray}/>
        )}
      </HStack>
    </TouchableOpacity>
  );
}

export default Input