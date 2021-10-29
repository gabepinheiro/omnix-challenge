import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Container } from 'ui/Container'

export function NotFound () {
  return (
    <Wrapper>
      <Container>
        <h1>Página não encontrada.</h1>
        <Link to='/'><span>&larr;</span> Go Home</Link>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  text-align:center;
  color: var(--color-primary);

  h1 {
    font-size: 4.8rem;
  }

  a {
    color: currentColor;
    display: inline-block;
    font-size: 1.8rem;
    margin-top: 1.6rem;
    text-decoration: none;
    padding-bottom: .4rem;
    border-bottom: 2px solid currentColor;

    span {
      transition: all .3s;
    }

    &:hover {
      span {
        margin-right: 5px;
      }
    }
  }
`
