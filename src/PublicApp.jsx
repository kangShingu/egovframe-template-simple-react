import React, {useEffect, useState} from 'react';
import Toolbar from './js/toolbar/components/Toolbar.jsx';
import BaroEMap from "./js/map/services/BaroEMap";
import {MapContext} from "./js/map/contexts/MapContext";
import './css/cmm/ncmm.css';
import './css/nmap/nmap.css';
import './css/rmap/rmap.css';
import './css/cmm/ol_custom.css'

export default function PublicApp() {
    const [mapObject, setMapObject] = useState({});
    useEffect(() => {
        window.baroEMap = new BaroEMap();
        let map = window.baroEMap.createMap();
        setMapObject({ map })
        return ()=> null
    }, [])
    return (
        <>
            <MapContext.Provider value={mapObject}>
                <div id="map" style={{height:'100%', background:'none'}}></div>
                <Toolbar></Toolbar>
            </MapContext.Provider>
        </>
    )
}
