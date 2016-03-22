import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxPromise from 'redux-promise';

import App from './components/app.jsx';
import reducers from './reducers/index';

const store = applyMiddleware(ReduxPromise)(createStore)(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'));


