import React, {Component} from 'react';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import Root from './nav';

const middleware = [thunk]
const store = createStore(
    reducers,
    applyMiddleware(...middleware)
)


export default class App extends Component {
    render() {
        return(
            <Provider store = {store}>
                <Root/>
            </Provider>
        )
    }
}