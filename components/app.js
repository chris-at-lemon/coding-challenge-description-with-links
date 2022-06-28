/* @flow */
import * as React from 'react';
import DescriptionWithLinks from './descriptionWithLinks';
import Name from '../containers/name';
import City from '../containers/city';


export default class App extends React.Component<{}> {
    render(): React.Node {
        return (
            <div>
                <Name />
                <City />
                <DescriptionWithLinks
                    description={`My favourite website is www.behance.net and my profile can be found at https://www.behance.net/chrisatlemon/.`}
                    links={[
                        {url: 'www.behance.net', text: 'Behance'},
                        {url: 'https://www.behance.net/chrisatlemon/', text: 'Chris\' Behance Profile'}
                    ]}
                />
            </div>
        );
    }
}
