import { init, propsModule, h } from "../../build/index.js";

const patch = init([propsModule]);

let oldvnode = h("div", ["div", "p"]);
let app = document.getElementById("container");
console.log(oldvnode);
// patch(app, oldvnode)
