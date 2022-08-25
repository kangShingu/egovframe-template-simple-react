import React from 'react';
import ReactDOM from 'react-dom';
import PublicApp from './PublicApp';
import reportWebVitals from './reportWebVitals';
import proj4 from "proj4";
import {register} from "ol/proj/proj4";

proj4.defs('EPSG:5179', '+proj=tmerc +lat_0=38 +lon_0=127.5 +k=0.9996 +x_0=1000000 +y_0=2000000 +ellps=GRS80 +units=m +no_defs');
register(proj4);

ReactDOM.render(
  <React.StrictMode>
      <PublicApp />
  </React.StrictMode>,
  document.getElementById('wrap')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
