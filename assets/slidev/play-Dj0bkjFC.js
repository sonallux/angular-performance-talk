import{d as _,a6 as N,o as a,c as u,A as o,b as p,e as t,f as z,i as C,g as s,a7 as I,y as B,k as S,a5 as v,a0 as P,M as g,l as f,F as $,t as E,h as R}from"../modules/vue-9BZyvrAS.js";import{b as V,e as b,f as x,h as U,j as M,w as A,k as H,l as O}from"./bottom-8Gdm42i2.js";import{Q as T,G as j,r as F,a as G,u as L,S as Q,b as W,N as K}from"./SlidesShow-DYTTXInq.js";import{_ as k,c as D,u as X}from"../index-BG4fwuyN.js";import{P as Y}from"./PrintStyle-BnXmOxrB.js";import"../modules/unplugin-icons-B4Fkdya8.js";import"../modules/shiki-CRGP_BDn.js";const q="/angular-performance-talk/assets/logo-BYkHSa_O.png",J={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Z=_({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(d,{emit:n}){const r=d,e=N(r,"modelValue",n);function l(){e.value=!1}return(c,i)=>(a(),u(I,null,[o(e)?(a(),p("div",J,[t("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:i[0]||(i[0]=m=>l())}),t("div",{class:C(["m-auto rounded-md bg-main shadow",r.class]),"dark:border":"~ main"},[z(c.$slots,"default")],2)])):s("v-if",!0)],1024))}}),ee=k(Z,[["__file","/home/runner/work/angular-performance-talk/angular-performance-talk/node_modules/@slidev/client/internals/Modal.vue"]]),oe={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ae=["innerHTML"],le=t("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[t("div",{class:"flex gap-1 children:my-auto"},[t("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),t("img",{class:"w-5 h-5",src:q,alt:"Slidev logo"}),t("div",{style:{color:"#2082A6"}},[t("b",null,"Sli"),P("dev ")])])],-1),te=_({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(d,{emit:n}){const e=N(d,"modelValue",n),l=B(()=>typeof D.info=="string");return(c,i)=>(a(),u(ee,{modelValue:o(e),"onUpdate:modelValue":i[0]||(i[0]=m=>v(e)?e.value=m:null),class:"px-6 py-4"},{default:S(()=>[t("div",oe,[l.value?(a(),p("div",{key:0,class:"mb-4",innerHTML:o(D).info},null,8,ae)):s("v-if",!0),le])]),_:1},8,["modelValue"]))}}),se=k(te,[["__file","/home/runner/work/angular-performance-talk/angular-performance-talk/node_modules/@slidev/client/internals/InfoDialog.vue"]]),ne=_({__name:"Controls",setup(d){const n=g(),r=g();return(w,e)=>(a(),p($,null,[f(T,{modelValue:o(V),"onUpdate:modelValue":e[0]||(e[0]=l=>v(V)?V.value=l:null)},null,8,["modelValue"]),f(j),n.value?(a(),u(o(n),{key:0})):s("v-if",!0),r.value?(a(),u(o(r),{key:1,modelValue:o(b),"onUpdate:modelValue":e[1]||(e[1]=l=>v(b)?b.value=l:null)},null,8,["modelValue"])):s("v-if",!0),o(D).info?(a(),u(se,{key:2,modelValue:o(x),"onUpdate:modelValue":e[2]||(e[2]=l=>v(x)?x.value=l:null)},null,8,["modelValue"])):s("v-if",!0)],64))}}),re=k(ne,[["__file","/home/runner/work/angular-performance-talk/angular-performance-talk/node_modules/@slidev/client/internals/Controls.vue"]]),ie=_({__name:"play",setup(d){F();const{next:n,prev:r,isEmbedded:w,isPrintMode:e}=X(),{isDrawing:l}=G(),c=E();function i(y){var h;M.value||((h=y.target)==null?void 0:h.id)==="slide-container"&&(y.screenX/window.innerWidth>.6?n():r())}L(c);const m=B(()=>U.value||M.value);g();const ue=g();return(y,h)=>(a(),p($,null,[o(e)?(a(),u(Y,{key:0})):s("v-if",!0),t("div",{id:"page-root",ref_key:"root",ref:c,class:C(["grid",o(O)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[f(Q,{class:"w-full h-full",style:R({background:"var(--slidev-slide-container-background, black)"}),width:o(e)?o(A).width.value:void 0,scale:o(H),"is-main":!0,onPointerdown:i},{default:S(()=>[f(W,{"render-context":"slide"})]),controls:S(()=>[o(e)?s("v-if",!0):(a(),p("div",{key:0,class:C(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[m.value?"!opacity-100 right-0":"opacity-0 p-2",o(l)?"pointer-events-none":""]])},[f(K,{class:"m-auto",persist:m.value},null,8,["persist"])],2)),s("v-if",!0)]),_:1},8,["style","width","scale"]),s("v-if",!0)],2),o(e)?s("v-if",!0):(a(),u(re,{key:1}))],64))}}),_e=k(ie,[["__file","/home/runner/work/angular-performance-talk/angular-performance-talk/node_modules/@slidev/client/pages/play.vue"]]);export{_e as default};
