/* @flow */
import * as React from 'react';
import Link from "../components/link";

// type Link = {
//     url: string,
//     text: string
// };

type Props = {
    description: string,
    links: Array<Object>
};

export default class DescriptionWithLinks extends React.Component<Props> {
    static defaultProps = {
        links: [],
        description: ''
    };

    render(): React.Node {
        const {description, links} = this.props;

        // Split description string into array
        // This is necessary so we can inject components as opposed to just replacing matches in string
        let descArray: any = description.trim().split(" ");

        // For every link check if it has a match in descArray. If it does replace with link component.
        for (const link of links) {
            descArray = descArray.map((word: string) =>
                (typeof word === "string" ? word.replace("/.", "/") : "") === link.url ? (
                    <Link url="links.url">{link.text}</Link>
                ) : (
                    word
                )
            );
        }


        return (<div>
            <p>
                {descArray.map((word: string, i: number) => (
                    <span key={i}>{word} </span>
                ))}
            </p>
        </div>);
    }
}
