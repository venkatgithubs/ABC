import React from "react"
import   ReactDOM from "react-dom/client"

const parent = React.createElement('div',{},"hello world of joy...")
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("id"));
root.render(parent);
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