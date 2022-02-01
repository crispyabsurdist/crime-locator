import React, {useState, useCallback} from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

export default function MapComponent() {
  const containerStyle = {
    width: '800px',
    height: '400px',
  }

  const center = {
    lat: 57.779474596918945,
    lng: 14.161760229345505,
  }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: '',
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds()
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={(ev) => {
        'latitide = ', ev.latLng.lat()
        'longitude = ', ev.latLng.lng()
      }}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  )
}
