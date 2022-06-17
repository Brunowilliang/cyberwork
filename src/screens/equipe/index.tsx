import React, {  } from 'react'
import { Center } from 'native-base'
import { Text } from '@components/text'
import { colors } from '@styles/theme'
import Header from '@components/header'

const index = () => {

  return (
      <>
      <Header />
      <Center bg={colors.grayMedium} flex={1}>
        <Text variant='mono'>Equipe</Text>
      </Center>
    </>
  )
}

export default index