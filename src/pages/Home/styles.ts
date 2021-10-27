import styled from 'styled-components/macro'

export const Content = styled.main`
  max-width: 120rem;
  margin: 10rem auto;

  text-align: center;
  color: #222E50;

  padding: 0 1.6rem;
`

export const Title = styled.h2`
  font-size: 4.8rem;
  margin-bottom: 2.4rem;
`

export const SubTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 5.2rem;
`
export const Form = styled.form`
  display: flex;

  width: 70%;
  margin: 0 auto;
`

export const Label = styled.label`
`

export const Input = styled.input`
  width: 100%;
  border: 0;
  padding: 1rem 1rem 1.4rem;
  border-bottom: 1px solid #222E50;

  outline: none;

  font-size: 1.8rem;

  color: #222E50;
  letter-spacing: .4rem;

  background-color: #fff;
  box-shadow: 0 .2rem .5rem rgba(0,0,0, .2);

  &::placeholder {
    color: inherit;
  }

  &:focus {
    box-shadow: 0 .5rem 1rem rgba(0,0,0, .2);
  }

`

export const FormGroup = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
`
