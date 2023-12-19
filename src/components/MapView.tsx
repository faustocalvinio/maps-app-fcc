import { useContext, useLayoutEffect, useRef } from "react"
import { PlacesContext, MapContext } from "../context"
import { Loading } from ".";
import mapboxgl from "mapbox-gl";

export const MapView = () => {

    const { isLoading,userLocation } = useContext(PlacesContext);
    const mapDiv = useRef<HTMLDivElement>(null)
    const { setMap } = useContext(MapContext);

    useLayoutEffect(() => {
      if (isLoading) return;

      const map = new mapboxgl.Map({
        container: mapDiv.current!,
        style: 'mapbox://styles/mapbox/light-v10',
        center: userLocation,
        zoom: 14,
        })
        setMap(map);

    }, [isLoading])

    if (isLoading) return <Loading />;

    return (
        <div 
            ref={mapDiv}
            style={{
                height:'100vh',
                width:'100vw',
                position:'fixed',
                top:0,
                left:0,
            }}
        >
            { userLocation?.join(",") }
        </div>
    )
}
