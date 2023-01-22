import { position } from '@chakra-ui/react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import React from 'react'
import { DivMaps } from './style'

export const Maps = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyA3gdwppQDbkF4cH-coPuV751qqNbdTAJs"
      })

      const position = {
        lat: -7.240106,
        lng: -39.427781
      }

  return (
    <DivMaps>
        {
            isLoaded ? (
                <GoogleMap
                  mapContainerStyle={{width: '100%', height: '100%'}}
                  center={{
                    lat: -7.240106,
                    lng: -39.427781
                  }}
                  zoom={12}
                >
                <Marker
                    position={position}
                    options={{
                        label: {
                            text: 'Local de venda',
                            className: 'map-marker'
                        }
                }}/>
                </GoogleMap>
            ) : <></>
        }
    </DivMaps>
  )
}
