import{d,$ as u,y as h,b as s,e as t,x as a,A as i,F as f,Z as g,o as n,a0 as v,l as x,g as b}from"../modules/vue-9BZyvrAS.js";import{u as k,g as y,c as m,_ as N}from"../index-BG4fwuyN.js";import{N as w}from"./NoteDisplay-CmugNILD.js";import"../modules/shiki-CRGP_BDn.js";const L={id:"page-root"},T={class:"m-4"},V={class:"mb-10"},B={class:"text-4xl font-bold mt-2"},D={class:"opacity-50"},H={class:"text-lg"},S={class:"font-bold flex gap-2"},A={class:"opacity-50"},C=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-main mb-8"},M=d({__name:"print",setup($){const{slides:p,total:_}=k();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),y({title:`Notes - ${m.title}`});const r=h(()=>p.value.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(n(),s("div",L,[t("div",T,[t("div",V,[t("h1",B,a(i(m).title),1),t("div",D,a(new Date().toLocaleString()),1)]),(n(!0),s(f,null,g(r.value,(e,c)=>(n(),s("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",H,[t("div",S,[t("div",A,a(e==null?void 0:e.no)+"/"+a(i(_)),1),v(" "+a(e==null?void 0:e.title)+" ",1),C])]),x(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<r.value.length-1?(n(),s("hr",F)):b("v-if",!0)]))),128))])]))}}),Z=N(M,[["__file","/home/runner/work/angular-performance-talk/angular-performance-talk/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{Z as default};