import React from "react"
import   ReactDOM from "react-dom/client"
const FunComponent = () => <h1 id='idh2'>hello world of joy...(jsx)</h1>
const parent = React.createElement('div',{},"hello world of joy...")
const parentjsx = <div><h1 id='idh1'>hello world of joy...(jsx)</h1></div>
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("id"));
root.render(<FunComponent></FunComponent>);

// alert(document.getElementById("id"));
// ReactDOM.render(
//     React.createElement(
//         'h1',
//         null,
//         'hello world'
//         ),
//         document.getElementById("id")
// );
// ReactDOM.render(
//     React.createElement(
//         'h1',
//         null,
//         'hello world2!..'
//         ),
//         document.getElementById("ids")
// );