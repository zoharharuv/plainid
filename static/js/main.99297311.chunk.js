(this["webpackJsonpplainid-demo"]=this["webpackJsonpplainid-demo"]||[]).push([[0],{15:function(e){e.exports=JSON.parse('{"resources":[{"id":"1","name":"Item 1","description":"This is Item 1 description","resourceType":"x resource type 1","path":"servers/security/resources/item_1","actionIds":["1","2","3","4","5"]},{"id":"2","name":"Item 2","description":"This is Item 2 description","resourceType":"x resource type 1","path":"servers/security/resources/item_2","actionIds":["6","7","8","9","10"]},{"id":"3","name":"Item 3","description":"This is Item 3 description","resourceType":"x resource type 1","path":"servers/security/resources/item_3","actionIds":["1","2","3","4","5"]},{"id":"4","name":"Item 4","description":"This is Item 4 description","resourceType":"x resource type 1","path":"servers/security/resources/item_4","actionIds":["6","7","8","9","10"]},{"id":"5","name":"Item 5","description":"This is Item 5 description","resourceType":"x resource type 1","path":"servers/security/resources/item_5","actionIds":["1","2","3","4","5"]}],"actions":[{"id":"1","name":"Action 1"},{"id":"2","name":"Action 2"},{"id":"3","name":"Action 3"},{"id":"4","name":"Action 4"},{"id":"5","name":"Action 5"},{"id":"6","name":"Action 6"},{"id":"7","name":"Action 7"},{"id":"8","name":"Action 8"},{"id":"9","name":"Action 9"},{"id":"10","name":"Action 10"}]}')},16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),s=c(7),a=c.n(s),i=c(2),o=c.n(i),u=c(3),l=c(4),d=c.p+"static/media/plainid-logo-white.4cd730df.png",p=c(0),j=Object(r.memo)((function(){return Object(p.jsxs)("header",{className:"app-header flex align-center",children:[Object(p.jsx)("img",{src:d,alt:"PlainId"}),Object(p.jsx)("h1",{children:"PlainID- Demo App"})]})})),m=c.p+"static/media/arrow-right.a3e03923.svg",f=c.p+"static/media/active.2ed6ace1.svg";function b(e){var t=e.resource,c=e.selectedResource,r=e.onSelectResource,n=t.id===(null===c||void 0===c?void 0:c.id);return Object(p.jsxs)("section",{className:"resource-preview flex align-center space-between ".concat(n?"active":""),onClick:function(){return r(t)},children:[Object(p.jsxs)("div",{className:"resource-title align-center flex",children:[Object(p.jsx)("img",{src:f,alt:"active"}),Object(p.jsx)("span",{children:t.name})]}),Object(p.jsx)("img",{src:m,alt:"arrow"})]})}var h=Object(r.memo)((function(e){var t=e.resources,c=e.selectedResource,r=e.onSelectResource;return Object(p.jsx)("section",{className:"resource-list flex column",children:t.length?t.map((function(e){return Object(p.jsx)(b,{resource:e,selectedResource:c,onSelectResource:r},e.id)})):Object(p.jsx)("h1",{children:"No resources found!"})})})),x=c.p+"static/media/search.d3887993.svg",O=Object(r.memo)((function(e){var t=e.filterBy,c=e.handleChange;return Object(p.jsx)("section",{className:"resource-search",children:Object(p.jsxs)("div",{className:"search-bar",children:[Object(p.jsx)("input",{onChange:c,value:t,type:"text",placeholder:"Search Resource",autoComplete:"off"}),Object(p.jsx)("img",{src:x,alt:"search"})]})})})),v=Object(r.memo)((function(e){var t=e.isMenuShown,c=e.toggleMenu,r=e.resources,n=e.selectedResource,s=e.filterBy,a=e.handleChange,i=e.onSelectResource;return Object(p.jsxs)("section",{className:"app-menu flex column ".concat(t?"open":""),children:[Object(p.jsxs)("div",{className:"app-menu-top flex column gap",children:[Object(p.jsx)("h1",{children:"My Resources"}),Object(p.jsx)(O,{filterBy:s,handleChange:a})]}),Object(p.jsx)(h,{resources:r,selectedResource:n,onSelectResource:i}),Object(p.jsx)("span",{className:"toggle-btn",onClick:c,children:Object(p.jsx)("img",{src:m,alt:"arrow"})})]})}));function g(e){var t=e.headerInfo;return Object(p.jsxs)("section",{className:"resource-header padding15",children:[Object(p.jsx)("h1",{children:t.name}),Object(p.jsx)("p",{children:t.description})]})}var y=c.p+"static/media/help-12.a3d4cef2.svg";function w(e){var t=e.resource;return Object(p.jsxs)("section",{className:"resource-details flex column card",children:[Object(p.jsxs)("div",{className:"card-title flex align-center",children:[Object(p.jsx)("span",{children:"General Details"}),Object(p.jsx)("img",{src:y,alt:"help"})]}),Object(p.jsx)("div",{className:"card-info flex column",children:Object.keys(t).map((function(e,c){if("id"!==e&&"actionIds"!==e)return Object(p.jsxs)(r.Fragment,{children:[Object(p.jsx)("span",{className:"details-info-label",children:"resourceType"===e?"resource type":e}),Object(p.jsx)("p",{className:"card-row",children:t[e]})]},c)}))})]})}var N=c(8),I=c(15);function R(){return(R=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",I);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k={query:function(){return R.apply(this,arguments)}};function S(){return S=Object(u.a)(o.a.mark((function e(){var t,c,r,n,s=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:null,e.next=3,k.query();case 3:if(c=e.sent,r=c.resources,t){e.next=7;break}return e.abrupt("return",r);case 7:return n=new RegExp(t,"i"),e.abrupt("return",r.filter((function(e){return n.test(e.name)})));case 9:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}var A={getResources:function(){return S.apply(this,arguments)}};function T(e){return C.apply(this,arguments)}function C(){return(C=Object(u.a)(o.a.mark((function e(t){var c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.query();case 2:return c=e.sent,r=c.actions,e.abrupt("return",t.map((function(e){return r.find((function(t){return t.id===e}))})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=new Map;function B(){return(B=Object(u.a)(o.a.mark((function e(){var t,c,r,n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(M.size){e.next=23;break}return e.next=3,A.getResources();case 3:t=e.sent,c=Object(N.a)(t),e.prev=5,c.s();case 7:if((r=c.n()).done){e.next=15;break}return n=r.value,e.next=11,T(n.actionIds);case 11:s=e.sent,M.set(n.id,s);case 13:e.next=7;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(5),c.e(e.t0);case 20:return e.prev=20,c.f(),e.finish(20);case 23:return e.abrupt("return",M);case 24:case"end":return e.stop()}}),e,null,[[5,17,20,23]])})))).apply(this,arguments)}var E={getResourceIdActionsMap:function(){return B.apply(this,arguments)},getActions:T};function _(e){var t=e.resource,c=Object(r.useState)([]),n=Object(l.a)(c,2),s=n[0],a=n[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(u.a)(o.a.mark((function e(){var c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getResourceIdActionsMap();case 2:c=e.sent,r=c.get(t.id),a(r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t.id]),Object(p.jsxs)("section",{className:"resource-actions flex column card",children:[Object(p.jsxs)("div",{className:"card-title flex align-center",children:[Object(p.jsx)("span",{children:"Permitted Actions"}),Object(p.jsx)("img",{src:y,alt:"help"})]}),Object(p.jsx)("div",{className:"card-info flex column",children:(null===s||void 0===s?void 0:s.length)&&(null===s||void 0===s?void 0:s.map((function(e){return Object(p.jsx)("p",{className:"card-row",children:e.name},e.id)})))})]})}var q=Object(r.memo)((function(e){var t=e.resource;return Object(p.jsx)("section",{className:"resource-info",children:Object(p.jsxs)("div",{className:"resource-container flex column",children:[Object(p.jsx)(g,{headerInfo:{name:t.name,description:t.description}}),Object(p.jsxs)("div",{className:"resource-inner-container flex",children:[Object(p.jsx)(w,{resource:t}),Object(p.jsx)(_,{resource:t})]})]})})}));var D={debounce:function(e,t,c){var r;return function(){var n=this,s=arguments,a=function(){r=null,c||e.apply(n,s)},i=c&&!r;clearTimeout(r),r=setTimeout(a,t),i&&e.apply(n,s)}}};function J(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(r.useState)(null),a=Object(l.a)(s,2),i=a[0],d=a[1],m=Object(r.useState)(""),f=Object(l.a)(m,2),b=f[0],h=f[1],x=Object(r.useState)(!1),O=Object(l.a)(x,2),g=O[0],y=O[1],w=function(){var e=Object(u.a)(o.a.mark((function e(){var t,c,r=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",e.next=3,A.getResources(t);case 3:return c=e.sent,n(c),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=Object(r.useCallback)(D.debounce(w,250),[]),I=Object(r.useCallback)((function(e){var t=e.target.value;h(t)}),[b]),R=function(e){d(e)},k=Object(r.useCallback)((function(){y((function(e){return!e}))}),[y]);return Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(o.a.mark((function e(){var t,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,c=Object(l.a)(t,1),r=c[0],R(r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),function(e,t){var c=Object(r.useRef)(!1);Object(r.useEffect)((function(){c.current?e():c.current=!0}),t)}((function(){N(b)}),[b]),Object(p.jsxs)("section",{className:"app flex column",children:[Object(p.jsx)(j,{}),Object(p.jsxs)("main",{className:"app-content flex grow",children:[Object(p.jsx)(v,{isMenuShown:g,toggleMenu:k,resources:c,selectedResource:i,filterBy:b,handleChange:I,onSelectResource:R}),i&&Object(p.jsx)(q,{resource:i})]})]})}c(16);a.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(J,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.99297311.chunk.js.map