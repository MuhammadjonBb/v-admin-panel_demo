import{Q as D}from"./QPage.b0984c75.js";import{a as H}from"./QLayout.171c6731.js";import{Q as x}from"./QCheckbox.a8a936e0.js";import{P as C,aH as B,r as Q,S as g,U as p,V as a,j as t,W as r,_ as o,aF as b,$ as c,Q as f,a2 as _,D as $,o as T,Z as F}from"./index.94fa42e8.js";import{Q as I}from"./QTr.798f0df9.js";import{Q as h,a as y,b as O,c as L,S as j}from"./QTable.0dae5795.js";import{g as A,e as w,f as v}from"./QItemLabel.1e01a216.js";import{Q as M}from"./QList.cbde4cd1.js";import{e as R,Q as k}from"./QSelect.d2bb26c1.js";import{Q as W}from"./QSpace.41fc64f0.js";import{C as V}from"./ClosePopup.19d47213.js";import{b as S}from"./beautifyDate.4318ca9d.js";import{u as z}from"./orders.65f78035.js";import{u as Z}from"./vue-i18n.esm-bundler.61bc1595.js";import"./QCard.a4ca1398.js";import"./QSeparator.5d694be6.js";import"./input.a9224496.js";function G(n,s=["\u0442\u043E\u0432\u0430\u0440","\u0442\u043E\u0432\u0430\u0440\u0430","\u0442\u043E\u0432\u0430\u0440\u043E\u0432"]){const m=n%100,u=n%10;if(m>=11&&m<=19)return`${n} ${s[2]}`;switch(u){case 1:return`${n} ${s[0]}`;case 2:case 3:case 4:return`${n} ${s[1]}`;default:return`${n} ${s[2]}`}}const J={class:"text-grey-5",style:{"font-weight":"500"}},K={class:"column"},X={class:"text-grey-7",style:{"font-size":"12px"}},Y={style:{color:"#109EF4","text-decoration":"underline",cursor:"pointer"}},ee={class:"row items-center q-pa-sm full-width"},te={class:"row items-center q-mr-md"},ae={class:"text-grey-7",style:{"font-size":"15px"}},le={class:"text-grey-8",style:{"font-size":"15px"}},oe={class:"row items-center"},re={class:"text-grey-7",style:{"font-size":"15px"}},se={class:"row items-center"},ne=C({__name:"OrdersTable",props:["data"],setup(n){function s(){const{locale:l}=Z();return l.value.slice(0,-3)}z();const m=B(),u=Q([]),P=Q(!1);function q(l){const i=[];for(let e=1;e<=l;e++)i.push(e);return i}function U(l){m.push("/orders/edit/"+l.toString().substring(1))}function E(l){return l==="\u041E\u043F\u043B\u0430\u0447\u0435\u043D"?"positive text-white":l==="\u041E\u0442\u043C\u0435\u043D\u0435\u043D"?"red-6 text-white":l==="\u0412 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0438"?"amber-2 text-amber-9":"light-blue-13 text-white"}function N(){u.value.splice(0)}return(l,i)=>(g(),p(L,{dense:"","table-class":"q-mx-none",flat:"","table-header-style":"font-weight: 500;font-size: 14px; background-color: #f2f2f2;","table-header-class":"text-grey-7 q-pa-none",rows:n.data,"row-key":"id",selected:u.value,"onUpdate:selected":i[1]||(i[1]=e=>u.value=e),selection:"multiple",columns:[{name:"id",label:`${l.$t("orders.table.tableHead.orderNum")}`,field:"order_id",sortable:!0,headerStyle:"background-color: #f2f2f2;",align:"left"},{name:"client",label:`${l.$t("orders.table.tableHead.clientName")}`,field:"client_name",sortable:!0,headerStyle:"background-color: #f2f2f2;",align:"left"},{name:"phone",label:`${l.$t("orders.table.tableHead.phone")}`,field:"phone",headerStyle:"background-color: #f2f2f2;",align:"left"},{name:"address",label:`${l.$t("orders.table.tableHead.address")}`,field:"address",headerStyle:"background-color: #f2f2f2;",align:"left"},{name:"products",label:`${l.$t("orders.table.tableHead.products")}`,field:"products",headerStyle:"background-color: #f2f2f2;",align:"left",sortable:!0},{name:"price",label:`${l.$t("orders.table.tableHead.cost")}`,field:"price",headerStyle:"background-color: #f2f2f2;",align:"left"},{name:"date",label:`${l.$t("orders.table.tableHead.orderTime")}`,field:"order_time",headerStyle:"background-color: #f2f2f2;",align:"left"},{name:"status",label:`${l.$t("orders.table.tableHead.status")}`,field:"status",align:"left",headerStyle:"background-color: #f2f2f2;"},{name:"action",label:"Action",field:"",headerStyle:"background-color: #f2f2f2;",align:"right"}]},{top:a(()=>[t(I,{class:"item-center"},{default:a(()=>[t(x,{"model-value":P.value,"onUpdate:modelValue":i[0]||(i[0]=e=>P.value=e)},null,8,["model-value"]),r("span",J,o(u.value.length)+", "+o(l.$t("table.choose")),1),t(b,{"text-color":"grey-5",icon:"delete",flat:"",round:"",onClick:N})]),_:1})]),"header-cell-id":a(e=>[t(h,{class:"text-left",style:{"background-color":"#f2f2f2"},props:e},{default:a(()=>[c(o(e.col.label)+" ",1),t(f,{name:"filter_list",size:"sm",color:"indigo-10"})]),_:2},1032,["props"])]),"header-cell-client":a(e=>[t(h,{class:"text-left",style:{"background-color":"#f2f2f2"},props:e},{default:a(()=>[c(o(e.col.label)+" ",1),t(f,{name:"filter_list",size:"sm",color:"indigo-10"})]),_:2},1032,["props"])]),"header-cell-products":a(e=>[t(h,{class:"text-left",style:{"background-color":"#f2f2f2"},props:e},{default:a(()=>[c(o(e.col.label)+" ",1),t(f,{name:"filter_list",size:"sm",color:"indigo-10"})]),_:2},1032,["props"])]),"header-cell-action":a(()=>[t(h,{class:"text-right",style:{"background-color":"#f2f2f2"}},{default:a(()=>[t(f,{name:"more_vert",size:"sm",color:"dark",class:"q-mr-xs"})]),_:1})]),"body-cell-date":a(e=>[t(y,{props:e},{default:a(()=>[r("div",K,[r("span",null,o(_(S)(e.row.order_time[0])[0]),1),r("span",X,o(_(S)(e.row.order_time[0])[1]),1)])]),_:2},1032,["props"])]),"body-cell-status":a(e=>[t(y,{props:e},{default:a(()=>[t(A,{square:"",color:E(e.row.status_ru),class:"full-width justify-center"},{default:a(()=>[c(o(e.row[`status_${s()}`])+" ",1)]),_:2},1032,["color"])]),_:2},1032,["props"])]),"body-cell-products":a(e=>[t(y,{props:e},{default:a(()=>[r("div",Y,[r("div",null,o(_(G)(e.row.products))+" ",1)])]),_:2},1032,["props"])]),"body-cell-action":a(e=>[t(y,{props:e},{default:a(()=>[t(b,{flat:"",icon:"more_vert",rounded:"",dense:""}),t(R,null,{default:a(()=>[t(M,{style:{"min-width":"100px"}},{default:a(()=>[$((g(),p(w,null,{default:a(()=>[t(v,null,{default:a(()=>[t(b,{dense:"",flat:"",class:"text-capitalize text-left","text-color":"grey-8",onClick:d=>U(e.row.order_id)},{default:a(()=>[t(f,{size:"xs",name:"edit",color:"positive",class:"on-left"}),c(" \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)),[[V]]),$((g(),p(w,null,{default:a(()=>[t(v,null,{default:a(()=>[t(b,{dense:"",flat:"",class:"text-capitalize text-left","text-color":"grey-8"},{default:a(()=>[t(f,{name:"content_copy",size:"xs",color:"primary",class:"on-left"}),c(" \u0414\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C ")]),_:1})]),_:1})]),_:1})),[[V]]),$((g(),p(w,null,{default:a(()=>[t(v,null,{default:a(()=>[t(b,{dense:"",flat:"",class:"text-capitalize text-left","text-color":"grey-8"},{default:a(()=>[t(f,{name:"delete",size:"xs",color:"negative",class:"on-left"}),c(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")]),_:1})]),_:1})]),_:1})),[[V]])]),_:2},1024)]),_:2},1024)]),_:2},1032,["props"])]),"header-selection":a(e=>[t(x,{modelValue:e.selected,"onUpdate:modelValue":d=>e.selected=d},null,8,["modelValue","onUpdate:modelValue"])]),"body-selection":a(e=>[t(x,{modelValue:e.selected,"onUpdate:modelValue":d=>e.selected=d},null,8,["modelValue","onUpdate:modelValue"])]),bottom:a(e=>[r("div",ee,[r("div",te,[t(k,{"dropdown-icon":"expand_more",borderless:"",dense:"",modelValue:e.pagination.rowsPerPage,"onUpdate:modelValue":d=>e.pagination.rowsPerPage=d,options:[5,10,20,50],"emit-value":"",class:"q-mr-sm q-pl-md q-pr-sm bg-grey-3",style:{"border-radius":"12px"}},null,8,["modelValue","onUpdate:modelValue"]),r("span",ae,o(l.$t("table.elmPerPage")),1)]),r("div",le,o(e.pagination.rowsPerPage*e.pagination.page-e.pagination.rowsPerPage==0?1:e.pagination.rowsPerPage*e.pagination.page-e.pagination.rowsPerPage)+" - "+o(e.pagination.rowsPerPage*e.pagination.page)+" "+o(l.$t("table.from"))+" "+o(n.data.length)+" "+o(l.$t("table.items")),1),t(W),r("div",oe,[t(k,{"dropdown-icon":"expand_more",borderless:"",dense:"",modelValue:e.pagination.page,"onUpdate:modelValue":d=>e.pagination.page=d,options:q(e.pagesNumber),"emit-value":"",class:"q-mr-sm q-pl-md q-pr-sm bg-grey-3",style:{"border-radius":"12px"}},null,8,["modelValue","onUpdate:modelValue","options"]),r("span",re,o(l.$t("table.from"))+" "+o(e.pagesNumber)+" "+o(l.$t("table.pages")),1)]),r("div",se,[t(O,{dense:"",modelValue:e.pagination.page,"onUpdate:modelValue":d=>e.pagination.page=d,min:1,"no-number":"",max:e.pagesNumber,"direction-links":"",color:"grey"},null,8,["modelValue","onUpdate:modelValue","max"])])])]),_:1},8,["rows","selected","columns"]))}}),de={class:"text-h5 text-weight-bold"},Qe=C({__name:"OrdersPage",setup(n){const s=z();return T(()=>{s.getProducts(),s.getOrders()}),(m,u)=>(g(),p(H,null,{default:a(()=>[t(D,{class:"q-pa-md main__container"},{default:a(()=>[r("h1",de,o(m.$t("orders.title")),1),t(j,{class:"q-mb-md","dynamic-route":"create","is-modal":!1}),_(s).orders?(g(),p(ne,{key:0,data:_(s).orders},null,8,["data"])):F("",!0)]),_:1})]),_:1}))}});export{Qe as default};