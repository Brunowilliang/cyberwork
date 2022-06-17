import { colors, fonts } from '@styles/theme';
import styled, { css } from 'styled-components/native';
import { TextProps } from 'react-native';

type Props = TextProps & {
  variant?: "mono" | "body" | "heading";
  size?: "medium" | "semibold" | "bold";
  align?: "left" | "center" | "right";
  transform?: "uppercase" | "lowercase" | "capitalize";
  color?: string;
  tamanho?: number;
}

export const Text = styled.Text<Props>`
  text-align: ${({ align }) => align || "left"};
  color: ${({ color }) => color || colors.white};

  font-family: ${({ size }) => ({
    medium: fonts.medium,
    semibold: fonts.semibold,
    bold: fonts.bold
  }[size || "medium"])};

  text-transform: ${({ transform }) => transform || "none"};


  font-size: ${({ variant }) => ({
    mono: "14px",
    body: "18px",
    heading: "25px"
  }[variant || "body"])};
`;

