import{d as w,u as x,r as g,w as y,o as h,c as u,a as t,b as e,e as c,f as a,g as k,h as B,F as C,i as r,t as s}from"./index-2d8e0ceb.js";const N=w({__name:"Groceries",setup(S){const o=x(),l=g(o.products);return y(()=>o.products,_=>{l.value=_}),h(async()=>{await o.init(),await o.filterByCategory("Groceries")}),(_,F)=>{const i=e("v-card-title"),d=e("v-card-text"),p=e("v-card"),m=e("v-col"),v=e("v-row"),f=e("v-container");return c(),u(f,null,{default:t(()=>[a(v,null,{default:t(()=>[(c(!0),k(C,null,B(l.value,n=>(c(),u(m,{cols:"12",sm:"6",md:"4",lg:"3",key:n.id},{default:t(()=>[a(p,null,{default:t(()=>[a(i,null,{default:t(()=>[r(s(n.data.name),1)]),_:2},1024),a(d,null,{default:t(()=>[r(s(n.data.description),1)]),_:2},1024),a(d,null,{default:t(()=>[r(s(n.data.price),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}}});export{N as default};