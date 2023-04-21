import useAxios from '../hooks/useAxios'
import Coin from './Coin'

const Markets = () => {
  const { response } = useAxios(
    'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
  )
  console.log(response)
  return (
    <section className='mt-8'>
      <h1 className='text-2xl mb2'>Markets</h1>
      {response?.map((coin) => (
        <Coin key={coin.id} coin={coin} />
      ))}
    </section>
  )
}

export default Markets
