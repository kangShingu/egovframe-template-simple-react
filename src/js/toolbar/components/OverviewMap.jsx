import React, {useContext,useState} from 'react';
import {MapContext} from "../../map/contexts/MapContext";
import {ToolbarContext} from "../contexts/ToolbarContext";
import {OverviewMap as OlOverviewMap} from "ol/control";
import TileLayer from "ol/layer/Tile";
import WMTSTileGrid from "ol/tilegrid/WMTS";
import * as olExtent from "ol/extent";
import XYZ from "ol/source/XYZ";
import * as olSize from "ol/size";
import proj4 from "proj4";
import {register} from "ol/proj/proj4";
import * as olProj from "ol/proj";
//지도 축척 확대/축소
export default function OverviewMap() {
    const { map } = useContext(MapContext); // ol 맵객체
    const [toolbarState, dispatch] = useContext(ToolbarContext);
    const [state, setState] = useState(false);
    proj4.defs('EPSG:5179', '+proj=tmerc +lat_0=38 +lon_0=127.5 +k=0.9996 +x_0=1000000 +y_0=2000000 +ellps=GRS80 +units=m +no_defs');
    register(proj4);
    let epsg5179 = olProj.get('EPSG:5179');
    epsg5179.setExtent([-200000.0, -28024123.62, 31824123.62, 4000000.0]);
    let olOverviewMap = new OlOverviewMap({
        layers : [new TileLayer({
            url : "//map.ngii.go.kr/openapi/Gettile.do?apikey=04trYP9_xwLAfALjwZ-B8g"
            ,matrixSet : "EPSG:5179"
            ,format : "image/png"
            ,projection : epsg5179
            ,tileGrid : new WMTSTileGrid({
                origin : olExtent.getTopLeft(epsg5179.getExtent()),
                resolutions : [2088.96, 1044.48, 522.24, 261.12, 130.56, 65.28, 32.64, 16.32, 8.16, 4.08, 2.04, 1.02, 0.51, 0.255],
                matrixIds : ["L05","L06","L07","L08","L09","L10","L11","L12","L13","L14","L15","L16","L17","L18"]
            })
            ,style : 'korean'
            ,wrapX : true
            ,crossOrigin : 'anonymous'
            ,visible : true
            ,source: new XYZ({
                tileUrlFunction: (coordinate) => {
                    coordinate[0] = "L" + fillzero(coordinate[0] + 5, 2);
                    return `//map.ngii.go.kr/openapi/Gettile.do?apikey=04trYP9_xwLAfALjwZ-B8g&service=WMTS&request=GetTile&version=1.0.0&layer=korean_map&style=korean&format=image/png&tilematrixset=korean&tilematrix=${coordinate[0]}&tilerow=${coordinate[2]}&tilecol=${coordinate[1]}`;
                },
                type : 'image/png',
                tileSize: new olSize.toSize([256,256]),
                maxResolution: 2088.96,
                projection: "EPSG:5179"
            })
        })]
    });
    const fillzero = (n, digits) =>{
        let zero = '';
        n = n.toString();
        if (digits > n.length) {
            for (let i = 0; digits - n.length > i; i++) {
                zero += '0';
            }
        }
        return zero + n;
    };
    const handleOverviewMapClick = () => {
        dispatch({type:'ACTIVE_CLEAR'});
        if (state === false) {
            map.addControl(olOverviewMap);
            setState(!state);
        } else {
            console.log(olOverviewMap);
            console.log(map);
            map.removeControl(olOverviewMap.getOverviewMap());
            setState(!state);
        }

    };
    return (
        <button type="button" className="btn btnIndex" onClick={handleOverviewMapClick}>
            <span>인덱스맵</span>
        </button>
    );
}