import { OfferProps } from 'pages/Offers/CardOffer'
import { useEffect, useState, MouseEvent } from 'react'

import { userData } from 'resources/data.json'

export function useOffers () {
  const [offers, setOffers] = useState<Omit<OfferProps, 'onSelected'>[]>()

  useEffect(() => {
    setOffers(userData.offers)
  }, [])

  const onSelected = (id: number) => (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    setOffers((offers) => {
      return offers?.map((offer) => ({
        ...offer,
        isSelected: offer.id === id,
      }))
    })
  }

  return {
    offers,
    onSelected,
  }
}
