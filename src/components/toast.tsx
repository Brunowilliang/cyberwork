import React from 'react'
import { useTheme } from "styled-components";
import { showMessage, hideMessage } from "react-native-flash-message";
import { colors, fonts } from '@styles/theme';

type Props = {
  titulo: string;
  descricao: string;
  type: 'success' | 'warning' | 'danger' | 'info';
}

export default function Toast({ titulo, descricao, type }:Props) {
  showMessage({
    message: titulo,
    description: descricao,
    type: type,
    icon: type,
    floating: true,
    duration: 10000,
    style: {
      borderLeftWidth: 5,
      borderColor: colors.whiteOpacity,
      alignItems: "center",
    },
    titleStyle: {
      fontFamily: fonts.bold,
      fontSize: 16,
      marginBottom: 0,
    },
    textStyle: {
      color: colors.white,
      fontSize: 15,
      fontFamily: fonts.medium,
      marginBottom: 0,
    },
  })
}
  