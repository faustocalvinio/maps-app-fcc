import { useContext } from "react"
import { MapContext, PlacesContext } from "../context"

export const BtnMyLocation = () => {


    const { map } = useContext( MapContext )
    const { userLocation } = useContext( PlacesContext )

    const onClick = () => {
        if ( !map ) throw new Error('No hay mapa')
        if (!userLocation) throw new Error('No hay ubicacion')

        map.flyTo({
            zoom: 14,
            center: userLocation
        })
       
    }

  return (
    <button 
        className="btn btn-primary"
        style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 999,
        }}
        onClick={ onClick }
    >
        Mi Ubicacion
    </button>
  )
}
