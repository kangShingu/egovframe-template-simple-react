import React, {useContext} from 'react';
import {MapContext} from "../../map/contexts/MapContext";
import {ToolbarContext} from "../contexts/ToolbarContext";

//지도 축척 확대/축소
export default function Print() {
    const { map } = useContext(MapContext); // ol 맵객체
    const [toolbarState, dispatch] = useContext(ToolbarContext);
    return (
        <div className={"dep1 ".concat(toolbarState.print)}>
            <button type="button" className="btn btnPrint" title="지도화면을 저장, 출력할 수 있습니다" onClick={()=>dispatch({type:'ACTIVE_PRINT'})}>
                <span>출력</span>
            </button>
            <div className="dep2">
                <button type="button" className="btn print capture"><span>화면저장</span></button>
                <button type="button" className="btn print printing"><span>출력</span></button>
            </div>
        </div>
    );
}