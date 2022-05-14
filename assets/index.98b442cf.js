var oe=Object.defineProperty;var $=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var y=(e,t,a)=>t in e?oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))ae.call(t,a)&&y(e,a,t[a]);if($)for(var a of $(t))se.call(t,a)&&y(e,a,t[a]);return e};var l=(e,t,a)=>(y(e,typeof t!="symbol"?t+"":t,a),a);import{M as re,c as ne,a as j,E as T,b as ue,m as ie,d as x,o as le,e as ce,u as de,w as me,f as _e,r as S,g as L,h as I,i as P,j as ge,k as pe,z as be,l as fe,N as k,n as he,p as ve,q as we,s as Ee,t as F,v as ye,x as Te,y as Se,V as ke,A as Fe,B as V}from"./vendor.e077b336.js";const Be=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}};Be();const De=e=>e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()).replace("-","");class N{constructor(){l(this,"storage")}get(t){const a=this.storage.getItem(t);return a===null?null:JSON.parse(a)}set(t,a){this.storage.setItem(t,JSON.stringify(a))}remove(t){this.storage.removeItem(t)}clear(){this.storage.clear()}}class Me extends N{constructor(){super();this.storage=localStorage}}class Ce extends N{constructor(){super();this.storage=sessionStorage}}var B;(function(e){e[e.En=0]="En",e[e.Zh=1]="Zh"})(B||(B={}));var q=B;const Ae=e=>{switch(e){case 0:return"en";case 1:return"zh"}};class D{static get(){const t=v.get(this.key);return t===null?q.En:t}static set(t){v.set(this.key,t)}}l(D,"key","language");class h{static get(){const t=v.get(this.key);return t!=null?t:void 0}static set(t){v.set(this.key,t)}static remove(){v.remove(this.key)}}l(h,"key","Element-Admin-Token");const v=new Me;new Ce;var M;(function(e){e[e.Xs=0]="Xs",e[e.Sm=1]="Sm",e[e.Md=2]="Md",e[e.Lg=3]="Lg",e[e.Xl=4]="Xl",e[e.Xxl=5]="Xxl"})(M||(M={}));const Oe=576,Re=768,ze=992,$e=1200,je=1400,xe=e=>e<Oe?0:e<Re?1:e<ze?2:e<$e?3:e<je?4:5,Le=()=>({showSidebar:!0,size:M.Xs,language:D.get()}),Ie={showSidebar(e){return e.showSidebar},size(e){return e.size},language(e){return e.language},languageStr(e){return Ae(e.language)}},Pe={setSidebar(e,t){e.showSidebar=t},toggleSidebar(e){e.showSidebar=!e.showSidebar},setSize(e,t){e.size=t},setLanguage(e,t){e.language=t}};var Ve={namespaced:!0,state:Le,getters:Ie,mutations:Pe},Ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ve}),C;(function(e){e[e.E=0]="E",e[e.M=1]="M"})(C||(C={}));class c{constructor({type:t,name:a}){l(this,"type");l(this,"name");this.type=t,this.name=a}}l(c,"Type",C);class G{constructor({name:t,title:a,icon:r}){l(this,"_name");l(this,"_title");l(this,"_icon");l(this,"_parent");this._name=t,this._title=a,this._icon=r}get name(){return this._name}get title(){return this._title}get icon(){return this._icon}get parent(){return this._parent}set parent(t){this._parent=t}}const z=class extends G{constructor({name:t,title:a,icon:r,path:o,keepAlive:s=!1,permission:n,hide:d=!1}){super({name:t,title:a,icon:r});l(this,"path");l(this,"keepAlive");l(this,"permission");l(this,"hide");this.path=o,this.keepAlive=s,this.permission=n,this.hide=d,z.views.push(this)}};let f=z;l(f,"views",[]);const qe=()=>({currentRoute:void 0,visitedRoutes:[]}),Ge={currentRoute(e){return e.currentRoute},visitedRoutes(e){return e.visitedRoutes}},Ue={setCurrentRoute(e,{name:t,path:a}){const r=f.views.find(o=>o.name===t);r!==void 0&&(e.currentRoute={path:a,view:r})},addVisitedRoute(e,{name:t,path:a}){if(e.visitedRoutes.find(o=>o.path===a)===void 0){const o=f.views.find(s=>s.name===t);o!==void 0&&e.visitedRoutes.push({path:a,view:o})}},removeVisitenRoute(e,t){const a=e.visitedRoutes.findIndex(r=>r.path===t);a!==-1&&e.visitedRoutes.splice(a,1)},removeOhterRoutes(e,t){e.visitedRoutes=[t]},removeAllRoutes(e){e.visitedRoutes=[],e.currentRoute=void 0}};var We={namespaced:!0,state:qe,getters:Ge,mutations:Ue},Xe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:We});const He=e=>{e.onPost("/tokens").reply(t=>{const a=JSON.parse(t.data);return a.account==="admin"&&a.password==="123456"?[200,{token:"adminToken",info:{code:"admin",name:"Admin",department:"Admin",permissions:["admin"]}}]:[401,{message:t.headers.language==="en"?"Incorrect account or password":"\u5E10\u53F7\u6216\u5BC6\u7801\u9519\u8BEF"}]}),e.onGet("/users/").reply(200,{code:"admin",name:"Admin",department:"Admin",permissions:["admin"]})};class Ze{constructor(t){l(this,"mock");this.mock=new re(t)}use(){He(this.mock)}}var Je={title:"Not Fount",subtitle:"The requested URL was not found on this server."},Ye=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Je}),Ke={admin:"Admin",normal:"Normal"},Qe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ke}),et={placeholder:"Please input",read:"Read",write:"Write",success:"Success",error:"Error"},tt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:et}),ot={menuA:"Menu A",menuB:"Menu B",menuC:"Menu C",menuD:"Menu D"},at=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ot}),st={dialog:"Dialog",title:"Title",content:"Content"},rt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:st}),nt={drawer:"Drawer",title:"Title",content:"Content"},ut=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:nt}),it={name:"Name",gender:"Gender",birthday:"Birthday",vip:"VIP",hobbies:"Hobbies",remarks:"Remarks",football:"Football",basketball:"Basketball",swimming:"Swimming",videoGames:"Video Games"},lt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:it}),ct={option:"Option"},dt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ct}),mt={hiddenRoute:"Hidden route"},_t=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:mt}),gt={elementIcons:"Element icons",materialIcons:"Material icons"},pt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:gt}),bt={tableLoading:"Table Loading",fullscreenLoading:"Fullscreen Loading"},ft=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:bt}),ht={title:"Sign in to explore Element Admin",account:"Account",password:"Password",remember:"Remember Me",signIn:"Sign In",forgotPassword:"Forgot password?",rules:{accountRequiredMessage:"Please input your account.",accountLengthMessage:"Your account must be between 5 and 20 characters long.",passwordRequiredMessage:"Please input your password.",passwordLengthMessage:"Your password must be between 5 and 20 characters long."}},vt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ht}),wt={download:"Download markdown"},Et=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:wt}),yt={title:"Title",content:"Content",popup:"Popup",hover:"Hover to activate",click:"Click to activate",focus:"Focus to activate",manual:"Manual to activate",tooltip:"Tooltip"},Tt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:yt}),St={id:"ID",name:"Drawer",gender:"Gender",birthday:"Birthday",vip:"VIP",hobbies:"Hobbies",score:"Score",remarks:"Remarks",operations:"Operation"},kt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:St}),Ft={rules:{nameRequiredMessage:"Please input the name.",nameLengthMessage:"The name must be between 3 and 20 characters long."}},Bt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ft}),Dt={placeholder:"Please input.",download:"Download zip"},Mt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Dt}),Ct={signOut:"Sign out"},At=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ct}),Ot={refresh:"Refresh",close:"Close",closeOhters:"Close Others",closeAll:"Close All"},Rt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ot}),zt={dashboard:"Dashboard",systemSettings:{name:"System Settings",authSettings:"Auth Settings"},widgets:{name:"Widgets",icons:"Icons",contextMenu:"Context Menu",richText:"Rich Text",markdown:"Markdown",zip:"Zip",calendar:"Calendar",dialog:"Dialog",drawer:"Drawer",loading:"Loading",messages:"Messages",clipboard:"Clipboard",video:"Video"},table:{name:"Table",normalTable:"Normal Table",fixedTable:"Fixed Table",functionalTable:"Functional Table",custom:"Custom"},forms:{name:"Forms",normalForm:"Normal Form",validateForm:"Validate Form"},charts:{name:"Charts",lineChart:"Line Chart",barChart:"Bar Chart"},nestedRoutes:{name:"Nested Routes"},extensions:{name:"Extensions"}},$t={male:"Male",female:"Female",keywords:"Keywords",select:"Select",search:"Search",add:"Add",delete:"Delete",edit:"Edit",detail:"Deail",submit:"Submit",confirm:"Confirm",reset:"Reset",cancel:"Cancel",yes:"Yes",no:"No",loading:"Loading"},jt={serviceError:"Internal server error"};const xt={"./en/layout/navbar.ts":At,"./en/layout/tags.ts":Rt},Lt={"./en/pages/404.ts":Ye,"./en/pages/auth.ts":Qe,"./en/pages/clipboard.ts":tt,"./en/pages/contextMenu.ts":at,"./en/pages/dialog.ts":rt,"./en/pages/drawer.ts":ut,"./en/pages/form.ts":lt,"./en/pages/functionalTable.ts":dt,"./en/pages/hidden.ts":_t,"./en/pages/icons.ts":pt,"./en/pages/loading.ts":ft,"./en/pages/login.ts":vt,"./en/pages/markdown.ts":Et,"./en/pages/messages.ts":Tt,"./en/pages/table.ts":kt,"./en/pages/validateForm.ts":Bt,"./en/pages/zip.ts":Mt},U=p(p({},xt),Lt);let W={};Object.keys(U).forEach(e=>{const t=U[e].default,a=e.replace(/^\.\/(.*)\/(.*)\.\w+$/,"$2");W[a]=t});var It={message:p({routes:zt,common:$t,network:jt},W)},Pt={title:"\u672A\u53D1\u73B0",subtitle:"\u8BF7\u6C42\u7684\u5730\u5740\u4E0D\u5B58\u5728\u3002"},Vt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Pt}),Nt={admin:"\u7BA1\u7406\u5458",normal:"\u666E\u901A\u7528\u6237"},qt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Nt}),Gt={placeholder:"\u8BF7\u8F93\u5165",read:"\u8BFB\u53D6",write:"\u5199\u5165",success:"\u6210\u529F",error:"\u5931\u8D25"},Ut=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Gt}),Wt={menuA:"\u83DC\u5355 1",menuB:"\u83DC\u5355 2",menuC:"\u83DC\u5355 3",menuD:"\u83DC\u5355 4"},Xt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Wt}),Ht={dialog:"\u5BF9\u8BDD\u6846",title:"\u6807\u9898",content:"\u5185\u5BB9"},Zt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ht}),Jt={drawer:"\u62BD\u5C49",title:"\u6807\u9898",content:"\u5185\u5BB9"},Yt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Jt}),Kt={name:"\u59D3\u540D",gender:"\u6027\u522B",birthday:"\u51FA\u751F\u65E5\u671F",vip:"VIP",hobbies:"\u7231\u597D",remarks:"\u5907\u6CE8",football:"\u8DB3\u7403",basketball:"\u7BEE\u7403",swimming:"\u6E38\u6CF3",videoGames:"\u7535\u5B50\u6E38\u620F"},Qt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Kt}),eo={option:"\u9009\u9879"},to=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:eo}),oo={hiddenRoute:"\u9690\u85CF\u8DEF\u7531"},ao=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:oo}),so={elementIcons:"Element \u56FE\u6807",materialIcons:"Material \u56FE\u6807"},ro=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:so}),no={tableLoading:"\u8868\u683C\u52A0\u8F7D",fullscreenLoading:"\u5168\u5C4F\u52A0\u8F7D"},uo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:no}),io={title:"\u63A2\u7D22 Element Admin",account:"\u5E10\u53F7",password:"\u5BC6\u7801",remember:"\u8BB0\u4F4F\u6211",signIn:"\u767B\u5F55",forgotPassword:"\u5FD8\u8BB0\u5BC6\u7801\uFF1F",rules:{accountRequiredMessage:"\u8BF7\u8F93\u5165\u5E10\u53F7\u3002",accountLengthMessage:"\u5E10\u53F7\u7684\u5B57\u7B26\u6570\u5FC5\u987B\u4ECB\u4E8E 5 \u5230 20 \u4E4B\u95F4\u3002",passwordRequiredMessage:"\u8BF7\u8F93\u5165\u5BC6\u7801\u3002",passwordLengthMessage:"\u5BC6\u7801\u7684\u5B57\u7B26\u6570\u5FC5\u987B\u4ECB\u4E8E 5 \u5230 20 \u4E4B\u95F4\u3002"}},lo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:io}),co={download:"\u4E0B\u8F7D markdown"},mo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:co}),_o={title:"\u6807\u9898",content:"\u5185\u5BB9",popup:"\u5F39\u6846",hover:"\u60AC\u505C\u6FC0\u6D3B",click:"\u70B9\u51FB\u6FC0\u6D3B",focus:"\u805A\u7126\u6FC0\u6D3B",manual:"\u624B\u52A8\u6FC0\u6D3B",tooltip:"\u63D0\u793A"},go=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_o}),po={id:"\u8EAB\u4EFD\u6807\u8BC6",name:"\u59D3\u540D",gender:"\u6027\u522B",birthday:"\u51FA\u751F\u65E5\u671F",vip:"VIP",hobbies:"\u7231\u597D",score:"\u8BC4\u5206",remarks:"\u5907\u6CE8",operations:"\u64CD\u4F5C"},bo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:po}),fo={rules:{nameRequiredMessage:"\u8BF7\u8F93\u5165\u59D3\u540D\u3002",nameLengthMessage:"\u59D3\u540D\u7684\u5B57\u7B26\u6570\u5FC5\u987B\u4ECB\u4E8E 3 \u5230 20 \u4E4B\u95F4\u3002"}},ho=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:fo}),vo={placeholder:"\u8BF7\u8F93\u5165\u3002",download:"\u4E0B\u8F7D zip"},wo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:vo}),Eo={signOut:"\u767B\u51FA"},yo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Eo}),To={refresh:"\u5237\u65B0",close:"\u5173\u95ED",closeOhters:"\u5173\u95ED\u5176\u5B83",closeAll:"\u5173\u95ED\u6240\u6709"},So=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:To}),ko={dashboard:"\u63A7\u5236\u53F0",systemSettings:{name:"\u7CFB\u7EDF\u8BBE\u7F6E",authSettings:"\u6743\u9650\u8BBE\u7F6E"},widgets:{name:"\u7EC4\u4EF6",icons:"\u56FE\u6807",contextMenu:"\u4E0A\u4E0B\u6587\u83DC\u5355",richText:"\u5BCC\u6587\u672C\u7F16\u8F91\u5668",markdown:"Markdown",zip:"Zip",calendar:"\u65E5\u5386",dialog:"\u5BF9\u8BDD\u6846",drawer:"\u62BD\u5C49",loading:"\u52A0\u8F7D",messages:"\u6D88\u606F",clipboard:"\u7C98\u8D34\u677F",video:"\u89C6\u9891"},table:{name:"\u8868\u683C",normalTable:"\u666E\u901A\u8868\u683C",fixedTable:"\u56FA\u5B9A\u8868\u683C",functionalTable:"\u529F\u80FD\u6027\u8868\u683C",custom:"\u5BA2\u6237"},forms:{name:"\u8868\u5355",normalForm:"\u666E\u901A\u8868\u5355",validateForm:"\u8868\u5355\u9A8C\u8BC1"},charts:{name:"\u56FE\u8868",lineChart:"\u6298\u7EBF\u56FE",barChart:"\u67F1\u72B6\u56FE"},nestedRoutes:{name:"\u5D4C\u5957\u8DEF\u7531"},extensions:{name:"\u6269\u5C55"}},Fo={male:"\u7537\u6027",female:"\u5973\u6027",keywords:"\u5173\u952E\u5B57",select:"\u9009\u62E9",search:"\u641C\u7D22",add:"\u6DFB\u52A0",delete:"\u5220\u9664",edit:"\u7F16\u8F91",detail:"\u8BE6\u60C5",submit:"\u63D0\u4EA4",confirm:"\u786E\u8BA4",reset:"\u91CD\u7F6E",cancel:"\u53D6\u6D88",yes:"\u662F",no:"\u5426",loading:"\u52A0\u8F7D\u4E2D"},Bo={serviceError:"\u670D\u52A1\u5668\u9519\u8BEF"};const Do={"./zh/layout/navbar.ts":yo,"./zh/layout/tags.ts":So},Mo={"./zh/pages/404.ts":Vt,"./zh/pages/auth.ts":qt,"./zh/pages/clipboard.ts":Ut,"./zh/pages/contextMenu.ts":Xt,"./zh/pages/dialog.ts":Zt,"./zh/pages/drawer.ts":Yt,"./zh/pages/form.ts":Qt,"./zh/pages/functionalTable.ts":to,"./zh/pages/hidden.ts":ao,"./zh/pages/icons.ts":ro,"./zh/pages/loading.ts":uo,"./zh/pages/login.ts":lo,"./zh/pages/markdown.ts":mo,"./zh/pages/messages.ts":go,"./zh/pages/table.ts":bo,"./zh/pages/validateForm.ts":ho,"./zh/pages/zip.ts":wo},X=p(p({},Do),Mo);let H={};Object.keys(X).forEach(e=>{const t=X[e].default,a=e.replace(/^\.\/(.*)\/(.*)\.\w+$/,"$2");H[a]=t});var Co={message:p({routes:ko,common:Fo,network:Bo},H)};(navigator.language||"en").toLowerCase();const A=ne({fallbackLocale:"en",globalInjection:!0,legacy:!1,locale:["en","zh"][D.get()],messages:{en:It,zh:Co}});new Ze(j).use();const w=j.create({baseURL:"api",timeout:5e3});w.interceptors.request.use(e=>{const t=m.getters.token;return t!==void 0&&(e.headers.token=t),e.headers.language=m.getters["app/languageStr"],e},e=>{console.log("request error")});w.interceptors.response.use(e=>e.data,e=>{console.log("error",e),e.response.status===500?T.error(A.global.t("message.network.serviceError")):T.error(e.response.data.message)});const Ao=(e,t,a)=>w({url:"/tokens",method:"POST",data:{account:e,password:t,remember:a}}),Oo=()=>w({url:"/users/",method:"GET"}),Ro=()=>w({url:"tokens",method:"DELETE"}),zo=()=>({token:h.get(),user:{code:"",name:"",department:"",permissions:[]}}),$o={token(e){return e.token},user(e){return e.user}},jo={setToken(e,t){e.token=t},removeToken(e){e.token=void 0},setUser(e,t){e.user=t},removeUser(e){e.user={code:"",name:"",department:"",permissions:[]}}},xo={async login({commit:e,dispatch:t},{account:a,password:r,remember:o}){const s=await Ao(a,r,o);e("setToken",s.token),h.set(s.token);const n=s.info;e("setUser",{code:n.code,name:n.name,department:n.department,permissions:n.permissions})},async getInfo({commit:e},t){try{const a=await Oo();e("setUser",{code:a.code,name:a.name,department:a.department,permissions:a.permissions})}catch{}},async logout({commit:e}){try{await Ro()}catch{}e("removeToken"),h.remove(),e("removeUser")}};var Lo={namespaced:!0,state:zo,getters:$o,mutations:jo,actions:xo},Io=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Lo});const Z={"./modules/app.ts":Ne,"./modules/route.ts":Xe,"./modules/user.ts":Io};let J={};Object.keys(Z).forEach(e=>{const t=Z[e].default,a=e.replace(/^\.\/(.*)\/(.*)\.\w+$/,"$2");J[a]=t});var m=ue({modules:p({},J)});const Po=ie();const Vo=x({setup(e){const t=()=>{const o=m.getters["app/size"],s=xe(window.innerWidth);o!==s&&(m.commit("app/setSize",s),Po.emit("size",{oldSize:o,newSize:s}))};le(()=>{t(),window.addEventListener("resize",t)}),ce(()=>{window.removeEventListener("resize",t)});const a=de();me(a,(o,s)=>{m.commit("route/setCurrentRoute",{name:o.name,path:a.path}),m.commit("route/addVisitedRoute",{name:o.name,path:a.path})});const r=_e(()=>m.getters["app/language"]==q.Zh?be:fe);return(o,s)=>{const n=S("router-view"),d=S("el-config-provider");return L(),I(d,{locale:pe(r)},{default:P(()=>[ge(n)]),_:1},8,["locale"])}}}),No="modulepreload",Y={},qo="./",u=function(t,a){return!a||a.length===0?t():Promise.all(a.map(r=>{if(r=`${qo}${r}`,r in Y)return;Y[r]=!0;const o=r.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const n=document.createElement("link");if(n.rel=o?"stylesheet":No,o||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),o)return new Promise((d,b)=>{n.addEventListener("load",d),n.addEventListener("error",b)})})).then(()=>t())};class _ extends G{constructor({name:t,title:a,icon:r,children:o}){super({name:t,title:a,icon:r});l(this,"children");this.children=o;for(const s of o)s.parent=this}}class i extends f{constructor({name:t,title:a,icon:r,path:o,keepAlive:s=!1,permission:n,hide:d=!1,page:b}){super({name:t,title:a,icon:r,path:o,keepAlive:s,permission:n,hide:d});l(this,"page");this.page=b}}class K extends f{constructor({name:t,title:a,icon:r,path:o,keepAlive:s=!1,permission:n,hide:d=!1,page:b}){super({name:t,title:a,icon:r,path:o,keepAlive:s,permission:n,hide:d});l(this,"_page");this._page=b}get page(){return this._page}}const Go=[new _({name:"systemSettings",title:"message.routes.systemSettings.name",icon:new c({type:c.Type.M,name:"settings"}),children:[new i({name:"authSettings",title:"message.routes.systemSettings.authSettings",path:"authSettings",permission:"admin",page:()=>u(()=>import("./auth.e2002964.js"),["assets/auth.e2002964.js","assets/auth.9a97e0e5.css","assets/vendor.e077b336.js","assets/vendor.5da76619.css"])})]})],Uo=[new _({name:"widget",title:"message.routes.widgets.name",icon:new c({type:c.Type.M,name:"widgets"}),children:[new i({name:"icons",title:"message.routes.widgets.icons",path:"icons",page:()=>u(()=>import("./icons.608fc8ff.js"),["assets/icons.608fc8ff.js","assets/mIcon.a00411c0.js","assets/mIcon.aeb4163a.css","assets/vendor.e077b336.js","assets/vendor.5da76619.css","assets/eIcon.ade331b2.js","assets/eIcon.1f530ecc.css"])}),new i({name:"contextMenu",title:"message.routes.widgets.contextMenu",path:"contextMenu",page:()=>u(()=>import("./contextMenu.d7f67efe.js"),["assets/contextMenu.d7f67efe.js","assets/contextMenu.580ae83c.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.e077b336.js","assets/vendor.5da76619.css"])}),new i({name:"richText",title:"message.routes.widgets.richText",path:"richText",page:()=>u(()=>import("./richText.e731be76.js"),["assets/richText.e731be76.js","assets/richText.bd4e7698.css","assets/vendor.e077b336.js","assets/vendor.5da76619.css"])}),new i({name:"markdown",title:"message.routes.widgets.markdown",path:"markdown",page:()=>u(()=>import("./markdown.9fa7448b.js"),["assets/markdown.9fa7448b.js","assets/markdown.82813615.css","assets/FileSaver.min.64364e40.js","assets/vendor.e077b336.js","assets/vendor.5da76619.css"])}),new i({name:"zip",title:"message.routes.widgets.zip",path:"zip",page:()=>u(()=>import("./zip.5907643b.js"),["assets/zip.5907643b.js","assets/vendor.e077b336.js","assets/vendor.5da76619.css","assets/FileSaver.min.64364e40.js"])}),new i({name:"calendar",title:"message.routes.widgets.calendar",path:"calendar",page:()=>u(()=>import("./calendar.0ae585ce.js"),["assets/calendar.0ae585ce.js","assets/vendor.e077b336.js","assets/vendor.5da76619.css"])}),new i({name:"dialog",title:"message.routes.widgets.dialog",path:"dialog",page:()=>u(()=>import("./dialog.2f2e97d1.js"),["assets/dialog.2f2e97d1.js","assets/vendor.e077b336.js","assets/vendor.5da76619.css"])}),new i({name:"drawer",title:"message.routes.widgets.drawer",path:"drawer",page:()=>u(()=>import("./drawer.d5871163.js"),["assets/drawer.d5871163.js","assets/vendor.e077b336.js","assets/vendor.5da76619.css"])}),new i({name:"loading",title:"message.routes.widgets.loading",path:"loading",page:()=>u(()=>import("./loading.237ed210.js"),["assets/loading.237ed210.js","assets/vendor.e077b336.js","assets/vendor.5da76619.css"])}),new i({name:"messages",title:"message.routes.widgets.messages",path:"messages",page:()=>u(()=>import("./messages.e13b55f0.js"),["assets/messages.e13b55f0.js","assets/messages.be4098b7.css","assets/vendor.e077b336.js","assets/vendor.5da76619.css"])}),new i({name:"clipboard",title:"message.routes.widgets.clipboard",path:"clipboard",page:()=>u(()=>import("./clipboard.da719157.js"),["assets/clipboard.da719157.js","assets/clipboard.72188dc4.css","assets/vendor.e077b336.js","assets/vendor.5da76619.css"])}),new i({name:"video",title:"message.routes.widgets.video",path:"video",page:()=>u(()=>import("./video.2d77a751.js"),["assets/video.2d77a751.js","assets/video.860f2bf4.css","assets/vendor.e077b336.js","assets/vendor.5da76619.css"])})]})],Wo=[new _({name:"table",title:"message.routes.table.name",icon:new c({type:c.Type.M,name:"table_chart"}),children:[new i({name:"normalTable",title:"message.routes.table.normalTable",path:"normalTable",page:()=>u(()=>import("./normalTable.ccc82b92.js"),["assets/normalTable.ccc82b92.js","assets/custom.fad9c855.js","assets/vendor.e077b336.js","assets/vendor.5da76619.css"])}),new i({name:"fixedTable",title:"message.routes.table.fixedTable",path:"fixedTable",page:()=>u(()=>import("./fixedTable.caf311ea.js"),["assets/fixedTable.caf311ea.js","assets/custom.fad9c855.js","assets/vendor.e077b336.js","assets/vendor.5da76619.css"])}),new i({name:"functionalTable",title:"message.routes.table.functionalTable",path:"functionalTable",page:()=>u(()=>import("./functionalTable.e436e65f.js"),["assets/functionalTable.e436e65f.js","assets/vendor.e077b336.js","assets/vendor.5da76619.css","assets/mIcon.a00411c0.js","assets/mIcon.aeb4163a.css","assets/custom.fad9c855.js"])}),new i({name:"custom",title:"message.routes.table.custom",path:"customs/:id",hide:!0,page:()=>u(()=>import("./custom.c9dfdfee.js"),["assets/custom.c9dfdfee.js","assets/vendor.e077b336.js","assets/vendor.5da76619.css"])})]})],Xo=[new _({name:"forms",title:"message.routes.forms.name",icon:new c({type:c.Type.M,name:"edit_note"}),children:[new i({name:"normal_form",title:"message.routes.forms.normalForm",path:"normalForm",page:()=>u(()=>import("./normalForm.e7c96387.js"),["assets/normalForm.e7c96387.js","assets/vendor.e077b336.js","assets/vendor.5da76619.css"])}),new i({name:"validateForm",title:"message.routes.forms.validateForm",path:"validateForm",page:()=>u(()=>import("./validateForm.a1759443.js"),["assets/validateForm.a1759443.js","assets/vendor.e077b336.js","assets/vendor.5da76619.css"])})]})],Ho=[new _({name:"charts",title:"message.routes.charts.name",icon:new c({type:c.Type.M,name:"edit_note"}),children:[new i({name:"lineChart",title:"message.routes.charts.lineChart",path:"lineChart",page:()=>u(()=>import("./lineChart.b13914de.js"),["assets/lineChart.b13914de.js","assets/lineChart.a7a1c0ef.css","assets/index.3cbc7f51.js","assets/vendor.e077b336.js","assets/vendor.5da76619.css"])}),new i({name:"barChart",title:"message.routes.charts.barChart",path:"barChart",page:()=>u(()=>import("./barChart.33b40620.js"),["assets/barChart.33b40620.js","assets/barChart.1e760d53.css","assets/index.3cbc7f51.js","assets/vendor.e077b336.js","assets/vendor.5da76619.css"])})]})],Zo=[new _({name:"nestedRoutes",title:"message.routes.nestedRoutes.name",icon:new c({type:c.Type.M,name:"account_tree"}),children:[new _({name:"nestedRoutesA",title:"A",children:[new i({name:"nestedRoutesAA",title:"AA",path:"nestedRoutesAA",page:()=>u(()=>import("./hidden.ab666f6e.js"),["assets/hidden.ab666f6e.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.e077b336.js","assets/vendor.5da76619.css"])})]}),new i({name:"nestedRoutesB",title:"B",path:"nestedRoutesB",hide:!0,page:()=>u(()=>import("./hidden.ab666f6e.js"),["assets/hidden.ab666f6e.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.e077b336.js","assets/vendor.5da76619.css"])})]})],Jo="https://taipaxu.github.io/element-admin/extensions/",Yo=[new _({name:"extensions",title:"message.routes.extensions.name",icon:new c({type:c.Type.E,name:"position"}),children:[new K({name:"test",title:"Test",path:"test",page:`${Jo}iframe-bridge`})]})],Q=[],ee=[],E=e=>{e.before!==void 0&&Q.push(e.before),e.after!==void 0&&ee.push(e.after)},Ko=e=>{e.beforeEach(async(t,a,r)=>{for(const o of Q)await o(t,a,r)}),e.afterEach((t,a)=>{for(const r of ee)r(t,a)})},Qo=()=>{k.configure({showSpinner:!1});let e=0;const t=4;E({async before(a,r,o){k.start()}}),E({async before(a,r,o){if(a.name==="login"){o();return}if(h.get()!==void 0){if(e++%t==0)try{await m.dispatch("user/getInfo")}catch{}const n=m.getters["user/user"].permissions,d=a.meta.permission;d===void 0||n.includes(d)||n.includes("admin")?o():o("/404")}else m.commit("user/removeUser"),o("/login")}}),E({async before(a,r,o){const s=a.meta.title;s!==void 0?s.startsWith("message.")?document.title=A.global.t(s):document.title=s:document.title="ADMIN"}}),E({after(){k.done()}})},ea=e=>{Qo(),Ko(e)},ta=[{name:"login",path:"/login",component:()=>u(()=>import("./login.1ac9cd69.js"),["assets/login.1ac9cd69.js","assets/login.f4ee167f.css","assets/vendor.e077b336.js","assets/vendor.5da76619.css","assets/eIcon.ade331b2.js","assets/eIcon.1f530ecc.css"])},{name:"404",path:"/404",component:()=>u(()=>import("./404.74cdd465.js"),["assets/404.74cdd465.js","assets/404.05d581d2.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.e077b336.js","assets/vendor.5da76619.css"])},{path:"/:pathMatch(.*)",redirect:"/404"}],O=he({history:ve(),routes:ta}),oa=[new i({name:"dashboard",title:"message.routes.dashboard",icon:new c({type:c.Type.M,name:"desktop_windows"}),path:"dashboard",page:()=>u(()=>import("./dashboard.7cccd4f4.js"),["assets/dashboard.7cccd4f4.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.e077b336.js","assets/vendor.5da76619.css"])}),...Go,...Uo,...Wo,...Xo,...Ho,...Zo,...Yo],R=[],te=e=>{for(const t of e)t instanceof _?te(t.children):t instanceof i?R.push({name:t.name,path:t.parent===void 0?t.path:`${t.parent.name}/${t.path}`,component:t.page,meta:{title:t.title,keepAlive:t.keepAlive,hidden:t.hide,permission:t.permission}}):t instanceof K&&R.push({name:t.name,path:`${t.path}/:url`,component:()=>u(()=>import("./iframe.034f84af.js"),["assets/iframe.034f84af.js","assets/iframe.4fa3fb70.css","assets/vendor.e077b336.js","assets/vendor.5da76619.css"]),meta:{title:t.title,keepAlive:t.keepAlive,hidden:t.hide,permission:t.permission}})};te(oa);O.addRoute({path:"",component:()=>u(()=>import("./index.c7680f41.js"),["assets/index.c7680f41.js","assets/index.3266e91f.css","assets/vendor.e077b336.js","assets/vendor.5da76619.css","assets/mIcon.a00411c0.js","assets/mIcon.aeb4163a.css","assets/eIcon.ade331b2.js","assets/eIcon.1f530ecc.css"]),redirect:"dashboard",children:[...R]});ea(O);const aa=[new URL("https://taipaxu.github.io/element-admin/extensions/").origin],sa=()=>{let e;window.addEventListener("message",t=>{if(!aa.includes(t.origin))return;const a=t.data,r=a.type,o=a.data;switch(r){case"message":{T({message:o.message,type:o.type,showClose:o.showClose});break}case"alert":{F.alert(o.message,o.title,{confirmButtonText:o.confirmButtonText,callback:s=>{document.querySelector("iframe").contentWindow.postMessage({type:"callback",name:o.callback,params:s},t.origin)}});break}case"confirm":{F.confirm(o.message,o.title,{confirmButtonText:o.confirmButtonText,cancelButtonText:o.cancelButtonText,type:o.type}).then(()=>{document.querySelector("iframe").contentWindow.postMessage({type:"callback",name:o.confirmCallback},t.origin)}).catch(()=>{document.querySelector("iframe").contentWindow.postMessage({type:"callback",name:o.cancelCallback},t.origin)});break}case"prompt":{F.prompt(o.message,o.title,{confirmButtonText:o.confirmButtonText,cancelButtonText:o.cancelButtonText,type:o.type}).then(s=>{document.querySelector("iframe").contentWindow.postMessage({type:"callback",name:o.confirmCallback,params:s.value},t.origin)}).catch(()=>{document.querySelector("iframe").contentWindow.postMessage({type:"callback",name:o.cancelCallback},t.origin)});break}case"notification":{Ee({title:o.title,message:o.message,type:o.type});break}case"startLoading":{e===void 0&&(e=we.service({lock:o.lock,text:o.text,background:o.background}));break}case"stopLoading":{e!==void 0&&e.close();break}}},!1)},ra=()=>{sa()};const na=x({props:{name:{type:String,required:!0},link:{type:String,required:!0}},setup(e){return(t,a)=>{const r=S("el-link");return L(),I(r,{type:"primary",href:e.link,target:"_blank",class:"related-link"},{default:P(()=>[ye(Te(e.name),1)]),_:1},8,["href"])}}}),g=Se(Vo);g.use(O);g.use(m);g.use(ke);g.use(A);g.use(Fe);for(let e in V)g.component(De(e),V[e]);g.component("RelatedLink",na);g.config.globalProperties.$domain="https://github.com/TaipaXu/element-admin";g.mount("#app");ra();export{f as E,_ as G,i as I,q as M,D as S,c as V,K as a,M as b,De as c,Po as e,A as i,oa as r,m as s};