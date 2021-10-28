import { useHistory } from 'react-router-dom'

export function Offers () {
  const history = useHistory()

  const handleClick = () => history.push('/')

  return (
    <>
      <h1>Offers</h1>
      <button onClick={handleClick}>Go back</button>
    </>
  )
}
