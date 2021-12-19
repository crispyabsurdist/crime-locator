import React, { useState } from 'react'
import useSWR from 'swr'
import CrimePost from '../CrimePost'
import Header from '../Header'

export default function LocationQuery() {
  let [city, setCity] = useState()
  let [input, setInput] = useState('')

  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data, error } = useSWR(
    `https://brottsplatskartan.se/api/events/?location=${city}`,
    fetcher,
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    setCity(input)
  }

  if (error) return 'Idag begick servern ett brott.'
  if (!data) return 'Laddar brottsdata...'

  return (
    <div className="crimeContainer">
      <Header title={`Senast rapporterat i`} location={city} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
          }}
          placeholder="Sök efter område"
        />
      </form>

      {data.data.map((crime, index) => {
        return <CrimePost data={crime} key={index} />
      })}
    </div>
  )
}
