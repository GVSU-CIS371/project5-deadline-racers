import{d as g,u as w,r as h,w as x,o as C,c as u,a as t,b as e,e as c,f as a,g as y,h as k,F as B,i as r,t as l}from"./index-2d8e0ceb.js";const V=g({__name:"Clothing",setup(S){const n=w(),s=h(n.products);return x(()=>n.products,_=>{s.value=_}),C(async()=>{await n.init(),await n.filterByCategory("Clothing")}),(_,F)=>{const i=e("v-card-title"),d=e("v-card-text"),p=e("v-card"),m=e("v-col"),v=e("v-row"),f=e("v-container");return c(),u(f,null,{default:t(()=>[a(v,null,{default:t(()=>[(c(!0),y(B,null,k(s.value,o=>(c(),u(m,{cols:"12",sm:"6",md:"4",lg:"3",key:o.id},{default:t(()=>[a(p,null,{default:t(()=>[a(i,null,{default:t(()=>[r(l(o.data.name),1)]),_:2},1024),a(d,null,{default:t(()=>[r(l(o.data.description),1)]),_:2},1024),a(d,null,{default:t(()=>[r(l(o.data.price),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}}});export{V as default};