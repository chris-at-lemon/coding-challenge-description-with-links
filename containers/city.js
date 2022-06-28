/* @flow */
import React from 'react';
import City from '../components/city';

type State = {
    loading: boolean,
    error: ?Error,
    data: ?Object
};

export default class CityContainer extends React.Component<{}, State> {
    state = {
        loading: true,
        error: null,
        data: null,
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({loading: false, data: {city: 'Sevilla, ES'}});
        }, 2000);
    }

    render() {
        return <City {...this.state} />;
    }
}
