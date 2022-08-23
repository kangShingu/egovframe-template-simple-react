import React, {useReducer} from 'react';
import Scale from "./Scale";
import Draw from "./Draw";
import BackgroundMap from "./BackgroundMap";
import {ToolbarContext} from "../contexts/ToolbarContext";
import {toolbarInitialState, toolbarReducer} from "../reducres/ToolbarReducer";
import Measure from "./Measure";
import Clear from "./Clear";
import Print from "./Print";
import OverviewMap from "./OverviewMap";

export default function Toolbar() {
    const [toolbarState, dispatch] = useReducer(toolbarReducer, toolbarInitialState);
    return (
        <ToolbarContext.Provider value={[toolbarState, dispatch]}>
            <div className="toolbar">
                <BackgroundMap></BackgroundMap>
                <Scale></Scale>
                <div className="btnTool">
                    <Clear></Clear>
                    <Draw></Draw>
                    <Measure></Measure>
                    <Print></Print>
                    <OverviewMap></OverviewMap>
                </div>
            </div>
        </ToolbarContext.Provider>
    );
 };