import React from 'react'
import useSWR from 'swr'
import CrimePost from '../CrimePost'
import Header from '../Header'

export default function IndexQuery() {
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data, error } = useSWR(
    'https://brottsplatskartan.se/api/events?app=nextjstestprojekt',
    fetcher,
  )

  if (error) return 'Idag begick servern ett brott.'
  if (!data) return 'Laddar brottsdata...'

  return (
    <div className="crimeContainer">
      <Header title={'Senaste händerlserna Nationellt'} />
      {data.data.map((crime, index) => {
        return <CrimePost data={crime} key={index} />
      })}
    </div>
  )
}
