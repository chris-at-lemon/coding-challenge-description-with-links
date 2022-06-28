/* @flow */
import React from 'react';
import Name from '../components/name';

type State = {
    loading: boolean,
    error: ?Error,
    data: ?Object
};

export default class NameContainer extends React.Component<{}, State> {
    state = {
        loading: true,
        error: null,
        data: null
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({loading: false, data: {name: 'Chris Herrmann'}});
        }, 2500);
    }

    render() {
        return <Name {...this.state} />;
    }
}
