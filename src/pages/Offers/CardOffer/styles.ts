import styled, { css } from 'styled-components/macro'

type WrapperProps = {
  selected: boolean
}

export const Wrapper = styled.figure<WrapperProps>`
  background-color: var(--color-white);
  border: 1px solid ${({ selected }) =>
     selected
     ? css`var(--color-primary);`
     : css`#ddd;`};

  border-radius: 10px;
  color: var(--color-primary);
  text-align: center;
  padding: 1.8rem;

  min-height: 32rem;

  display: flex;
  flex-direction: column;

  transition: all .2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 1rem 2rem rgba(0,0,0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`
export const Title = styled.h2`
  font-size: 1.8rem;
`

export const Velocity = styled.h3`
  font-size: 2.4rem;
  font-weight: 300;
`

export const IconWrapper = styled.div`
  margin-bottom: 2.4rem;
`

export const Price = styled.figcaption`
  display: inline-block;
  font-size: 2.4rem;
  font-weight: 700;

  margin-top: auto;

  & > span {
    font-size: 1.2rem;
  }
`

export const ButtonWrapper = styled.div`
  margin-top: 2.4rem;
`
