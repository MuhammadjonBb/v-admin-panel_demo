import{e as D,Q as Ee,z as ct,f as ee,x as R}from"./QItemLabel.1e01a216.js";import{z as Ce,c as q,h as V,Q as re,aD as dt,P as Te,r as $,w as oe,S as U,U as W,V as n,j as t,W as x,_ as y,D as te,aF as E,a2 as k,Y as xe,F as qe,aS as $e,$ as L,aT as le,A as we,C as je,o as ft,i as mt,aA as vt,aX as Ke,y as Fe,ae as gt,ar as bt,K as pt,g as Oe,aq as ht,ab as wt,an as yt,G as kt,a4 as _t,ak as St}from"./index.94fa42e8.js";import{u as xt,a as qt,b as $t,Q as ye}from"./QCheckbox.a8a936e0.js";import{Q as se}from"./QList.cbde4cd1.js";import{a as Le,Q as B}from"./QCard.a4ca1398.js";import{Q as ve}from"./QSeparator.5d694be6.js";import{Q as ae}from"./QSpace.41fc64f0.js";import{Q as Ct}from"./QPage.b0984c75.js";import{Q as Tt,a as Lt}from"./QLayout.171c6731.js";import{Q as Vt,k as He,l as ke,u as We,r as It}from"./QSelect.d2bb26c1.js";import{u as Ve,C as ie}from"./ClosePopup.19d47213.js";import{api as H}from"./axios.4876605a.js";import{u as zt}from"./input.a9224496.js";import{r as Pt}from"./formatPhoneNum.ebb17780.js";import{u as Ie}from"./vue-i18n.esm-bundler.61bc1595.js";import{_ as X}from"./DefaultInput.95b99efe.js";import{_ as Rt}from"./PhoneInput.b484b22c.js";import"./QImg.2154a7d2.js";var _e=Ce({name:"QToggle",props:{...xt,icon:String,iconColor:String},emits:qt,setup(e){function b(h,a){const i=q(()=>(h.value===!0?e.checkedIcon:a.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),w=q(()=>h.value===!0?e.iconColor:null);return()=>[V("div",{class:"q-toggle__track"}),V("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},i.value!==void 0?[V(re,{name:i.value,color:w.value})]:void 0)]}return $t("toggle",b)}});zt();const ze=dt("siteSettings",{state:()=>({siteInfo:null,socialNetworks:[{name:"Facebook",link:"https://www.facebook.com/intex"},{name:"Instagram",link:"https://www.instagram.com/intex/"},{name:"Twitter",link:"https://twitter.com/intex"},{name:"Telegram",link:"https://t.me/intex"}],langStatus:{lang_ru:!1,lang_uz:!1,lang_en:!1},contacts:{address:"\u0423\u043B\u0438\u0446\u0430 \u041F\u0430\u0445\u043B\u0430\u0432\u043E\u043D\u0430 \u041C\u0430\u0445\u043C\u0443\u0434\u0430, \u042F\u0448\u043D\u0430\u0431\u0430\u0434\u0441\u043A\u0438\u0439 \u0440\u0430\u0439\u043E\u043D, \u0433\u043E\u0440\u043E\u0434 \u0422\u0430\u0448\u043A\u0435\u043D\u0442",phone:"+998 (90) 128 81 82",email:"intex@gmail.com",schedule:"10:00 - 22:00 \u0411\u0435\u0437 \u0432\u044B\u0445\u043E\u0434\u043D\u044B\u0445"}}),actions:{getSiteInfo(){return H.get("sites").then(e=>{this.siteInfo=e.data[0]}).catch(e=>{console.log(e)})},updateSiteInfo(e){const b={id:1,...e,...this.langStatus};return b.phone=Pt(b.phone),H.put("sites",b)},getSocialNetworks(){return H.get("social-networks").then(e=>this.socialNetworks=e.data)},deleteSocialNetwork(e){return H.delete(`social-networks/${e}`).then(b=>{this.getSocialNetworks()})},siteLangUpdate(e,b){return H.put("sites/siteLangUpdate",{lang_name:e,status:b})},updateDefaultLang(e){return H.put("sites/defaultLang",{lang_name:e})},createSocialNetwork(e){return H.post("social-networks",e).then(b=>{this.getSocialNetworks()})},updateSocialNetwork(e){return H.put("social-networks",e).then(b=>{this.getSocialNetworks()})}}}),Qt={class:"text-h6 font-weight-bold"},Bt=["for"],Ut={style:{width:"15%"},class:"column full-width q-mb-md"},At={class:"font-weight-medium q-mb-md full-width",style:{display:"block"}},Mt={class:"row q-mt-lg"},Nt=Te({__name:"EditSocialsDialog",setup(e){const{t:b}=Ie(),h=ze(),a=Ve(),i=$([]),w=$({amount:0,items:[],options:["Twitter","Instagram","Facebook","LinkedIn"],inputValue:""});function g(){w.value.items.push({name:"",link:""})}oe(()=>h.socialNetworks,()=>{i.value=JSON.parse(JSON.stringify(h.socialNetworks))});function m(){i.value.forEach(c=>{var s;(c==null?void 0:c.link)!==((s=h.socialNetworks.find(r=>r.id===c.id))==null?void 0:s.link)&&le.create({message:b("notification.siteSettings.socials.updated"),color:"positive",position:"top-right",group:!1})}),w.value.items.length>0&&w.value.items.forEach(c=>{w.value.items=[],le.create({message:b("notification.siteSettings.socials.created"),color:"positive",position:"top-right",group:!1})})}function u(c){le.create({message:b("notification.siteSettings.socials.deleted"),color:"positive",position:"top-right",group:!1})}return(c,s)=>(U(),W(He,{modelValue:k(a).modal.settings.socials,"onUpdate:modelValue":s[3]||(s[3]=r=>k(a).modal.settings.socials=r),persistent:""},{default:n(()=>[t(Le,{style:{"min-width":"700px","border-radius":"16px"},class:"q-pa-md"},{default:n(()=>[t(B,{class:"row items-center"},{default:n(()=>[x("div",Qt,y(c.$t("siteSettings.modal.title")),1),t(ae),te(t(E,{icon:"close","text-color":"primary",flat:"",class:"bg-grey-3",style:{width:"32px",height:"32px","border-radius":"8px"},size:"13px",onClick:s[0]||(s[0]=r=>k(a).closeModal())},null,512),[[ie]])]),_:1}),t(B,{class:"q-pt-none column"},{default:n(()=>[t(se,{class:"column no-wrap"},{default:n(()=>[(U(!0),xe(qe,null,$e(i.value,r=>(U(),W(D,{class:"column q-pa-none q-mt-lg",key:r.id},{default:n(()=>[x("label",{for:r.name,class:"font-weight-medium q-mb-md full-width",style:{display:"block"}},[L(y(r.name)+" ",1),t(Ee,{id:r.name,borderless:"",modelValue:r.link,"onUpdate:modelValue":C=>r.link=C,class:"q-mt-sm border-reset q-px-md"},null,8,["id","modelValue","onUpdate:modelValue"])],8,Bt),t(E,{flat:"",icon:"remove",label:c.$t("siteSettings.modal.socials.delete"),"no-caps":"",onClick:C=>u(r.id),style:{"align-self":"start","font-size":"14px","margin-top":"-10px"},class:"",color:"negative"},null,8,["label","onClick"])]),_:2},1024))),128)),(U(!0),xe(qe,null,$e(w.value.items.length,(r,C)=>(U(),W(D,{class:"column q-pa-none q-mt-lg",key:C},{default:n(()=>[x("label",Ut,[L(y(c.$t("siteSettings.modal.socials.type"))+" ",1),t(Vt,{"dropdown-icon":"expand_more",class:"q-mt-sm q-px-md border-reset q-py-xs",dense:"",borderless:"",modelValue:w.value.items[C].name,"onUpdate:modelValue":T=>w.value.items[C].name=T,options:w.value.options},null,8,["modelValue","onUpdate:modelValue","options"])]),x("label",At,[L(y(c.$t("siteSettings.modal.socials.link"))+" ",1),t(Ee,{borderless:"",modelValue:w.value.items[C].link,"onUpdate:modelValue":T=>w.value.items[C].link=T,class:"q-mt-sm border-reset q-px-md"},null,8,["modelValue","onUpdate:modelValue"])])]),_:2},1024))),128))]),_:1}),t(ve,{class:"q-mt-lg"}),t(E,{flat:"",icon:"add",label:c.$t("siteSettings.modal.socials.add"),"no-caps":"",style:{"align-self":"start","font-size":"14px"},class:"q-mt-lg",color:"primary",onClick:g},null,8,["label"]),x("div",Mt,[t(ae),te(t(E,{onClick:s[1]||(s[1]=r=>k(a).closeModal()),color:"indigo-10",flat:"",label:c.$t("btn.cancel"),style:{"border-radius":"12px"},class:"q-py-sm bg-grey-2 q-px-xl q-mr-md","no-caps":""},null,8,["label"]),[[ie]]),te(t(E,{onClick:s[2]||(s[2]=r=>m()),color:"white",flat:"",label:c.$t("btn.save"),style:{"border-radius":"12px"},class:"q-py-sm q-px-xl bg-indigo-10","no-caps":""},null,8,["label"]),[[ie]])])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}});let Dt=0;const Et=["click","keydown"],Ft={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Dt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Wt(e,b,h,a){const i=mt(Ke,we);if(i===we)return console.error("QTab/QRouteTab component needs to be child of QTabs"),we;const{proxy:w}=Oe(),g=$(null),m=$(null),u=$(null),c=q(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),s=q(()=>i.currentModel.value===e.name),r=q(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(s.value===!0?" q-tab--active"+(i.tabProps.value.activeClass?" "+i.tabProps.value.activeClass:"")+(i.tabProps.value.activeColor?` text-${i.tabProps.value.activeColor}`:"")+(i.tabProps.value.activeBgColor?` bg-${i.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&i.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||i.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(a!==void 0?a.linkClass.value:"")),C=q(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(i.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),T=q(()=>e.disable===!0||i.hasFocus.value===!0||s.value===!1&&i.hasActiveTab.value===!0?-1:e.tabindex||0);function M(f,P){if(P!==!0&&g.value!==null&&g.value.focus(),e.disable===!0){a!==void 0&&a.hasRouterLink.value===!0&&Fe(f);return}if(a===void 0){i.updateModel({name:e.name}),h("click",f);return}if(a.hasRouterLink.value===!0){const Q=(I={})=>{let A;const N=I.to===void 0||ht(I.to,e.to)===!0?i.avoidRouteWatcher=ct():null;return a.navigateToRouterLink(f,{...I,returnRouterError:!0}).catch(G=>{A=G}).then(G=>{if(N===i.avoidRouteWatcher&&(i.avoidRouteWatcher=!1,A===void 0&&(G===void 0||G.message.startsWith("Avoided redundant navigation")===!0)&&i.updateModel({name:e.name})),I.returnRouterError===!0)return A!==void 0?Promise.reject(A):G})};h("click",f,Q),f.defaultPrevented!==!0&&Q();return}h("click",f)}function j(f){gt(f,[13,32])?M(f,!0):bt(f)!==!0&&f.keyCode>=35&&f.keyCode<=40&&f.altKey!==!0&&f.metaKey!==!0&&i.onKbdNavigate(f.keyCode,w.$el)===!0&&Fe(f),h("keydown",f)}function ne(){const f=i.tabProps.value.narrowIndicator,P=[],Q=V("div",{ref:u,class:["q-tab__indicator",i.tabProps.value.indicatorClass]});e.icon!==void 0&&P.push(V(re,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&P.push(V("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&P.push(e.alertIcon!==void 0?V(re,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):V("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),f===!0&&P.push(Q);const I=[V("div",{class:"q-focus-helper",tabindex:-1,ref:g}),V("div",{class:C.value},pt(b.default,P))];return f===!1&&I.push(Q),I}const J={name:q(()=>e.name),rootRef:m,tabIndicatorRef:u,routeData:a};je(()=>{i.unregisterTab(J)}),ft(()=>{i.registerTab(J)});function ue(f,P){const Q={ref:m,class:r.value,tabindex:T.value,role:"tab","aria-selected":s.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:M,onKeydown:j,...P};return te(V(f,Q,ne()),[[vt,c.value]])}return{renderTab:ue,$tabs:i}}var Se=Ce({name:"QTab",props:Ft,emits:Et,setup(e,{slots:b,emit:h}){const{renderTab:a}=Wt(e,b,h);return()=>a("div")}});function jt(e,b,h){const a=h===!0?["left","right"]:["top","bottom"];return`absolute-${b===!0?a[0]:a[1]}${e?` text-${e}`:""}`}const Kt=["left","center","right","justify"];var Ot=Ce({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Kt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:b,emit:h}){const{proxy:a}=Oe(),{$q:i}=a,{registerTick:w}=ke(),{registerTick:g}=ke(),{registerTick:m}=ke(),{registerTimeout:u,removeTimeout:c}=We(),{registerTimeout:s,removeTimeout:r}=We(),C=$(null),T=$(null),M=$(e.modelValue),j=$(!1),ne=$(!0),J=$(!1),ue=$(!1),f=[],P=$(0),Q=$(!1);let I=null,A=null,N;const G=q(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:jt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),Ge=q(()=>{const l=P.value,o=M.value;for(let d=0;d<l;d++)if(f[d].name.value===o)return!0;return!1}),Xe=q(()=>`q-tabs__content--align-${j.value===!0?"left":ue.value===!0?"justify":e.align}`),Je=q(()=>`q-tabs row no-wrap items-center q-tabs--${j.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Ye=q(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+Xe.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),ce=q(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),de=q(()=>e.vertical!==!0&&i.lang.rtl===!0),ge=q(()=>It===!1&&de.value===!0);oe(de,Z),oe(()=>e.modelValue,l=>{be({name:l,setCurrent:!0,skipEmit:!0})}),oe(()=>e.outsideArrows,fe);function be({name:l,setCurrent:o,skipEmit:d}){M.value!==l&&(d!==!0&&e["onUpdate:modelValue"]!==void 0&&h("update:modelValue",l),(o===!0||e["onUpdate:modelValue"]===void 0)&&(Ze(M.value,l),M.value=l))}function fe(){w(()=>{Pe({width:C.value.offsetWidth,height:C.value.offsetHeight})})}function Pe(l){if(ce.value===void 0||T.value===null)return;const o=l[ce.value.container],d=Math.min(T.value[ce.value.scroll],Array.prototype.reduce.call(T.value.children,(S,p)=>S+(p[ce.value.content]||0),0)),_=o>0&&d>o;j.value=_,_===!0&&g(Z),ue.value=o<parseInt(e.breakpoint,10)}function Ze(l,o){const d=l!=null&&l!==""?f.find(S=>S.name.value===l):null,_=o!=null&&o!==""?f.find(S=>S.name.value===o):null;if(d&&_){const S=d.tabIndicatorRef.value,p=_.tabIndicatorRef.value;I!==null&&(clearTimeout(I),I=null),S.style.transition="none",S.style.transform="none",p.style.transition="none",p.style.transform="none";const v=S.getBoundingClientRect(),z=p.getBoundingClientRect();p.style.transform=e.vertical===!0?`translate3d(0,${v.top-z.top}px,0) scale3d(1,${z.height?v.height/z.height:1},1)`:`translate3d(${v.left-z.left}px,0,0) scale3d(${z.width?v.width/z.width:1},1,1)`,m(()=>{I=setTimeout(()=>{I=null,p.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",p.style.transform="none"},70)})}_&&j.value===!0&&Y(_.rootRef.value)}function Y(l){const{left:o,width:d,top:_,height:S}=T.value.getBoundingClientRect(),p=l.getBoundingClientRect();let v=e.vertical===!0?p.top-_:p.left-o;if(v<0){T.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(v),Z();return}v+=e.vertical===!0?p.height-S:p.width-d,v>0&&(T.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(v),Z())}function Z(){const l=T.value;if(l===null)return;const o=l.getBoundingClientRect(),d=e.vertical===!0?l.scrollTop:Math.abs(l.scrollLeft);de.value===!0?(ne.value=Math.ceil(d+o.width)<l.scrollWidth-1,J.value=d>0):(ne.value=d>0,J.value=e.vertical===!0?Math.ceil(d+o.height)<l.scrollHeight:Math.ceil(d+o.width)<l.scrollWidth)}function Re(l){A!==null&&clearInterval(A),A=setInterval(()=>{lt(l)===!0&&K()},5)}function Qe(){Re(ge.value===!0?Number.MAX_SAFE_INTEGER:0)}function Be(){Re(ge.value===!0?0:Number.MAX_SAFE_INTEGER)}function K(){A!==null&&(clearInterval(A),A=null)}function et(l,o){const d=Array.prototype.filter.call(T.value.children,z=>z===o||z.matches&&z.matches(".q-tab.q-focusable")===!0),_=d.length;if(_===0)return;if(l===36)return Y(d[0]),d[0].focus(),!0;if(l===35)return Y(d[_-1]),d[_-1].focus(),!0;const S=l===(e.vertical===!0?38:37),p=l===(e.vertical===!0?40:39),v=S===!0?-1:p===!0?1:void 0;if(v!==void 0){const z=de.value===!0?-1:1,F=d.indexOf(o)+v*z;return F>=0&&F<_&&(Y(d[F]),d[F].focus({preventScroll:!0})),!0}}const tt=q(()=>ge.value===!0?{get:l=>Math.abs(l.scrollLeft),set:(l,o)=>{l.scrollLeft=-o}}:e.vertical===!0?{get:l=>l.scrollTop,set:(l,o)=>{l.scrollTop=o}}:{get:l=>l.scrollLeft,set:(l,o)=>{l.scrollLeft=o}});function lt(l){const o=T.value,{get:d,set:_}=tt.value;let S=!1,p=d(o);const v=l<p?-1:1;return p+=v*5,p<0?(S=!0,p=0):(v===-1&&p<=l||v===1&&p>=l)&&(S=!0,p=l),_(o,p),Z(),S}function Ue(l,o){for(const d in l)if(l[d]!==o[d])return!1;return!0}function at(){let l=null,o={matchedLen:0,queryDiff:9999,hrefLen:0};const d=f.filter(v=>v.routeData!==void 0&&v.routeData.hasRouterLink.value===!0),{hash:_,query:S}=a.$route,p=Object.keys(S).length;for(const v of d){const z=v.routeData.exact.value===!0;if(v.routeData[z===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:F,query:pe,matched:rt,href:ut}=v.routeData.resolvedLink.value,he=Object.keys(pe).length;if(z===!0){if(F!==_||he!==p||Ue(S,pe)===!1)continue;l=v.name.value;break}if(F!==""&&F!==_||he!==0&&Ue(pe,S)===!1)continue;const O={matchedLen:rt.length,queryDiff:p-he,hrefLen:ut.length-F.length};if(O.matchedLen>o.matchedLen){l=v.name.value,o=O;continue}else if(O.matchedLen!==o.matchedLen)continue;if(O.queryDiff<o.queryDiff)l=v.name.value,o=O;else if(O.queryDiff!==o.queryDiff)continue;O.hrefLen>o.hrefLen&&(l=v.name.value,o=O)}l===null&&f.some(v=>v.routeData===void 0&&v.name.value===M.value)===!0||be({name:l,setCurrent:!0})}function nt(l){if(c(),Q.value!==!0&&C.value!==null&&l.target&&typeof l.target.closest=="function"){const o=l.target.closest(".q-tab");o&&C.value.contains(o)===!0&&(Q.value=!0,j.value===!0&&Y(o))}}function ot(){u(()=>{Q.value=!1},30)}function me(){Me.avoidRouteWatcher===!1?s(at):r()}function Ae(){if(N===void 0){const l=oe(()=>a.$route.fullPath,me);N=()=>{l(),N=void 0}}}function st(l){f.push(l),P.value++,fe(),l.routeData===void 0||a.$route===void 0?s(()=>{if(j.value===!0){const o=M.value,d=o!=null&&o!==""?f.find(_=>_.name.value===o):null;d&&Y(d.rootRef.value)}}):(Ae(),l.routeData.hasRouterLink.value===!0&&me())}function it(l){f.splice(f.indexOf(l),1),P.value--,fe(),N!==void 0&&l.routeData!==void 0&&(f.every(o=>o.routeData===void 0)===!0&&N(),me())}const Me={currentModel:M,tabProps:G,hasFocus:Q,hasActiveTab:Ge,registerTab:st,unregisterTab:it,verifyRouteModel:me,updateModel:be,onKbdNavigate:et,avoidRouteWatcher:!1};_t(Ke,Me);function Ne(){I!==null&&clearTimeout(I),K(),N!==void 0&&N()}let De;return je(Ne),wt(()=>{De=N!==void 0,Ne()}),yt(()=>{De===!0&&Ae(),fe()}),()=>V("div",{ref:C,class:Je.value,role:"tablist",onFocusin:nt,onFocusout:ot},[V(Tt,{onResize:Pe}),V("div",{ref:T,class:Ye.value,onScroll:Z},kt(b.default)),V(re,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(ne.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||i.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:Qe,onTouchstartPassive:Qe,onMouseupPassive:K,onMouseleavePassive:K,onTouchendPassive:K}),V(re,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(J.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||i.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Be,onTouchstartPassive:Be,onMouseupPassive:K,onMouseleavePassive:K,onTouchendPassive:K})])}});const Ht={class:"text-h6 font-weight-bold"},Gt={class:"row no-wrap",style:{gap:"20px"}},Xt={class:"row q-mt-lg no-wrap",style:{gap:"20px"}},Jt=Te({__name:"EditContactsDialog",setup(e){const{t:b}=Ie();ze();const h=Ve(),a=$({address_uz:"",work_uz:"",address_ru:"",work_ru:"",address_en:"",work_en:"",phone:"",email:""}),i=$("uz");function w(){h.closeModal(),le.create({message:b("notification.siteSettings.siteInfo.updated"),color:"positive",position:"top-right",group:!1})}return(g,m)=>(U(),W(He,{modelValue:k(h).modal.settings.contacts,"onUpdate:modelValue":m[9]||(m[9]=u=>k(h).modal.settings.contacts=u),persistent:""},{default:n(()=>[t(Le,{style:{"min-width":"700px","border-radius":"16px"},class:"q-pa-md"},{default:n(()=>[t(B,{class:"row items-center"},{default:n(()=>[x("div",Ht,y(g.$t("siteSettings.modal.title")),1),t(ae),te(t(E,{icon:"close","text-color":"primary",flat:"",class:"bg-grey-3",style:{width:"32px",height:"32px","border-radius":"8px"},size:"13px",onClick:k(h).closeModal},null,8,["onClick"]),[[ie]])]),_:1}),t(B,{class:"q-pt-none column text-primary"},{default:n(()=>[t(Ot,{modelValue:i.value,"onUpdate:modelValue":m[0]||(m[0]=u=>i.value=u)},{default:n(()=>[t(Se,{name:"uz","no-caps":"",label:g.$t("siteSettings.modal.contacts.lang.uz")},null,8,["label"]),t(Se,{name:"ru","no-caps":"",label:g.$t("siteSettings.modal.contacts.lang.ru")},null,8,["label"]),t(Se,{name:"en","no-caps":"",label:g.$t("siteSettings.modal.contacts.lang.en")},null,8,["label"])]),_:1},8,["modelValue"])]),_:1}),t(St,{name:"slide-fade",mode:"out-in"},{default:n(()=>[i.value==="uz"?(U(),W(B,{key:0,class:"q-pt-none column"},{default:n(()=>[t(X,{rules:[u=>!!u||g.$t("validation.required")],text:a.value.address_uz,"onUpdate:text":m[1]||(m[1]=u=>a.value.address_uz=u),name:"address_uz",type:"text",label:g.$t("siteSettings.modal.contacts.address")},null,8,["rules","text","label"]),t(X,{rules:[u=>!!u||g.$t("validation.required")],text:a.value.work_uz,"onUpdate:text":m[2]||(m[2]=u=>a.value.work_uz=u),name:"work_uz",type:"text",label:g.$t("siteSettings.modal.contacts.schedule")},null,8,["rules","text","label"])]),_:1})):i.value==="ru"?(U(),W(B,{key:1,class:"q-pt-none column"},{default:n(()=>[t(X,{rules:[u=>!!u||g.$t("validation.required")],text:a.value.address_ru,"onUpdate:text":m[3]||(m[3]=u=>a.value.address_ru=u),name:"address_ru",type:"text",label:g.$t("siteSettings.modal.contacts.address")},null,8,["rules","text","label"]),t(X,{rules:[u=>!!u||g.$t("validation.required")],text:a.value.work_ru,"onUpdate:text":m[4]||(m[4]=u=>a.value.work_ru=u),name:"work_ru",type:"text",label:g.$t("siteSettings.modal.contacts.schedule")},null,8,["rules","text","label"])]),_:1})):(U(),W(B,{key:2,class:"q-pt-none column"},{default:n(()=>[t(X,{rules:[u=>!!u||g.$t("validation.required")],text:a.value.address_en,"onUpdate:text":m[5]||(m[5]=u=>a.value.address_en=u),name:"address_en",type:"text",label:g.$t("siteSettings.modal.contacts.address")},null,8,["rules","text","label"]),t(X,{rules:[u=>!!u||g.$t("validation.required")],text:a.value.work_en,"onUpdate:text":m[6]||(m[6]=u=>a.value.work_en=u),name:"work_en",type:"text",label:g.$t("siteSettings.modal.contacts.schedule")},null,8,["rules","text","label"])]),_:1}))]),_:1}),t(ve,{class:"q-mb-lg q-mt-xs"}),t(B,{class:"q-pt-none column"},{default:n(()=>[x("div",Gt,[t(Rt,{rules:[u=>!!u||g.$t("validation.required")],text:a.value.phone,"onUpdate:text":m[7]||(m[7]=u=>a.value.phone=u),class:"fullwdith"},null,8,["rules","text"]),t(X,{text:a.value.email,"onUpdate:text":m[8]||(m[8]=u=>a.value.email=u),name:"email",type:"text",label:"E-mail"},null,8,["text"])]),x("div",Xt,[t(ae),te(t(E,{onClick:k(h).closeModal,color:"indigo-10",flat:"",label:g.$t("btn.cancel"),style:{"border-radius":"12px"},class:"q-py-sm full-width bg-grey-2 q-px-xl q-mr-md","no-caps":""},null,8,["onClick","label"]),[[ie]]),t(E,{onClick:w,color:"white",flat:"",label:g.$t("btn.save"),style:{"border-radius":"12px"},class:"q-py-sm full-width q-px-xl bg-indigo-10","no-caps":""},null,8,["label"])])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}});const Yt={class:"text-h5 text-weight-bold"},Zt={class:"column"},el={class:"text-h6"},tl={class:"column items-center justify-center",style:{"margin-top":"8px"}},ll={class:"text-h6"},al={class:"row items-center"},nl={class:"text-h6"},ol={class:"column"},sl={class:"row items-center"},il={class:"text-h6"},rl={class:"column"},Cl=Te({__name:"SettingsPage",setup(e){const{t:b}=Ie(),h=Ve(),a=ze(),i=$({ru:!0,uz:!1,en:!1});function w([c,s],r){u(),i.value[c]=!1,i.value[s]=!1}function g(c){c==="contacts"?h.modal.settings.contacts=!0:c==="socials"&&(h.modal.settings.socials=!0)}function m(c,s){le.create({message:b("notification.siteSettings.siteLang.updated"),color:"positive",position:"top-right",group:!1})}function u(c){le.create({message:b("notification.siteSettings.defaultLang.updated"),color:"positive",position:"top-right",group:!1})}return(c,s)=>(U(),W(Lt,null,{default:n(()=>[t(Ct,{class:"q-pa-md main__container"},{default:n(()=>[x("h1",Yt,y(c.$t("siteSettings.title")),1),t(Nt),t(Jt),t(Le,{flat:"",style:{"border-radius":"12px"}},{default:n(()=>[t(B,null,{default:n(()=>[t(B,{class:"row"},{default:n(()=>[x("div",Zt,[x("h2",el,y(c.$t("siteSettings.subTitles.siteLangs")),1),t(se,null,{default:n(()=>[t(D,{tag:"label"},{default:n(()=>[t(ee,{style:{"margin-right":"200px"}},{default:n(()=>[t(R,null,{default:n(()=>[L(y(c.$t("siteSettings.langs.ru")),1)]),_:1})]),_:1}),t(ee,{avatar:""},{default:n(()=>[t(_e,{modelValue:k(a).langStatus.lang_ru,"onUpdate:modelValue":s[0]||(s[0]=r=>k(a).langStatus.lang_ru=r),onClick:s[1]||(s[1]=r=>m("ru",k(a).langStatus.lang_ru))},null,8,["modelValue"])]),_:1})]),_:1}),t(D,{tag:"label"},{default:n(()=>[t(ee,{style:{"margin-right":"200px"}},{default:n(()=>[t(R,null,{default:n(()=>[L(y(c.$t("siteSettings.langs.uz")),1)]),_:1})]),_:1}),t(ee,{avatar:""},{default:n(()=>[t(_e,{modelValue:k(a).langStatus.lang_uz,"onUpdate:modelValue":s[2]||(s[2]=r=>k(a).langStatus.lang_uz=r),onClick:s[3]||(s[3]=r=>m("uz",k(a).langStatus.lang_uz))},null,8,["modelValue"])]),_:1})]),_:1}),t(D,{tag:"label"},{default:n(()=>[t(ee,{style:{"margin-right":"200px"}},{default:n(()=>[t(R,null,{default:n(()=>[L(y(c.$t("siteSettings.langs.en")),1)]),_:1})]),_:1}),t(ee,{avatar:""},{default:n(()=>[t(_e,{modelValue:k(a).langStatus.lang_en,"onUpdate:modelValue":s[4]||(s[4]=r=>k(a).langStatus.lang_en=r),onClick:s[5]||(s[5]=r=>m("en",k(a).langStatus.lang_en))},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),x("div",tl,[x("h2",ll,y(c.$t("siteSettings.subTitles.defaultLang")),1),t(ye,{modelValue:i.value.ru,"onUpdate:modelValue":s[6]||(s[6]=r=>i.value.ru=r),style:{"margin-bottom":"16px"},onClick:s[7]||(s[7]=r=>w(["uz","en"],"ru"))},null,8,["modelValue"]),t(ye,{modelValue:i.value.uz,"onUpdate:modelValue":s[8]||(s[8]=r=>i.value.uz=r),style:{"margin-bottom":"16px"},onClick:s[9]||(s[9]=r=>w(["ru","en"],"uz"))},null,8,["modelValue"]),t(ye,{modelValue:i.value.en,"onUpdate:modelValue":s[10]||(s[10]=r=>i.value.en=r),style:{"margin-bottom":"16px"},onClick:s[11]||(s[11]=r=>w(["ru","uz"],"en"))},null,8,["modelValue"])])]),_:1}),t(ve),t(B,{class:"column"},{default:n(()=>[x("div",al,[x("h2",nl,y(c.$t("siteSettings.subTitles.contactInfo")),1),t(ae),t(E,{icon:"edit",flat:"",color:"primary",dense:"",style:{height:"35px"},onClick:s[12]||(s[12]=r=>g("contacts"))})]),x("div",ol,[t(se,{class:"row"},{default:n(()=>[t(D,{style:{width:"350px"},class:"column q-mb-md"},{default:n(()=>[t(R,{style:{"font-size":"16px"},class:"q-mb-sm text-primary text-bold"},{default:n(()=>[L(y(c.$t("siteSettings.address")),1)]),_:1}),t(R,{caption:"",style:{"font-size":"14px"}},{default:n(()=>[L(y(k(a).contacts.address),1)]),_:1})]),_:1}),t(D,{style:{width:"350px"},class:"column q-mb-md"},{default:n(()=>[t(R,{style:{"font-size":"16px"},class:"q-mb-sm text-primary text-bold"},{default:n(()=>[L("E-mail")]),_:1}),t(R,{caption:"",style:{"font-size":"14px"}},{default:n(()=>[L(y(k(a).contacts.email),1)]),_:1})]),_:1})]),_:1}),t(se,{class:"row"},{default:n(()=>[t(D,{style:{width:"350px"},class:"column q-mb-md"},{default:n(()=>[t(R,{style:{"font-size":"16px"},class:"q-mb-sm text-primary text-bold"},{default:n(()=>[L(y(c.$t("siteSettings.phone")),1)]),_:1}),t(R,{caption:"",style:{"font-size":"14px"}},{default:n(()=>[L(y(k(a).contacts.phone),1)]),_:1})]),_:1}),t(D,{style:{width:"350px"},class:"column q-mb-md"},{default:n(()=>[t(R,{style:{"font-size":"16px"},class:"q-mb-sm text-primary text-bold"},{default:n(()=>[L(y(c.$t("siteSettings.schedule")),1)]),_:1}),t(R,{caption:"",style:{"font-size":"14px"}},{default:n(()=>[L(y(k(a).contacts.schedule),1)]),_:1})]),_:1})]),_:1})])]),_:1}),t(ve),t(B,{class:"column"},{default:n(()=>[x("div",sl,[x("h2",il,y(c.$t("siteSettings.subTitles.socials")),1),t(ae),t(E,{icon:"edit",flat:"",color:"primary",dense:"",style:{height:"35px"},onClick:s[13]||(s[13]=r=>g("socials"))})]),x("div",rl,[t(se,{class:"socials-list"},{default:n(()=>[(U(!0),xe(qe,null,$e(k(a).socialNetworks,r=>(U(),W(D,{style:{width:"350px"},class:"column q-mb-md",key:r.id},{default:n(()=>[t(R,{style:{"font-size":"16px"},class:"q-mb-sm text-primary text-bold"},{default:n(()=>[L(y(r.name),1)]),_:2},1024),t(R,{caption:"",style:{"font-size":"14px"}},{default:n(()=>[L(y(r.link),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});export{Cl as default};