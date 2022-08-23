import React, {useContext} from 'react';
import {MapContext} from "../../map/contexts/MapContext";
import {ToolbarContext} from "../contexts/ToolbarContext";

//지도 축척 확대/축소
export default function Clear() {
    const { map } = useContext(MapContext); // ol 맵객체
    const [toolbarState, dispatch] = useContext(ToolbarContext);
    return (
        <button type="button" onClick={()=> dispatch({type:'ACTIVE_CLEAR'})} className="btn btnReset" title="지도화면을 초기화 시킵니다"><span>초기화</span></button>
    );
}