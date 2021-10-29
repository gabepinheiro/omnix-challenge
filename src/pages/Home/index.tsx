import { SearchOutline as SearchIcon } from '@styled-icons/evaicons-outline'

import * as S from './styles'
import { Button } from 'ui/Button'
import { Container } from 'ui/Container'
import { useHistory } from 'react-router'
import { FormEvent } from 'react'

export function Home () {
  const history = useHistory()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const target = e.target as HTMLFormElement
    const inputCEP = target.elements.namedItem('cep') as HTMLInputElement

    history.push(`/ofertas/${inputCEP.value}`)
  }

  return (
    <S.Wrapper>
      <Container>
        <S.Title>Seja bem vindo a OmnixFiber</S.Title>
        <S.SubTitle>
          Informe seu CEP para a gente separar ofertas especiais para o seu endereço!
        </S.SubTitle>

        <S.Form onSubmit={handleSubmit}>
          <S.FormGroup>
            <S.Label htmlFor='cep' aria-label='Digite seu CEP' title='Digite seu CEP'>
              <SearchIcon size={32} />
            </S.Label>
            <S.Input
              id='cep'
              name='cep'
              type='text'
              title='Informe o CEP somente com os números'
              placeholder='Digite seu CEP'
              required
              pattern='[0-9]{8}'
              maxLength={8}
            />
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
      </Container>
    </S.Wrapper>
  )
}
