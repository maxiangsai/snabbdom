import { vnode, VNode, VNodeData } from "./vnode";
import * as is from "./is";

export type VNodes = VNode[];
export type VNodeChildElement = VNode | string | number | undefined | null;
export type ArrayOrElement<T> = T | T[];
export type VNodeChildren = ArrayOrElement<VNodeChildElement>;

function addNS(
  data: any,
  children: VNodes | undefined,
  sel: string | undefined
): void {
  data.ns = "http://www.w3.org/2000/svg";
  if (sel !== "foreignObject" && children !== undefined) {
    for (let i = 0; i < children.length; ++i) {
      const childData = children[i].data;
      if (childData !== undefined) {
        addNS(childData, children[i].children as VNodes, children[i].sel);
      }
    }
  }
}

/** 利用函数重载实现参数的灵活配置
 * 1. 接收一个参数sel
 * 2. 接收两个参数，sel和data或者sel和children
 * 3. 接收三个参数，sel、data、children
 * 具体应用如下：
 * a. h('div#container.wrapper') --> 创建一个选择器为div、id为container、class为wrapper的vnode节点
 * b. h('a.link', { props: { href: 'baidu.com' } }) --> 创建一个选择器为a、class为link、href属性为baidu.com的vnode节点
 * ...
 */
export function h(sel: string): VNode;
export function h(sel: string, data: VNodeData | null): VNode;
export function h(sel: string, children: VNodeChildren): VNode;
export function h(
  sel: string,
  data: VNodeData | null,
  children: VNodeChildren
): VNode;
export function h(sel: any, b?: any, c?: any): VNode {
  let data: VNodeData = {};
  let children: any;
  let text: any;
  let i: number;
  if (c !== undefined) {
    // 处理传3个参数的情形，分为：
    if (b !== null) {
      data = b;
    }
    if (is.array(c)) {
      // h('ul', {}, [h('li')]) 有多个子节点的情况
      children = c;
    } else if (is.primitive(c)) {
      // h('div', {}, '文本') 无子节点
      text = c.toString();
    } else if (c && c.sel) {
      // h('ul', {}, h('li')) 只有一个子节点的情况
      children = [c];
    }
  } else if (b !== undefined && b !== null) {
    // 处理两个参数的情况
    if (is.array(b)) {
      // h('ul', {}, [h('li')]) 有多个子节点的情况
      children = b;
    } else if (is.primitive(b)) {
      // h('div', {}, '文本') 无子节点
      text = b.toString();
    } else if (b && b.sel) {
      // h('ul', {}, h('li')) 只有一个子节点的情况
      children = [b];
    } else {
      // 如果都不是以上情形，则认为b就是data
      data = b;
    }
  }
  if (children !== undefined) {
    // 处理children传入的是文本的情况，都转成文本子节点
    // h("div", ['div', 'p'])
    // h("div", {}, ['div', 'p'])
    for (i = 0; i < children.length; ++i) {
      if (is.primitive(children[i]))
        children[i] = vnode(
          undefined,
          undefined,
          undefined,
          children[i],
          undefined
        );
    }
  }
  if (
    sel[0] === "s" &&
    sel[1] === "v" &&
    sel[2] === "g" &&
    (sel.length === 3 || sel[3] === "." || sel[3] === "#")
  ) {
    addNS(data, children, sel);
  }
  // 最终返回vnode，此时还并未patch，所以elm都为undefined
  return vnode(sel, data, children, text, undefined);
}
