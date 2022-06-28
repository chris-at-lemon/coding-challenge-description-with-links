/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const root = document.getElementById('react-root');

if (root !== null) {
    ReactDOM.render(<App />, root);
}
