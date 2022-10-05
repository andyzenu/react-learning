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
