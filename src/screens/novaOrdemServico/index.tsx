import React, { useCallback, useState } from 'react'
import { Box, VStack } from 'native-base'
import { colors } from '@styles/theme'
import Header from '@components/header'
import Tabs from '@components/tabs'
import { supabase } from '@services/supabase'
import { Ordens } from '@services/types'
import { useNavigation } from '@react-navigation/native'
import 'react-native-url-polyfill/auto';
import Input from '@components/input'
import Button from '@components/button'
import Toast from '@components/toast'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { TextInput } from 'react-native'

const schema = Yup.object().shape({
  codigoOS: Yup.string().required('O código da O.S é obrigatório'),
  nomePeca: Yup.string().required('O nome do cliente é obrigatório'),
  carro: Yup.string().required('O modelo do equipamento é obrigatório'),
  placa: Yup.string().required('A placa ou número de série é obrigatório'),
  motivo: Yup.string().required('O motivo é obrigatório'),
  laudo: Yup.string().required('O laudo técnico é obrigatório'),
  solucao: Yup.string().required('A solução do problema é obrigatório'),
})

const index = () => {
  const navigation = useNavigation();
  const [ activeTab, setActiveTab ] = useState('dados');

  const [tabs, setTabs] = useState([
    { label: 'Dados', value: 'dados'},
    { label: 'Descrição', value: 'descricao'},
    { label: 'Detalhes', value: 'detalhes'},
  ]);

  const activeTabChange = useCallback((value) => {
    setActiveTab(value);
  }, []);

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });


  const newOrder = async (item: Ordens) => {
    const data = {
      codigoOS: item.id,
      nomePeca: item.nomePeca,
      carro: item.carro,
      placa: item.placa,
      motivo: item.motivo,
      laudo: item.laudo,
      solucao: item.solucao,
    }
    const { data: ordens, error } = await supabase
    .from<Ordens>('ordens')
    .insert({
      aberta: true,
      ...data,
    })
    data && Toast({ titulo: 'Ordem criada com sucesso', descricao: 'A ordem foi criada com sucesso', type: 'success', })
    error && Toast({ titulo: 'Erro ao criar ordem', descricao: error.message, type: 'danger', })
  }


  return (
    <>
      <Header back title='Cadastrar' subtitle='Ordem de serviço'/>
      <Box bg={colors.grayMedium} safeAreaBottom flex={1} px="20px">
        <Tabs onPress={(value) => activeTabChange(value)} options={tabs}/>
        <VStack space="10px" flex={1} mt="20px">
          {activeTab === 'dados' && (
            <>
              <Input control={control} name='codigoOS' label='Código da O.S' errorMessage={errors.codigoOS && errors.codigoOS.message} />
              <Input control={control} name='nomePeca' label='Nome do cliente' errorMessage={errors.nomeCliente && errors.nomeCliente.message} />
              <Input control={control} name='cpfCnpj' label='CNPJ ou CPF do cliente' />
              <Input control={control} name='carro' label='Modelo do equipamento' errorMessage={errors.carro && errors.carro.message}/>
              <Input control={control} name='placa' label='Placa ou número de série'errorMessage={errors.placa && errors.placa.message} />
            </>
          )}
          {activeTab === 'descricao' && (
            <>
              <Input control={control} name='motivo' label='Motivo' errorMessage={errors.motivo && errors.motivo.message}/>
              <Input control={control} name='laudo' label='Laudo tecnico' errorMessage={errors.laudo && errors.laudo.message}/>
              <Input control={control} name='solucao' label='Solução do problema'errorMessage={errors.solucao && errors.solucao.message} />
              <Input control={control} name='supervisor' label='Supervisor' />
              <Input control={control} name='tecnico' label='Técnico' />
            </>
          )}
          {activeTab === 'detalhes' && (
            <>
              <Input control={control} name='nomePeca' label='Nome da peça' />
            </>
          )}
        </VStack>
        <Button title='Cadastrar' onPress={handleSubmit(newOrder)}/>
      </Box>
    </>
  )
}

export default index