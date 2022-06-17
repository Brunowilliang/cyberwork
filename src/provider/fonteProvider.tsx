import { useFonts, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import { Text } from 'react-native';

const FontProvider = (props: any) => {
    const [fonteCarregada, erroCarregamento] = useFonts({
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
        fontello: require('@assets/icon/fontello.ttf')
    });

    if (fonteCarregada)
        return props.children;

    if (!fonteCarregada && !erroCarregamento)
        return <AppLoading />;

    //Precisamos pensar no que exibir!
    return <Text>Erro ao carregar fontes!</Text>;
}

export default FontProvider;