import React, {useContext} from 'react';
import {MapContext} from "../../map/contexts/MapContext";

//지도 축척 확대/축소
export default function Scale() {
    const { map } = useContext(MapContext); // ol 맵객체

    return (
        <div className="scale">
            <button type="button" className="btnScaleUp" title="지도를 확대할 수 있습니다" onClick={() => map.getView().setZoom(map.getView().getZoom() + 1)}>
                <span className="hidden">확대</span>
            </button>
            <button type="button" className="btnScaleDown" title="지도를 축소할 수 있습니다" onClick={() => map.getView().setZoom(map.getView().getZoom() - 1)}>
                <span className="hidden">축소</span>
            </button>
        </div>
    );
}