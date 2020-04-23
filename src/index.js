import React from 'react';
import ReactDOM from 'react-dom';
import Entry from './entry';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Entry/>,
    document.getElementById('root')
);
registerServiceWorker();
