(this["webpackJsonpindian-banks-ui-v2"]=this["webpackJsonpindian-banks-ui-v2"]||[]).push([[0],{50:function(e,n,t){"use strict";t.r(n);var a,r,c,s,i=t(0),o=t.n(i),l=t(9),d=t.n(l),b=t(12),u=t.n(b),j=t(21),p=t(5),x=t(4),f=t(25),O=t(3),h=t(1),g=Object(O.default)(f.a)(a||(a=Object(x.a)(["\n  margin: 10px 0 20px 40px;\n  width: 250px;\n  float : left\n"]))),v=function(e){return Object(h.jsx)(g,{classNamePrefix:"Select",defaultValue:e.selectedOption,onChange:e.setSelectedOption,options:e.options})},m=t(24),k=(t(48),Object(O.createGlobalStyle)(r||(r=Object(x.a)(["\n","\nbody {\n  background: hsl(0, 0%, 98%);\n  font-family: 'Nunito Sans', sans-serif;\n  font-weight: 300;\n  color: hsl(200, 15%, 8%);\n  transition: all .1s ease-out;\n}\nhtml {\n  box-sizing: border-box;\n}\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n"])),m.normalize)),y=O.default.header(c||(c=Object(x.a)(["\n  transition: all 0.1s ease-out;\n  background: hsl(0, 0%, 100%);\n  padding: 40px 40px;\n  display: flex;\n  justify-content: space-between;\n  box-shadow: 0 5px 10px hsla(207, 26%, 17%, 0.1);\n  margin-bottom: 20px;\n"]))),w=O.default.h1(s||(s=Object(x.a)(["\n  margin: 0;\n  font-size: 40px;\n  font-weight: 800;\n"])));function S(){return Object(h.jsx)(y,{children:Object(h.jsx)(w,{children:"Find your Bank"})})}var F,P,C,G,H=t(2),z=t(26),I=t(6),N=t(7),B=O.default.input(F||(F=Object(x.a)(["\n  appearance: none;\n  background: transparent;\n  border: 5px;\n  color: inherit;\n  flex-grow: 1;\n  margin-left: 10px;\n\n  &::placeholder {\n    color: hsl(200, 15%, 8%);\n  }\n\n  &:focus {\n    outline: none;\n  }\n"]))),E=O.default.div(P||(P=Object(x.a)(["\n  display: flex;\n  margin: 10px 20px;\n  border-radius: 5px;\n  background: hsl(0, 0%, 100%);\n  padding: 10px;\n  align-items: center;\n  max-width: 800px;\n  min-width: 600px;\n  flex-grow: 1;\n  float: left;\n  border: 0.5px solid;\n  border-color: rgba(50, 115, 220, 0.3);\n  height: 39px\n"])));function R(e){return Object(h.jsxs)(E,{children:[Object(h.jsx)(N.d,{}),Object(h.jsx)(B,Object(H.a)({type:"search"},e))]})}function J(e){e.preGlobalFilteredRows,e.globalFilter;var n=e.setGlobalFilter,t=e.selectedOption,a=o.a.useState(""),r=Object(p.a)(a,2),c=r[0],s=r[1];o.a.useEffect((function(){s("")}),[t]);var i=Object(I.useAsyncDebounce)((function(e){n(e||void 0)}),200);return Object(h.jsx)(R,{value:c||"",onChange:function(e){s(e.target.value),i(e.target.value)},placeholder:"Enter a Keyword"})}var A=O.default.div(C||(C=Object(x.a)(["\n  padding: 1rem;\n  text-align: center;\n  margin: 5px 40px;\n\n  table {\n    border-spacing: 0;\n    border: 1px solid black;\n    margin: 70px\n    tr {\n      :last-child {\n        td {\n          border-bottom: 0;\n        }\n      }\n    }\n\n    th,\n    td {\n      margin: 0;\n      padding: 0.5rem;\n      border-bottom: 1px solid black;\n      border-right: 1px solid black;\n      :last-child {\n        border-right: 0;\n      }\n    }\n  }\n\n"]))),D=O.default.span(G||(G=Object(x.a)(["\n    display: inline-block;\n    margin: 10px;\n    padding: 6px;\n"])));var M=function(e){var n=e.columns,t=e.data,a=e.selectedOption,r=Object(I.useTable)({columns:n,data:t,initialState:{pageIndex:0}},I.useFilters,I.useGlobalFilter,I.usePagination),c=r.getTableProps,s=r.getTableBodyProps,i=r.headerGroups,l=r.prepareRow,d=r.page,b=r.canPreviousPage,u=r.canNextPage,j=r.pageOptions,x=r.gotoPage,f=r.nextPage,O=r.previousPage,g=r.setPageSize,v=r.state,m=r.preGlobalFilteredRows,k=r.setGlobalFilter,y=o.a.useState([]),w=Object(p.a)(y,2),S=w[0],F=w[1];return o.a.useEffect((function(){var e=localStorage.getItem("favorites")||null;e=JSON.parse(e),F(e||[])}),[]),o.a.useEffect((function(){localStorage.setItem("favorites",JSON.stringify(S))}),[S]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(J,{preGlobalFilteredRows:m,globalFilter:v.globalFilter,setGlobalFilter:k,selectedOption:a}),Object(h.jsxs)(D,{children:[Object(h.jsxs)("span",{style:{padding:"10px"},children:[Object(h.jsx)("span",{style:{padding:"10px"},children:Object(h.jsx)(N.b,{onClick:function(){return O()},disabled:!b})}),Object(h.jsxs)("span",{children:["   ",Object(h.jsxs)("strong",{children:[v.pageIndex+1," of ",j.length]}),"   "]}),Object(h.jsx)("span",{style:{padding:"5px"},children:Object(h.jsx)(N.c,{onClick:function(){return f()},disabled:!u})})]}),Object(h.jsxs)("span",{children:["Go to page:"," ",Object(h.jsx)("input",{onChange:function(e){var n=e.target.value?Number(e.target.value)-1:0;x(n)},style:{width:"50px"}})]})," ",Object(h.jsx)("select",{value:v.pageSize,onChange:function(e){g(Number(e.target.value))},children:[10,20,30,40,50,100].map((function(e){return Object(h.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]}),Object(h.jsxs)(A,{children:[Object(h.jsxs)("table",Object(H.a)(Object(H.a)({},c()),{},{children:[Object(h.jsx)("thead",{children:i.map((function(e){return Object(h.jsx)("tr",Object(H.a)(Object(H.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(h.jsx)("th",Object(H.a)(Object(H.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(h.jsx)("tbody",Object(H.a)(Object(H.a)({},s()),{},{children:d.map((function(e,n){l(e);var t=e.original.ifsc;return Object(h.jsxs)("tr",Object(H.a)(Object(H.a)({},e.getRowProps()),{},{children:[Object(h.jsx)("td",{children:S.includes(t)?Object(h.jsx)(N.a,{onClick:function(){return function(e){F((function(n){return n.filter((function(n){return n!==e}))}))}(t)},style:{color:"yellow"},size:28}):Object(h.jsx)(N.e,{onClick:function(){return function(e){F((function(n){return[].concat(Object(z.a)(n),[e])}))}(t)},style:{color:"yellow"},size:28})}),e.cells.filter((function(e){return void 0!==e.value})).map((function(e){return Object(h.jsx)("td",Object(H.a)(Object(H.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))]}))}))}))]})),Object(h.jsx)("br",{})]})]})};var T=function(){var e=o.a.useMemo((function(){return[{Header:"Favourite",accessor:"fav"},{Header:"IFSC Code",accessor:"ifsc"},{Header:"Bank_Id",accessor:"bank_id"},{Header:"Branch",accessor:"branch"},{Header:"Address",accessor:"address"},{Header:"City",accessor:"city"},{Header:"District",accessor:"district"},{Header:"State",accessor:"state"}]}),[]),n=[{value:"bangalore",label:"Bangalore"},{value:"mumbai",label:"Mumbai"},{value:"delhi",label:"Delhi"},{value:"ahmedabad",label:"Ahmedabad"},{value:"kolkata",label:"Kolkata"}],t=o.a.useState(n[0]),a=Object(p.a)(t,2),r=a[0],c=a[1],s=o.a.useState([]),i=Object(p.a)(s,2),l=i[0],d=i[1];return o.a.useEffect((function(){var e="/api/branches/city?q="+r.value;(function(){var n=Object(j.a)(u.a.mark((function n(){var t,a,r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!("caches"in window)){n.next=18;break}return n.next=4,caches.open("bank-cache");case 4:return t=n.sent,n.next=7,t.match(e);case 7:if(a=n.sent){n.next=14;break}return n.next=11,t.add(e);case 11:return n.next=13,t.match(e);case 13:a=n.sent;case 14:return n.next=16,a.json();case 16:r=n.sent,d(r);case 18:n.next=23;break;case 20:n.prev=20,n.t0=n.catch(0),console.log(n.t0);case 23:case"end":return n.stop()}}),n,null,[[0,20]])})));return function(){return n.apply(this,arguments)}})()()}),[r]),Object(h.jsxs)("div",{children:[Object(h.jsx)(k,{}),Object(h.jsx)(S,{}),Object(h.jsx)(v,{options:n,selectedOption:r,setSelectedOption:c}),Object(h.jsx)(M,{columns:e,data:l,selectedOption:r})]})},K=document.getElementById("root");d.a.render(Object(h.jsx)(i.StrictMode,{children:Object(h.jsx)(T,{})}),K)}},[[50,1,2]]]);
//# sourceMappingURL=main.f94e6e56.chunk.js.map