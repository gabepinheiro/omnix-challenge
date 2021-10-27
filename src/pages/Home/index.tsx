import { Header } from 'layout/Header'

import * as S from './styles'

export function Home () {
  return (
    <>
      <Header />
      <S.Content>
        <S.Title>Seja bem vindo(a) a OmnixFiber</S.Title>
        <S.SubTitle>Informe seu CEP para a gente separar ofertas especiais para o seu endereço!</S.SubTitle>

        <S.Form>
          <S.FormGroup>
            <S.Label htmlFor='cep'>CEP: </S.Label>
            <S.Input id='cep' type='text' title='Digite seu CEP' placeholder='Digite seu CEP' />
          </S.FormGroup>
        </S.Form>
      </S.Content>
    </>
  )
}
