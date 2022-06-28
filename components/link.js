/* @flow */
import * as React from 'react';

type Props = {
    url: string,
    children: React.ChildrenArray<any>
};

export default function Link(props: Props) {
    return <a href={props.url}>{props.children}</a>;
}
