/* @flow */
import React from 'react';

type Props = {
  loading: boolean,
  error: ?Error,
  data: ?Object
 };

// Took a bit of a shortcut on the "any" type
export default function wrapper(Name: any) {
    return class extends React.Component<Props> {
        render() {
            if (this.props.loading) {
                return <div>Loading...</div>;
            }
            if (this.props.error) {
                return <div>Error!</div>;
            }
            if (this.props.data) {
                if (this.props.data.name) {
                    return <Name name={this.props.data.name} />;
                }
                if (this.props.data.city) {
                    return <Name name={this.props.data.city} />;
                }
            }
            return null;
        }
    };
}
