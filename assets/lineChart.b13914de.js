import{i as n}from"./index.3cbc7f51.js";import{d as s,P as i,e as o,g as a,G as r,H as c}from"./vendor.e077b336.js";const d={class:"line-chart-page"},l=c("div",{class:"line-chart-canvas"},null,-1),_=[l],h=s({setup(p){let e;const t=()=>{e==null||e.resize()};return i(()=>{e=n(document.querySelector(".line-chart-canvas")),e.setOption({title:{text:"Line"},tooltip:{trigger:"axis"},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[150,230,224,218,135,147,260],type:"line"}]}),window.addEventListener("resize",t)}),o(()=>{window.removeEventListener("resize",t)}),(u,v)=>(a(),r("div",d,_))}});export{h as default};