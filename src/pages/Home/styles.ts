import styled from 'styled-components/macro'

export const Content = styled.main`
  max-width: 120rem;
  margin: 10rem auto;

  text-align: center;
  color: var(--color-primary);

  padding: 0 1.6rem;
`

export const Title = styled.h2`
  font-size: 4.8rem;
`

export const SubTitle = styled.h3`
  font-size: 1.8rem;
  `
export const Form = styled.form`
  margin-top: 8rem;
`

export const Label = styled.label`
`

export const Input = styled.input`
  width: 100%;
  border: 0;
  padding: 1rem 1rem 1.4rem;
  border-bottom: 1px solid var(--color-primary);

  outline: none;

  font-size: 1.8rem;

  color: var(--color-primary);
  letter-spacing: .4rem;

  background-color: var(--color-white);

  &::placeholder {
    color: inherit;
  }

  &:focus {
    box-shadow: 0 .5rem 1rem rgba(0,0,0, .2);
  }

`

export const FormGroup = styled.div`
  max-width: 80rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2.4rem;
`
