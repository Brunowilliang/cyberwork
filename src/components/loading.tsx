import React from 'react'
import { Box, VStack } from 'native-base'
import LottieView from 'lottie-react-native';
import gray1 from '@assets/loading/loadingGray1.json'
import gray2 from '@assets/loading/loadingGray2.json'
import blue1 from '@assets/loading/loadingBlue1.json'
import blue2 from '@assets/loading/loadingBlue2.json'


const opcoes = { gray1, gray2, blue1, blue2 };

type Props = {
    size?: number;
    source?: keyof typeof opcoes;
}

const Loading = ({ size, source }: Props) => {
    return (
        <Box alignItems="center" w={size} >
            <LottieView
                style={{ position: "relative", width: size || 100, height: size || 100 }}
                autoSize={true}
                loop={true}
                autoPlay
                source={opcoes[source || "gray2"]}
            />
        </Box>
    )
}

export default Loading