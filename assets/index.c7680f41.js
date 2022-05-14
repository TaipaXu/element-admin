import{d as y,F as O,r as m,k as _,g as a,h as p,i as o,H as v,R as C,x as g,G as w,S as A,T as S,u as D,j as n,U as I,v as $,f as X,D as J,C as j,W as Q,K as ee,m as te,X as se,I as U,Y as G,o as ne,e as ae,w as oe,Z as le,O as K}from"./vendor.e077b336.js";import{_ as z}from"./mIcon.a00411c0.js";import{_ as Z}from"./eIcon.ade331b2.js";import{G as re,V as F,E as ce,I as ue,a as ie,s as d,r as _e,M as T,S as de,e as Y,b as E}from"./index.98b442cf.js";const me={class:"sidebar-item__icon"},pe={class:"sidebar-item__name"},ve={class:"sidebar-item__icon"},fe={class:"sidebar-item__name"},he=y({props:{value:{type:Object,required:!0}},setup(e){const t=e,s=O(),r=()=>{t.value instanceof ue?s.push({name:t.value.name}):t.value instanceof ie&&s.push({name:t.value.name,params:{url:t.value.page}})},c=l=>d.getters["user/user"].permissions.includes("admin")||l.permission===void 0?!0:!!d.getters["user/user"].permissions.includes(l.permission);return(l,u)=>{const f=m("sidebar-item",!0),h=m("el-sub-menu"),V=m("el-menu-item");return e.value instanceof _(re)?(a(),p(h,{key:0,class:"sidebar-item",index:e.value.name},{title:o(()=>{var k,i;return[v("div",me,[((k=e.value.icon)==null?void 0:k.type)===_(F).Type.E?(a(),p(Z,{key:0,name:e.value.icon.name,size:20},null,8,["name"])):C("",!0),((i=e.value.icon)==null?void 0:i.type)===_(F).Type.M?(a(),p(z,{key:1,name:e.value.icon.name,size:20},null,8,["name"])):C("",!0)]),v("span",pe,g(e.value.title.startsWith("message.")?l.$t(e.value.title):e.value.title),1)]}),default:o(()=>[(a(!0),w(S,null,A(e.value.children,k=>(a(),p(f,{key:k.name,value:k},null,8,["value"]))),128))]),_:1},8,["index"])):e.value instanceof _(ce)&&!e.value.hide&&c(e.value)?(a(),p(V,{key:1,index:e.value.name,class:"sidebar-item",onClick:r},{title:o(()=>[v("span",fe,g(e.value.title.startsWith("message.")?l.$t(e.value.title):e.value.title),1)]),default:o(()=>{var k,i;return[v("div",ve,[((k=e.value.icon)==null?void 0:k.type)===_(F).Type.E?(a(),p(Z,{key:0,name:e.value.icon.name,size:20},null,8,["name"])):C("",!0),((i=e.value.icon)==null?void 0:i.type)===_(F).Type.M?(a(),p(z,{key:1,name:e.value.icon.name,size:20},null,8,["name"])):C("",!0)])]}),_:1},8,["index"])):C("",!0)}}});const ge={class:"sidebar__header"},be={class:"sidebar__title"},ye=["href"],$e=$("Element"),we=v("b",null," Admin",-1),ke=[$e,we],H=y({props:{collapse:{type:Boolean,required:!0}},setup(e){const t=e,s=D();return(r,c)=>{const l=m("el-menu"),u=m("el-scrollbar");return a(),w("aside",{class:I(["sidebar",{"sidebar--collapse":t.collapse}])},[v("header",ge,[v("h1",be,[v("a",{href:r.$domain,target:"_blank"},ke,8,ye)])]),n(u,null,{default:o(()=>[n(l,{"default-active":_(s).name,"active-text-color":"#ffd04b","background-color":"#343a40","text-color":"#eee",collapse:t.collapse,"collapse-transition":!1,class:"sidebar__menu"},{default:o(()=>[(a(!0),w(S,null,A(_(_e),f=>(a(),p(he,{key:f.name,value:f},null,8,["value"]))),128))]),_:1},8,["default-active","collapse"])]),_:1})],2)}}});const xe=y({props:{value:{type:Boolean}},emits:["input"],setup(e,{emit:t}){const s=()=>{t("input",!1)};return(r,c)=>{const l=m("el-drawer");return a(),p(l,{"model-value":e.value,direction:"ltr","with-header":!1,size:200,"custom-class":"drawer",onClose:s},{default:o(()=>[n(H,{collapse:!1,class:"drawer-sidebar"})]),_:1},8,["model-value"])}}});const Ce=y({setup(e){let t=X(()=>{var c;const s=(c=d.getters["route/currentRoute"])==null?void 0:c.view,r=[];if(s!==void 0){const l=u=>{r.unshift(u),u.parent!==void 0&&l(u.parent)};l(s)}return r});return(s,r)=>{const c=m("el-breadcrumb-item"),l=m("el-breadcrumb");return a(),p(l,{separator:"/",class:"breadcrumb"},{default:o(()=>[(a(!0),w(S,null,A(_(t),u=>(a(),p(c,{key:u.name},{default:o(()=>[$(g(u.title.startsWith("message.")?s.$t(u.title):u.title),1)]),_:2},1024))),128))]),_:1})}}});const ze={class:"navbar-alert"},Re={class:"navbar-alert__header"},Ve={class:"navbar-alert__datetime"},Me={class:"navbar-alert__content"},Ee=y({props:{value:{type:Object,required:!0}},setup(e){const s={news:"newspaper",notice:"notifications"}[e.value.type];return(r,c)=>(a(),w("article",ze,[v("header",Re,[n(z,{name:_(s),size:15,class:"navbar-alert__icon"},null,8,["name"]),v("span",Ve,g(e.value.datetime),1)]),v("main",Me,g(e.value.content),1)]))}});const Ae=y({props:{class:{type:String}},setup(e){const t=e,s=J([{type:"news",datetime:"2022-01-01",content:"news"},{type:"notice",datetime:"2022-01-01",content:"notice"},{type:"news",datetime:"2022-01-01",content:"news"},{type:"news",datetime:"2022-01-01",content:"news"},{type:"news",datetime:"2022-01-01",content:"news"}]);return(r,c)=>{const l=m("el-scrollbar"),u=m("el-popover");return a(),p(u,{placement:"bottom",width:200,trigger:"hover","popper-class":"navbar-alerts__popper"},{reference:o(()=>[n(z,{name:"notifications_active",size:20,cursor:"",class:I(["navbar-alerts__icon",t.class])},null,8,["class"])]),default:o(()=>[n(l,{class:"navbar-alerts"},{default:o(()=>[(a(!0),w(S,null,A(_(s),(f,h)=>(a(),p(Ee,{key:h,value:f},null,8,["value"]))),128))]),_:1})]),_:1})}}}),Se=y({setup(e){const t=j(!1),s=()=>{document.body.requestFullscreen()},r=()=>{document.exitFullscreen()},c=()=>{t.value?r():s(),t.value=!t.value};return(l,u)=>(a(),p(z,{name:t.value?"fullscreen_exit":"fullscreen",size:20,cursor:"",onClick:c},null,8,["name"]))}}),Te=$("English"),Be=$("\u4E2D\u6587"),Ie=y({setup(e){const{proxy:t}=ee(),s=Q(),r=c=>{t.$i18n.locale=c===T.En?"en":"zh",s.commit("app/setLanguage",c),de.set(c)};return(c,l)=>{const u=m("el-dropdown-item"),f=m("el-dropdown-menu"),h=m("el-dropdown");return a(),p(h,null,{dropdown:o(()=>[n(f,null,{default:o(()=>[n(u,{disabled:_(s).getters["app/language"]===_(T).En,onClick:l[0]||(l[0]=V=>r(_(T).En))},{default:o(()=>[Te]),_:1},8,["disabled"]),n(u,{disabled:_(s).getters["app/language"]===_(T).Zh,onClick:l[1]||(l[1]=V=>r(_(T).Zh))},{default:o(()=>[Be]),_:1},8,["disabled"])]),_:1})]),default:o(()=>[n(z,{name:"language",size:20,cursor:""})]),_:1})}}});const je=["href"],Fe=y({setup(e){const t=O(),s=async()=>{try{await d.dispatch("user/logout")}catch{}t.push({name:"login",replace:!0}),d.commit("route/removeAllRoutes")};return(r,c)=>{const l=m("el-dropdown-item"),u=m("el-dropdown-menu"),f=m("el-dropdown");return a(),p(f,{"popper-class":"navbar-user__popper"},{dropdown:o(()=>[n(u,null,{default:o(()=>[n(l,null,{default:o(()=>[v("a",{href:r.$domain,target:"_blank"}," Element Admin ",8,je)]),_:1}),n(l,{onClick:s},{default:o(()=>[$(g(r.$t("message.navbar.signOut")),1)]),_:1})]),_:1})]),default:o(()=>[n(z,{name:"face",size:20,cursor:""})]),_:1})}}});const Oe={class:"navbar"},De=v("div",{style:{flex:"1"}},null,-1),qe={class:"navbar__menus"},Le=y({emits:["menu"],setup(e,{emit:t}){return(s,r)=>(a(),w("nav",Oe,[n(z,{name:"menu",size:28,cursor:"",onClick:r[0]||(r[0]=c=>t("menu"))}),n(Ce,{class:"navbar__breadcrumb"}),De,v("div",qe,[n(Ae,{class:"navbar__menu"}),n(Se,{class:"navbar__menu"}),n(Ie,{class:"navbar__menu"}),n(Fe,{class:"navbar__menu"})])]))}}),q=te();const We=["onClick"],Ne=y({setup(e){const t=O(),s=D(),r=i=>{t.push(i)},c=i=>{d.commit("route/removeVisitenRoute",i);const b=d.getters["route/visitedRoutes"];if(b.length===0)s.name==="dashboard"?d.commit("route/addVisitedRoute",{name:"dashboard",path:"/dashboard"}):t.push({name:"dashboard"});else if(b.length===1)t.push(b[b.length-1].path);else{const x=d.getters["route/currentRoute"];x!==void 0&&x.path===i&&t.push(b[b.length-1].path)}},l=()=>{q.emit("refresh")},u=()=>{const i=d.getters["route/currentRoute"];i!==void 0&&c(i.path)},f=()=>{const i=d.getters["route/currentRoute"];i!==void 0&&d.commit("route/removeOhterRoutes",i)},h=()=>{d.commit("route/removeAllRoutes"),t.push({name:"dashboard"})},V=j(),k=i=>{const b=20,x=V.value,B=x.scrollLeft;i.deltaY<=0?x.scrollTo(B-b,0):x.scrollTo(B+b,0)};return(i,b)=>{const x=m("close"),B=m("el-icon"),M=m("v-contextmenu-item"),L=m("v-contextmenu"),W=se("contextmenu");return U((a(),w("div",{ref_key:"$tags",ref:V,class:"tags",onMousewheel:k},[(a(!0),w(S,null,A(_(d).getters["route/visitedRoutes"],R=>{var N;return U((a(),w("div",{key:R.view.name,class:I(["tag",{"tag--active":((N=_(d).getters["route/currentRoute"])==null?void 0:N.path)===R.path}]),onClick:P=>r(R.path),onContextmenu:b[0]||(b[0]=G(()=>{},["stop","prevent"]))},[$(g(R.view.title.startsWith("message.")?i.$t(R.view.title):R.view.title)+" ",1),n(B,{size:12,class:"tag__close",onClick:G(P=>c(R.path),["stop"])},{default:o(()=>[n(x)]),_:2},1032,["onClick"])],42,We)),[[W,void 0,"tagcontextmenu"]])}),128)),n(L,{ref:"tagcontextmenu"},{default:o(()=>[n(M,{onClick:l},{default:o(()=>[$(g(i.$t("message.tags.refresh")),1)]),_:1}),n(M,{onClick:u},{default:o(()=>[$(g(i.$t("message.tags.close")),1)]),_:1}),n(M,{onClick:f},{default:o(()=>[$(g(i.$t("message.tags.closeOhters")),1)]),_:1}),n(M,{onClick:h},{default:o(()=>[$(g(i.$t("message.tags.closeAll")),1)]),_:1})]),_:1},512),n(L,{ref:"tagscontextmenu"},{default:o(()=>[n(M,{onClick:l},{default:o(()=>[$(g(i.$t("message.tags.refresh")),1)]),_:1}),n(M,{onClick:h},{default:o(()=>[$(g(i.$t("message.tags.closeAll")),1)]),_:1})]),_:1},512)],32)),[[W,void 0,"tagscontextmenu"]])}}});const Ue={class:"layout"},Ge={class:"layout-main"},Pe=y({setup(e){const t=j(0);ne(()=>{Y.on("size",({oldSize:l,newSize:u})=>{l===E.Sm&&u===E.Md&&setTimeout(()=>{d.commit("app/setSidebar",!0)})}),q.on("refresh",()=>{t.value++})}),ae(()=>{Y.off("size"),q.off("refresh")});const s=j(!1),r=()=>{d.getters["app/size"]>E.Md?d.commit("app/toggleSidebar"):s.value=!s.value},c=D();return oe(c,()=>{d.getters["app/size"]<=E.Md&&s.value&&(s.value=!1)}),(l,u)=>{const f=m("router-view");return a(),w("div",Ue,[n(H,{collapse:!_(d).getters["app/showSidebar"],class:I(["layout-sidebar",{"layout-sidebar--hide":_(d).getters["app/size"]<=_(E).Md}])},null,8,["collapse","class"]),_(d).getters["app/size"]<=_(E).Md?(a(),p(xe,{key:0,modelValue:s.value,"onUpdate:modelValue":u[0]||(u[0]=h=>s.value=h)},null,8,["modelValue"])):C("",!0),v("div",Ge,[n(Le,{onMenu:r}),n(Ne),(a(),p(f,{key:t.value,class:"layout-page"},{default:o(({Component:h})=>[(a(),p(le,null,[_(c).meta.keepAlive===!0?(a(),p(K(h),{key:0})):C("",!0)],1024)),_(c).meta.keepAlive!==!0?(a(),p(K(h),{key:0})):C("",!0)]),_:1}))])])}}});export{Pe as default};