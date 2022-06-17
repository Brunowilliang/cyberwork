import React, { useCallback, useEffect, useState } from 'react'
import { Box, FlatList, VStack } from 'native-base'
import { Text } from '@components/text'
import { colors } from '@styles/theme'
import Header from '@components/header'
import Tabs from '@components/tabs'
import CardAgenda from './card'
import { supabase } from '@services/supabase'
import { Ordens } from '@services/types'
import { useFocusEffect } from '@react-navigation/native'
import 'react-native-url-polyfill/auto';
import Fab from '@components/fab'

const index = () => {

  const tabs = [
    { label: 'Em andamento', value: 'aberta'},
    { label: 'Finalizadas', value: 'fechada'},
  ]
  
  const [ activeTab, setActiveTab ] = useState(tabs[0].value);
  const [data, setData] = useState([]);

  const getOrdens = async () => {
    const { data: ordens, error } = await supabase
    .from<Ordens>('ordens')
    .select('*')
    // .eq('aberta', 'true')
    //@ts-ignore
    setData(ordens)
  }

  const ord = async () => {
    const sub = await supabase
    .from<Ordens>('ordens')
    .on("*", async (payload) => {
      await getOrdens();
    })
    return sub;
  }

  // useEffect(() => {
  //   const unSub = getOrdens().then(() => {
  //     return ord();
  //   })
  //   return async () => await unSub;
  // }, [])

  useFocusEffect(
    useCallback(() => {
      const unSub = getOrdens().then(() => {
        return ord();
      })
      return async () => await unSub;
    }, [])
  )

  return (
    <>
      <Header />
      <Box bg={colors.grayMedium}  flex={1} px="20px">
        <VStack space="20px">
          <Text variant='body' size='bold'>Minhas ordens</Text>
          <Tabs onPress={(value) => {setActiveTab(value)}} options={tabs}/>
          <FlatList
            data={data}
            renderItem={({ item }) => {
              return <CardAgenda data={item} />
            }}
          />
        </VStack>
      </Box>
      <Fab renderFabAction={<Box/>}/>
    </>
  )
}

export default index