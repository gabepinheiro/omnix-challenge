import { Header } from 'layout/Header'
import { SearchOutline as SearchIcon } from '@styled-icons/evaicons-outline'

import * as S from './styles'
import { Button } from 'ui/Button'
import { useHistory } from 'react-router'
import { FormEvent } from 'react'

export function Home () {
  const history = useHistory()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    history.push('/ofertas')
  }

  return (
    <>
      <Header />
      <S.Content>
        <S.Title>Seja bem vindo a OmnixFiber</S.Title>
        <S.SubTitle>Informe seu CEP para a gente separar ofertas especiais para o seu endereço!</S.SubTitle>

        <S.Form onSubmit={handleSubmit}>
          <S.FormGroup>
            <S.Label htmlFor='cep' aria-label='Digite seu CEP' title='Digite seu CEP'>
              <SearchIcon size={32} />
            </S.Label>
            <S.Input id='cep' type='text' title='Digite seu CEP' placeholder='Digite seu CEP' />
          </S.FormGroup>

          <Button
            type='submit'
            size='large'
            color='primary'
            title='Consultar o CEP'
          >
            Consultar
          </Button>
        </S.Form>
      </S.Content>
    </>
  )
}
