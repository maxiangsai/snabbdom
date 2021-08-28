import { init, propsModule, h } from "../../build/index.js";

const patch = init([propsModule]);

let vnode = h(
  "",
  {
    hook: {
      init(vnode) {
        console.log(vnode);
      },
    },
  },
  ["div", "p"]
);
console.log(vnode);
let app = document.getElementById("container");
patch(app, vnode);
