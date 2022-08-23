import React, {useContext} from 'react';
import {MapContext} from "../../map/contexts/MapContext";
import {ToolbarContext} from "../contexts/ToolbarContext";
//배경지도
export default function BackgroundMap() {
    const { map } = useContext(MapContext); // ol 맵객체
    const [toolbarState, dispatch] = useContext(ToolbarContext);
    return (
        <div className={"dep1 mapViewGroup ".concat(toolbarState.basemap)}>
            <button type="button" className="btn btnMapType" title="바로e맵, 항공사진, 백지도등의 배경지도를 변경할 수 있습니다" onClick={()=>dispatch({type:'ACTIVE_BASEMAP'})}>
                <span className="hidden">배경지도</span>
            </button>
            <div className="dep2 sel webMapViewTool">
                <button type="button" className="btn mapView baroE">
                    <span>바로e맵</span>
                </button>
                <div className="dep3">
                    <button type="button" className="btn mapView airplane">
                        <span>항공사진</span>
                    </button>
                    <select className="airplaneS">
                    </select>
                </div>
                <button type="button" className="btn mapView whiteMap"><span>백지도</span></button>
                <button type="button" className="btn mapView space"><span>영문지도</span></button>
            </div>
        </div>
    );
}