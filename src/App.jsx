import React from 'react';
import BaseComponent from "./components/BaseComponent.jsx";
import './App.scss';
import Store from "./Store.js";
import { Provider } from "react-redux";
import ReactCalculator from "./components/ReactCalculator.jsx";

export default class DropApp extends BaseComponent {
    constructor (props) {
        super(props);
        this.store = Store();
    }
    render () {
        return (
            <div className = "App">
                <Provider store={this.store}>
                    <ReactCalculator />
                </Provider>
            </div>
        );
    }
}

