# Coding Challenge

This folder contains a quick coding challenge - it shouldn't take much more than an hour (if you're finding it takes
you longer feel free to stop and let us know why).

## Installation

Install the dependencies using `npm`. From the project's directory, run:

```bash
$ npm install
```

## Running the code

Scripts have been provided in `package.json` for running lint, flow, tests, and the server. To compile the code and
run the server run:

```bash
$ npm start
```

Then go to http://localhost:8080/

## Notes

1. You shouldn't need to use any dependencies but you're welcome to if you think it would help (unless the dependency
does all of the work for you).
1. You're welcome to use Google but don't copy and paste code.
1. Ideally your code should be tested and pass linting (tools have been provided including jest, enzyme, and eslint,
along with scripts in package.json to run them).
1. `flow` has been included - if you have time you may want to add type annotations.

## The challenge

There are two parts to the challenge.

### `<DescriptionWithLinks />`

`<DescriptionWithLinks />` (`components/descriptionWithLinks.js`) is a component that would display a description on 
a website. Currently it just puts the text on the page, but we would like you to add the ability to replace some links
with `<a>` tags. The component takes a `description` prop which is the description text including any links and a
`links` prop which is an array of `{url: "...", text: "..."}`. The resulting HTML should include the description text
 with any links replaced with `<Link url="url">text</Link>` where `url` and `text` come from the `links` prop and
 `<Link>` is from `components/link.js`.
 
For example, given the props `description="go to www.bbc.co.uk!", links={[{url: 'www.bbc.co.uk', text: 'The Beeb'}]}`
it would render as:

```javascript
<div>go to <Link url="www.bbc.co.uk">The Beeb</Link>!</div>
```

### Loading/error states

The `<City />` and `<Name />` presentational components (`components/city.js` and `components/name.js` respectively)
have some code repetition that we would like to make generic using a higher order component. Provide a wrapper function
that can be used to simplify both components to:

```javascript
function Name(props: any) {
    return <h2>{props.data.name}</h2>;
}

export default wrapper(Name);
```

and implement it for both components.

## Sending it back

When you're done, delete the `node_modules` folder, zip everything up, and send it over.
