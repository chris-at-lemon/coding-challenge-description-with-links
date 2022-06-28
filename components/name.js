/* @flow */
import React from 'react';
import wrapper from '../utilities/wrapper';

type Props = {
    loading: boolean,
    error: ?Error,
    data: ?Object,
    name: string
};

class Name extends React.Component<Props> {
    render() {
        return (
            <h2>{this.props.name}</h2>
        );
    }
}

export default wrapper(Name);
