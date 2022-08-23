import React, {useContext} from 'react';
import {MapContext} from "../../map/contexts/MapContext";
import {ToolbarContext} from "../contexts/ToolbarContext";
export default function Draw() {
    const { map } = useContext(MapContext); // ol 맵객체
    const [toolbarState, dispatch] = useContext(ToolbarContext);
    return (
        <div className={"dep1 ".concat(toolbarState.draw)}>
            <button type="button" className="btn btnDraw" onClick={()=>dispatch({type:'ACTIVE_DRAW'})}><span>그리기</span></button>
            <div className="dep2 sel">
                <button type="button" className="btn draw text"><span>텍스트</span></button>
                <button type="button" className="btn draw polygon"><span>다각형</span></button>
                <button type="button" className="btn draw line"><span>라인</span></button>
                <button type="button" className="btn draw point"><span>포인트</span></button>
                <button type="button" className="btn draw circle"><span>원</span></button>
                <button type="button" className="btn draw rectangle"><span>사각형</span></button>
                <button type="button" className="btn draw curve"><span>곡선</span></button>
                <button type="button" className="btn draw buffer"><span>버퍼</span></button>
            </div>
        </div>
    );
}