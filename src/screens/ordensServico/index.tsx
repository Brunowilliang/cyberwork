import React, { useCallback, useEffect, useState } from 'react'
import { Box, FlatList, VStack } from 'native-base'
import { Text } from '@components/text'
import { colors } from '@styles/theme'
import Header from '@components/header'
import Tabs from '@components/tabs'
import CardAgenda from './card'
import { supabase } from '@services/supabase'
import { Ordens } from '@services/types'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import 'react-native-url-polyfill/auto';
import Fab from '@components/fab'

const index = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  
  const [ activeTab, setActiveTab ] = useState('aberta');

  const [tabs, setTabs] = useState([
    { label: 'Em andamento', value: 'aberta'},
    { label: 'Finalizadas', value: 'fechada'},
  ]);

  const activeTabChange = useCallback((value) => {
    setActiveTab(value);
  }, []);

  const deleteOrder = async (id: string) => {
    const { data, error } = await supabase
    .from<Ordens>('ordens')
    .delete()
    .eq('id', id)
  }

  const getOrdens = async () => {
    const { data: ordens, error } = await supabase
    .from<Ordens>('ordens')
    .select('*')
    .eq('aberta', activeTab === tabs[0].value)
    //@ts-ignore
    setData(ordens)
  }

  const realtimeOrders = () => {
    const Orders = supabase
    .from<Ordens>('ordens')
    .on("*", payload => {
      getOrdens();
    })
    return Orders;
  }

  useFocusEffect(
    useCallback(() => {
      const Orders = getOrdens().then(() => {
        return realtimeOrders();
      })
      return async () => await Orders;
    }, [ getOrdens, realtimeOrders ])
  )

  const novaOrdem = () => {
    navigation.navigate('novaOrdemServico');
  }

  return (
    <>
      <Header title='Bem vindo,' subtitle='Bruno Garcia' />
      <Box bg={colors.grayMedium}  flex={1} px="20px">
        <VStack space="20px" flex={1}>
          <Text variant='body' size='bold'>Minhas ordens</Text>
          <Tabs onPress={(value) => activeTabChange(value)} options={tabs}/>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            _contentContainerStyle={{ pb: "100px" }}
            renderItem={({ item }: any) => {
              return <CardAgenda data={item} onPress={
                () => deleteOrder(item.id)
              } />
            }}
            ItemSeparatorComponent={() => <Box height="10px"/>}
          />
        </VStack>
      </Box>
      <Fab onPress={novaOrdem} renderFabAction={<Box/>}/>
    </>
  )
}

export default index