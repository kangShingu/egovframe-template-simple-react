import React, {useContext, useState, useCallback, useEffect} from 'react';
import {MapContext} from "../../map/contexts/MapContext";
import {ToolbarContext} from "../contexts/ToolbarContext";
import {OverviewMap as OlOverviewMap} from "ol/control";
import BaroEMapLayer from "../../map/layers/BaroEMapLayer";
//지도 축척 확대/축소
export default function OverviewMap() {
    const { map } = useContext(MapContext); // ol 맵객체
    const [toolbarState, dispatch] = useContext(ToolbarContext);
    const [state, setState] = useState(false);

    const [overView, setOverView] = useState(undefined);


    useEffect(() => {
        let olOverviewMap = new OlOverviewMap({
            layers : [BaroEMapLayer()]
        });
        setOverView(olOverviewMap);
        return ()=> {
        }
    }, []);

    const handleOverviewMapClick = useCallback(()=>{
        dispatch({type:'ACTIVE_CLEAR'});
        if (state === false) {
            map.addControl(overView);
            setState(!state);
        } else {
            map.removeControl(overView);
            setState(!state);
        }
    },[map, state]);

    return (
        <button type="button" className="btn btnIndex" onClick={handleOverviewMapClick}>
            <span>인덱스맵</span>
        </button>
    );
}