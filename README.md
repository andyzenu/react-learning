# react-learning

Virtual dom is Object

<h1>JSX is JavaScript + XML</h1>

1. no quotes when define virtual `const myPropTypes = <div>abc</div>`
2. variable needed to wrap with parentheses `{myPropTypes}`
3. use className instead of class attribute `<span className="abc">123</span>`
4. only one root tag
5. close all the tags `<input type="text" />`
6. capitalise tag to use components `<Good>better</Good>`
7. inline-style needed to be wrapped with double parentheses and attribute in camel style `<strong style={{fontSize: "100px"}}>abc</strong>`

<h2>Class Component is not really used anywhere</h2>

<h1>State</h1>

1. set up the constructor with super props and initial states
2. `const {isHot} = this.state` <=> `const isHot = this.state.isHot`
3. state is not able to be changed directly, which needs a native API to change

<h1>ref</h1>

similar like id

1. string mode is not recommended, bad efficient
2. ref= c => this.input = c
3. React.createRef returns a container, and container can be used as a node

render() run when initial display and state changes
componentDidMount() run once when initial display

<h1>Key</h1>
when data changes, react updates the new date to create a new DOM, and react compares new DOM and old DOM (diff).

If the virtual DOM find the same Key of the new DOM and old DOM

1. virtual DOM is different, and replace the old DOM with the new one.
2. virtual DOM is same, and then doing nothing.

Use ID as key
