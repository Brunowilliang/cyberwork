
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import FontProvider from './src/provider/fonteProvider';
import Rotas from './src/screens/rotas';
import theme from './src/styles/theme';
import { NativeBaseTheme } from '@styles/nativeBaseTheme';
import { NativeBaseProvider } from 'native-base';
import FlashMessage from "react-native-flash-message";

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <NativeBaseProvider theme={NativeBaseTheme}>
        <FontProvider>
          <NavigationContainer>
            <FlashMessage position="top" />
            <Rotas />
          </NavigationContainer>
        </FontProvider>
      </NativeBaseProvider>
    </ThemeProvider>
  )
};