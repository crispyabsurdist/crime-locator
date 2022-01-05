import React, { useState } from 'react'
import useSWR from 'swr'
import CrimePost from '../CrimePost'
import Header from '../Header'
import styles from './LocationQuery.module.scss'

export default function LocationQuery() {
  let [city, setCity] = useState('... ')
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
    <div>
      <Header title={`Senast rapporterat i`} location={city} />
      <div className={`container`}>
        <div className={`row justify-content-center`}>
          <div className={`col-md-6`}>
            <form className={`${styles.searchInput}`} onSubmit={handleSubmit}>
              <input
                type="text"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value)
                }}
                placeholder="Sök efter område"
              />
            </form>
          </div>
        </div>
        <div className="row">
          {data.data.map((crime) => {
            if (crime.id === null){
              return false
            } else {
              return <CrimePost data={crime} key={crime.id} />
            }
          })}
        </div>
      </div>
    </div>
  )
}
