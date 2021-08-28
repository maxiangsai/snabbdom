import { init, propsModule, h } from "../../build/index.js";

const patch = init([propsModule]);

let vnode = h("div#app", {}, "hello");
let app = document.getElementById("container");
let oldvnode = patch(app, vnode);

vnode = h("div#app.cls", {});
patch(oldvnode, vnode);
