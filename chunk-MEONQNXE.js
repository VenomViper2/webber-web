import{a as h}from"./chunk-4YRVE3I3.js";import{a as A,e as C}from"./chunk-75MV5YTL.js";import{Aa as l,Ca as g,Ea as f,Ia as o,Ja as a,Ka as u,Na as v,Ra as r,Sa as m,U as s,Ua as x,pa as d,sa as p,ta as c}from"./chunk-IPEUQMUZ.js";function P(t,i){if(t&1&&(o(0,"div",0)(1,"h1"),r(2),a(),u(3,"img",1),o(4,"p",2),r(5),a()()),t&2){let e=v();p(2),m(e.app.name),p(),g("src",e.app.images[0],d)("alt",e.app.name),p(2),m(e.app.fullDescription)}}function S(t,i){t&1&&(o(0,"div"),r(1,"App not found"),a())}var _=class t{constructor(i,e){this.route=i;this.appService=e}app;ngOnInit(){this.route.params.subscribe(i=>{let e=i.id;this.appService.getApp(e).subscribe({next:n=>{n&&(this.app=n)},error:n=>{console.error("Error loading app:",n)}})})}static \u0275fac=function(e){return new(e||t)(c(C),c(h))};static \u0275cmp=s({type:t,selectors:[["app-page"]],standalone:!0,features:[x],decls:2,vars:1,consts:[[1,"app-container"],[3,"src","alt"],[1,"description"]],template:function(e,n){e&1&&l(0,P,6,4,"div",0)(1,S,2,0,"div"),e&2&&f(n.app?0:1)},dependencies:[A],styles:[".app-container[_ngcontent-%COMP%]{padding:2rem;max-width:1200px;margin:0 auto}img[_ngcontent-%COMP%]{max-width:100%;height:auto;border-radius:8px;margin:1rem 0}.description[_ngcontent-%COMP%]{line-height:1.6;color:#333}"]})};export{_ as AppPageComponent};