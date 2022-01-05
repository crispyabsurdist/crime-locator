import React from 'react'
import useSWR from 'swr'
import CrimePost from '../CrimePost'
import Header from '../Header'

export default function IndexQuery() {
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data, error } = useSWR(
    'https://brottsplatskartan.se/api/events?app=crimelocator',
    fetcher,
  )

  if (error) return 'Idag begick servern ett brott.'
  if (!data) return 'Laddar brottsdata...'

  return (
    <>
      <Header title={'Senaste händelserna Nationellt'} />
      <div className={`container`}>
        <div className={`row`}>
          {data.data.map((crime) => {
            if (crime.id === null){
              return false
            } else {
              return <CrimePost data={crime} key={crime.id} />
            }
          })}
        </div>
      </div>
    </>
  )
}
