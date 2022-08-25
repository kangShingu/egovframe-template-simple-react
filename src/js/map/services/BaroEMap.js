import {Map, View} from 'ol'
import BaroEMapLayer from "../layers/BaroEMapLayer";


class BaroEMap {
    constructor() {
        this.map = null;
    }
    createMap() {
        this.map = new Map({
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

        this.map.addLayer(BaroEMapLayer());
        this.map.getView().setZoom(14);

        return this.map;
    }
}

export default BaroEMap;