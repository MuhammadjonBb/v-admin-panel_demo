import{Q as m,a as b,b as B,c as N,S as T}from"./QTable.0dae5795.js";import{Q as y}from"./QCheckbox.a8a936e0.js";import{aD as E,aE as F,P as D,aH as I,r as k,S as d,U as f,V as a,j as t,W as s,_ as l,aF as p,$ as u,Q as n,Y as S,aS as M,F as L,D as h,a2 as Q,o as R}from"./index.94fa42e8.js";import{Q as j}from"./QTr.798f0df9.js";import{e as v,f as x,g as H}from"./QItemLabel.1e01a216.js";import{Q as O}from"./QList.cbde4cd1.js";import{e as W,Q as C}from"./QSelect.d2bb26c1.js";import{Q as Y}from"./QSpace.41fc64f0.js";import{C as w}from"./ClosePopup.19d47213.js";import"./QCard.a4ca1398.js";import"./QSeparator.5d694be6.js";const q=E("attribute",{state:()=>({data:[]}),actions:{async getAtributes(){F(()=>import("./attributes.32ce233a.js"),[]).then(_=>{this.data=_.default})}}});const G={class:"text-grey-5",style:{"font-weight":"500"}},J={class:"row"},K={class:"row items-center q-pa-sm full-width"},X={class:"row items-center q-mr-md"},Z={class:"text-grey-7",style:{"font-size":"15px"}},ee={class:"text-grey-8",style:{"font-size":"15px"}},te={class:"row items-center"},ae={class:"text-grey-7",style:{"font-size":"15px"}},le={class:"row items-center"},oe=D({__name:"TableAttribute",setup(_){const g=q(),P=I(),c=k([]),V=k(!1);function z(r){const i=[];for(let e=1;e<=r;e++)i.push(e);return i}function U(){P.push("/orders/edit")}function $(){c.value.splice(0)}return(r,i)=>(d(),f(N,{dense:"","table-class":"q-mx-none",flat:"",class:"my-table",color:"primary","virtual-scroll":!0,"card-class":"text-black","table-header-style":"font-weight: 500;font-size: 14px; background-color: #f2f2f2;","table-header-class":"text-grey-7 q-pa-none",rows:Q(g).data,"row-key":"id",selected:c.value,"onUpdate:selected":i[1]||(i[1]=e=>c.value=e),selection:"multiple",columns:[{name:"id",label:"ID",field:e=>`#${e.id}`,sortable:!0,headerStyle:"background-color: #f2f2f2;",align:"left"},{name:"name",label:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430",field:"name",sortable:!0,headerStyle:"background-color: #f2f2f2;",align:"left"},{name:"view",label:"\u0412\u0438\u0434 \u0444\u043E\u0440\u043C\u044B",field:"view",sortable:!0,align:"left",headerStyle:"background-color: #f2f2f2;"},{name:"value",label:"\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430",field:"value",sortable:!0,headerStyle:"background-color: #f2f2f2;",align:"left"},{name:"action",label:"Action",field:"",headerStyle:"background-color: #f2f2f2;",align:"right"}]},{top:a(()=>[t(j,{class:"item-center"},{default:a(()=>[t(y,{"model-value":V.value,"onUpdate:modelValue":i[0]||(i[0]=e=>V.value=e)},null,8,["model-value"]),s("span",G,l(c.value.length)+", "+l(r.$t("table.choose")),1),t(p,{"text-color":"grey-5",icon:"delete",flat:"",round:"",onClick:$})]),_:1})]),"header-cell-id":a(e=>[t(m,{class:"text-left",style:{"background-color":"#f2f2f2"},props:e},{default:a(()=>[u(" ID "),t(n,{name:"filter_list",size:"sm",color:"indigo-10"})]),_:2},1032,["props"])]),"header-cell-name":a(e=>[t(m,{class:"text-left",style:{"background-color":"#f2f2f2"},props:e},{default:a(()=>[u(" \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 "),t(n,{name:"filter_list",size:"sm",color:"indigo-10"})]),_:2},1032,["props"])]),"header-cell-view":a(e=>[t(m,{class:"text-left",style:{"background-color":"#f2f2f2"},props:e},{default:a(()=>[u(" \u0412\u0438\u0434 "),t(n,{name:"filter_list",size:"sm",color:"indigo-10"})]),_:2},1032,["props"])]),"header-cell-value":a(e=>[t(m,{class:"text-left",style:{"background-color":"#f2f2f2"},props:e},{default:a(()=>[u(" \u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 "),t(n,{name:"filter_list",size:"sm",color:"indigo-10"})]),_:2},1032,["props"])]),"header-cell-action":a(()=>[t(m,{class:"text-right",style:{"background-color":"#f2f2f2"}},{default:a(()=>[t(n,{name:"more_vert",size:"sm",color:"dark",class:"q-mr-xs"})]),_:1})]),"body-cell-view":a(e=>[t(b,{props:e},{default:a(()=>[u(l(e.row.view),1)]),_:2},1032,["props"])]),"body-cell-value":a(e=>[t(b,{props:e},{default:a(()=>[s("div",J,[(d(!0),S(L,null,M(e.row.value,(o,A)=>(d(),f(H,{style:{background:"#9CDAFF"},square:"",key:A},{default:a(()=>[u(l(o),1)]),_:2},1024))),128))])]),_:2},1032,["props"])]),"body-cell-action":a(e=>[t(b,{props:e},{default:a(()=>[t(p,{flat:"",icon:"more_vert",rounded:"",dense:""}),t(W,null,{default:a(()=>[t(O,{style:{"min-width":"100px"}},{default:a(()=>[h((d(),f(v,null,{default:a(()=>[t(x,null,{default:a(()=>[t(p,{dense:"",flat:"",class:"text-capitalize text-left","text-color":"grey-8",onClick:U},{default:a(()=>[t(n,{size:"xs",name:"edit",color:"positive",class:"on-left"}),u(" "+l(r.$t("table.from"))+"\u043C\u0435\u043D\u0438\u0442\u044C ",1)]),_:1})]),_:1})]),_:1})),[[w]]),h((d(),f(v,null,{default:a(()=>[t(x,null,{default:a(()=>[t(p,{dense:"",flat:"",class:"text-capitalize text-left","text-color":"grey-8"},{default:a(()=>[t(n,{name:"content_copy",size:"xs",color:"primary",class:"on-left"}),u(" \u0414\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C ")]),_:1})]),_:1})]),_:1})),[[w]]),h((d(),f(v,null,{default:a(()=>[t(x,null,{default:a(()=>[t(p,{dense:"",flat:"",class:"text-capitalize text-left",onClick:o=>Q(g).deleteAtribute(e.row.id),"text-color":"grey-8"},{default:a(()=>[t(n,{name:"delete",size:"xs",color:"negative",class:"on-left"}),u(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)),[[w]])]),_:2},1024)]),_:2},1024)]),_:2},1032,["props"])]),"header-selection":a(e=>[t(y,{modelValue:e.selected,"onUpdate:modelValue":o=>e.selected=o},null,8,["modelValue","onUpdate:modelValue"])]),"body-selection":a(e=>[t(y,{modelValue:e.selected,"onUpdate:modelValue":o=>e.selected=o},null,8,["modelValue","onUpdate:modelValue"])]),bottom:a(e=>[s("div",K,[s("div",X,[t(C,{"dropdown-icon":"expand_more",borderless:"",dense:"",modelValue:e.pagination.rowsPerPage,"onUpdate:modelValue":o=>e.pagination.rowsPerPage=o,options:[5,10,20,50],"emit-value":"",class:"q-mr-sm q-pl-md q-pr-sm bg-grey-3",style:{"border-radius":"12px"}},null,8,["modelValue","onUpdate:modelValue"]),s("span",Z,l(r.$t("table.elmPerPage")),1)]),s("div",ee,l(e.pagination.rowsPerPage*e.pagination.page-e.pagination.rowsPerPage==0?1:e.pagination.rowsPerPage*e.pagination.page-e.pagination.rowsPerPage)+" - "+l(e.pagination.rowsPerPage*e.pagination.page)+" "+l(r.$t("table.from"))+" "+l(e.pagesNumber*e.pagination.rowsPerPage)+" "+l(r.$t("table.items")),1),t(Y),s("div",te,[t(C,{"dropdown-icon":"expand_more",borderless:"",dense:"",modelValue:e.pagination.page,"onUpdate:modelValue":o=>e.pagination.page=o,options:z(e.pagesNumber),"emit-value":"",class:"q-mr-sm q-pl-md q-pr-sm bg-grey-3",style:{"border-radius":"12px"}},null,8,["modelValue","onUpdate:modelValue","options"]),s("span",ae,l(r.$t("table.from"))+" "+l(e.pagesNumber)+" "+l(r.$t("table.pages")),1)]),s("div",le,[t(B,{dense:"",modelValue:e.pagination.page,"onUpdate:modelValue":o=>e.pagination.page=o,min:1,"no-number":"",max:e.pagesNumber,"direction-links":"",color:"grey"},null,8,["modelValue","onUpdate:modelValue","max"])])])]),_:1},8,["rows","selected","columns"]))}}),se={class:"q-px-md q-mb-sm main__container"},re=s("div",{class:"text-h5 text-weight-bold q-my-md"}," \u0410\u0442\u0440\u0438\u0431\u0443\u0442\u044B ",-1),ye=D({__name:"MainAttribute",setup(_){const g=q();return R(()=>{g.getAtributes()}),(P,c)=>(d(),S("div",se,[re,t(T,{dynamicRoute:"/product/attributes/create",isModal:!1}),t(oe)]))}});export{ye as default};
