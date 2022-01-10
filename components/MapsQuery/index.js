import React, { useEffect, useState, useCallback } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import useSWR from 'swr'
import CrimePost from '../CrimePost'
import Header from '../Header'
import styles from './MapsQuery.module.scss'

export default function MapsQuery() {
  const containerStyle = {
    width: '100%',
    height: '420px',
  }

  const center = {
    lat: 59.32,
    lng: 18.06,
  }

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBAvC5AIT83wF2zlF4r3KzeTFEUT7DnjBI',
  })

  let [input, setInput] = useState({ lat: 123, lng: 123 })
  let [map, setMap] = useState(true)

  const onLoad = useCallback(
    function callback(map) {
      const bounds = new window.google.maps.LatLngBounds()
      map.fitBounds(bounds)
      setMap(map)
    },
    [setMap],
  )

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data, error } = useSWR(
    `https://brottsplatskartan.se/api/eventsNearby?lat=${input.lat}&lng=${input.lng}`,
    fetcher,
  )

  if (error) return 'Idag begick servern ett brott.'
  if (!data) return 'Laddar brottsdata...'

  return (
    <>
      <div className={`container`}>
        <div className={`row justify-content-center pt-5 pb-5`}>
          <Header title={`Klicka på kartan`} />
          <div className={`col-md-12 mt-3 p-5 ${styles.colmap}`}>
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
                onLoad={onLoad}
                onUnmount={onUnmount}
                onClick={(e) => {
                  setInput({ lat: e.latLng.lat(), lng: e.latLng.lng() })
                }}
              >
                {/* Child components, such as markers, info windows, etc. */}
                <></>
              </GoogleMap>
            ) : (
              <>
                <span>Något gick fel med kartan.</span>
              </>
            )}
          </div>
        </div>
        <div className="row">
          {data.data &&
            data.data.map((crime) => {
              if (crime.id === null) {
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
