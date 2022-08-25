import TileLayer from 'ol/layer/Tile';
import WMTSTileGrid from "ol/tilegrid/WMTS";
import * as olExtent from "ol/extent";
import XYZ from "ol/source/XYZ";
import * as olSize from "ol/size";
import * as olProj from "ol/proj";
import {fillzero} from "../../mapUtils";



export default ()=>{

    const epsg5179 = olProj.get('EPSG:5179');
    epsg5179.setExtent([-200000.0, -28024123.62, 31824123.62, 4000000.0]);

    return new TileLayer({
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
    })
}
