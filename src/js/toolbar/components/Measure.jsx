import React, {useContext} from 'react';
import {MapContext} from "../../map/contexts/MapContext";
import {ToolbarContext} from "../contexts/ToolbarContext";

//지도 축척 확대/축소
export default function Measure() {
    const { map } = useContext(MapContext); // ol 맵객체
    const [toolbarState, dispatch] = useContext(ToolbarContext);
    return (
        <div className={"dep1 ".concat(toolbarState.measure)}>
            <button type="button" className="btn btnRuler" data-value="measure" title="지도상에 면적, 거리를  측정할 수 있습니다" onClick={()=>dispatch({type:'ACTIVE_MEASURE'})}>
                <span>측정</span>
            </button>
            <div className="dep2 sel">
                <button type="button" className="btn ruler area"><span>면적</span></button>
                <button type="button" className="btn ruler distance"><span>거리</span></button>
            </div>
        </div>
    );
}