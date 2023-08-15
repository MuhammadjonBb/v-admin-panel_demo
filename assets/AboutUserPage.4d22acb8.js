import{P as y,r as h,o as x,S as i,U as n,V as t,R as w,j as e,aY as Q,W as r,_ as s,aF as v,$ as a,a2 as g,Z as C}from"./index.94fa42e8.js";import{a as $,Q as c}from"./QCard.a4ca1398.js";import{Q as S}from"./QSpace.41fc64f0.js";import{e as d,x as l}from"./QItemLabel.1e01a216.js";import{Q as u}from"./QList.cbde4cd1.js";import{Q as z}from"./QPage.b0984c75.js";import{a as k}from"./QLayout.171c6731.js";import{u as V,_ as B}from"./UsersModal.5ce7e6fc.js";import{u as D}from"./ClosePopup.19d47213.js";import{b as H}from"./beautifyDate.4318ca9d.js";import"./QImg.2154a7d2.js";import"./QSelect.d2bb26c1.js";import"./DefaultInput.95b99efe.js";import"./PhoneInput.b484b22c.js";import"./PasswordInput.fef953f7.js";import"./vue-i18n.esm-bundler.61bc1595.js";import"./axios.4876605a.js";import"./formatPhoneNum.ebb17780.js";const I={class:"text-medium q-mt-md text-h6"},N={class:"row items-center"},U={class:"text-h6"},L={class:"column q-pa-md",style:{border:"1px solid #f2f2f2","border-radius":"10px"}},le=y({__name:"AboutUserPage",setup(P){const p=w(),o=h(null),f=D(),_=V();function b(){f.modal.users.edit=!0}function q(){return _.users.find(m=>m.id==p.params.id)}return x(()=>{o.value=q()}),(m,j)=>(i(),n(k,null,{default:t(()=>[e(z,{class:"q-pa-md main__container"},{default:t(()=>[e(B,{label:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C","modal-name":"edit"}),o.value?(i(),n($,{key:0,class:"row q-pa-lg no-wrap",flat:""},{default:t(()=>[e(c,{class:"column items-center justify-center",style:{width:"30%"}},{default:t(()=>[e(Q,{class:"text-grey-7",color:"grey-4",icon:"person",size:"170px"}),r("div",I,s(o.value.name),1)]),_:1}),e(c,{class:"full-width"},{default:t(()=>[r("div",N,[r("h3",U,s(m.$t("users.info")),1),e(S),e(v,{flat:"",class:"bg-white",color:"primary",label:m.$t("btn.edit"),"no-caps":"",onClick:b},null,8,["label"])]),r("div",L,[e(u,{class:"row"},{default:t(()=>[e(d,{style:{width:"350px"},class:"column q-mb-md"},{default:t(()=>[e(l,{style:{"font-size":"16px"},class:"q-mb-sm text-medium"},{default:t(()=>[a(s(m.$t("phoneInput.name")),1)]),_:1}),e(l,{class:"q-pl-md q-pt-md"},{default:t(()=>[a(s(o.value.phone),1)]),_:1})]),_:1}),e(d,{style:{width:"350px"},class:"column q-mb-md"},{default:t(()=>[e(l,{style:{"font-size":"16px"},class:"q-mb-sm text-medium"},{default:t(()=>[a("E-mail")]),_:1}),e(l,{class:"q-pl-md q-pt-md"},{default:t(()=>[a(s(o.value.phone),1)]),_:1})]),_:1})]),_:1}),e(u,{class:"row"},{default:t(()=>[e(d,{style:{width:"350px"},class:"column q-mb-md"},{default:t(()=>[e(l,{style:{"font-size":"16px"},class:"q-mb-sm text-medium"},{default:t(()=>[a(s(m.$t("users.table.tableHead.birthday")),1)]),_:1}),e(l,{class:"q-pl-md q-pt-md"},{default:t(()=>[a(s(o.value.birthday),1)]),_:1})]),_:1}),e(d,{style:{width:"350px"},class:"column q-mb-md"},{default:t(()=>[e(l,{style:{"font-size":"16px"},class:"q-mb-sm text-medium"},{default:t(()=>[a(s(m.$t("users.table.tableHead.registerDate")),1)]),_:1}),e(l,{class:"q-pl-md q-pt-md"},{default:t(()=>[a(s(g(H)(o.value.register_date)[0]),1)]),_:1})]),_:1})]),_:1}),e(u,{class:"row"},{default:t(()=>[e(d,{style:{width:"350px"},class:"column q-mb-md"},{default:t(()=>[e(l,{style:{"font-size":"16px"},class:"q-mb-sm text-medium"},{default:t(()=>[a(s(m.$t("users.table.tableHead.status")),1)]),_:1}),e(l,{class:"q-pl-md q-pt-md"},{default:t(()=>[a(s(o.value.status),1)]),_:1})]),_:1}),e(d,{style:{width:"350px"},class:"column q-mb-md"},{default:t(()=>[e(l,{style:{"font-size":"16px"},class:"q-mb-sm text-medium"},{default:t(()=>[a(s(m.$t("users.table.tableHead.role")),1)]),_:1}),e(l,{class:"q-pl-md q-pt-md"},{default:t(()=>[a(s(o.value.role),1)]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})):C("",!0)]),_:1})]),_:1}))}});export{le as default};