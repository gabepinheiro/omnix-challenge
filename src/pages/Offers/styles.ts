import styled from 'styled-components/macro'

export const Wrapper = styled.main`
  text-align: center;
  color: var(--color-primary);

  min-height: 90vh;
`

export const Title = styled.h2`
  font-size: 4.8rem;
`

export const SubTitle = styled.h3`
  font-size: 1.8rem;
`

export const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 2.4rem;
  right: 1.8rem;
`

export const SectionOffers = styled.section`
  margin-top: 6.5rem;
`

export const ListOffers = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4.8rem;
`

export const ItemOffer = styled.li`
  flex: 0 1 250px;
`
