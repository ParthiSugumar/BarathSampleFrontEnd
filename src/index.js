import React from 'react';
import ReactDOM from 'react-dom';
import Entry from './entry';
import registerServiceWorker from './registerServiceWorker';
import Svg from './svg';

ReactDOM.render(
    <Entry/>,
    document.getElementById('root')
);
registerServiceWorker();
