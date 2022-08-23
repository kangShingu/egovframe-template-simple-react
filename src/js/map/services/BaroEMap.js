import { Map, View } from 'ol'
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import * as olSize from 'ol/size';
import WMTSTileGrid from 'ol/tilegrid/WMTS';
import * as olExtent from 'ol/extent';
import * as olProj from 'ol/proj';
import {register} from 'ol/proj/proj4';
import proj4 from "proj4";


class BaroEMap {
    constructor() {
        proj4.defs('EPSG:5179', '+proj=tmerc +lat_0=38 +lon_0=127.5 +k=0.9996 +x_0=1000000 +y_0=2000000 +ellps=GRS80 +units=m +no_defs');
        register(proj4);
        this.epsg5179 = olProj.get('EPSG:5179');
        this.epsg5179.setExtent([-200000.0, -28024123.62, 31824123.62, 4000000.0]);
        this.map = null;
    }
    createMap() {
        let map = new Map({
            target: "map",  // 위 index.html에 div id가 map인 엘리먼트에 맵을 표출
            controls: [],
            view : new View({
                projection: 'EPSG:5179',
                center : [954876.8684752587, 1948993.7171495291],
                constrainResolution: true,
                minZoom : 8,
                maxZoom : 19,
            }),
        });
        this.map = map;
        map.layer =  new TileLayer({
            url : "//map.ngii.go.kr/openapi/Gettile.do?apikey=04trYP9_xwLAfALjwZ-B8g"
            ,matrixSet : "EPSG:5179"
            ,format : "image/png"
            ,projection : this.epsg5179
            ,tileGrid : new WMTSTileGrid({
                origin : olExtent.getTopLeft(this.epsg5179.getExtent()),
                resolutions : [2088.96, 1044.48, 522.24, 261.12, 130.56, 65.28, 32.64, 16.32, 8.16, 4.08, 2.04, 1.02, 0.51, 0.255],
                matrixIds : ["L05","L06","L07","L08","L09","L10","L11","L12","L13","L14","L15","L16","L17","L18"]
            })
            ,style : 'korean'
            ,wrapX : true
            ,crossOrigin : 'anonymous'
            ,visible : true
            ,source: new XYZ({
                tileUrlFunction: (coordinate) => {
                    coordinate[0] = "L" + this.fillzero(coordinate[0] + 5, 2);
                    return `//map.ngii.go.kr/openapi/Gettile.do?apikey=04trYP9_xwLAfALjwZ-B8g&service=WMTS&request=GetTile&version=1.0.0&layer=korean_map&style=korean&format=image/png&tilematrixset=korean&tilematrix=${coordinate[0]}&tilerow=${coordinate[2]}&tilecol=${coordinate[1]}`;
                },
                type : 'image/png',
                tileSize: new olSize.toSize([256,256]),
                maxResolution: 2088.96,
                projection: "EPSG:5179"
            })
        });

        map.addLayer(map.layer);
        map.getView().setZoom(14);
        return map;
    }

    fillzero(n, digits) {
        let zero = '';
        n = n.toString();
        if (digits > n.length) {
            for (let i = 0; digits - n.length > i; i++) {
                zero += '0';
            }
        }
        return zero + n;
    };
}
export default BaroEMap;