import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Svg from './svg';
import registerServiceWorker from './registerServiceWorker';
var Machine = [
    {
        svgString: '<rect width="100%" height="100%" style="fill:red;stroke-width:10;stroke:rgb(0,0,0)"/>',
        pointX: 0,
        pointY: 2,
        machineHeight: 1,
        machineWidth: 2,
        machineID: 'machine-1',
        machineStatus: 1
    },
    {
        svgString: '<rect width="100%" height="100%" style="fill:rgb(0,0,255);stroke-width:10;stroke:rgb(0,0,0)"/>',
        pointX: 5,
        pointY: 2,
        machineHeight: 1,
        machineWidth: 2,
        machineID: 'machine-2',
        machineStatus: 1
    },
    {
        svgString: '<rect width="100%" height="100%" style="fill:green;stroke-width:10;stroke:rgb(0,0,0)""/>',
        pointX: 8,
        pointY: 3,
        machineHeight: 1,
        machineWidth: 2,
        machineID: 'machine-3',
        machineStatus: 0
    },
    {
        svgString: '<rect width="100%" height="100%" style="fill:yellow;stroke-width:10;stroke:rgb(0,0,0)"/>',
        pointX: 11,
        pointY: 3,
        machineHeight: 1,
        machineWidth: 2,
        machineID: 'machine-4',
        machineStatus: 1
    }
]
ReactDOM.render(<Svg machine={Machine} totalHeight={400} totalWidth={800} LayoutHeight={4} LayoutWidth={16} />, document.getElementById('root'));
registerServiceWorker();
