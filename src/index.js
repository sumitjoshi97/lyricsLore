import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from './context';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const app = (
    <Provider>
        <App />
    </Provider>
)
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();