webpackJsonp([1],{142:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.htmlToComponent=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=n(0),o=r(l),u=n(17),c=n(143),i=r(c);t.htmlToComponent=function(e){return(0,i.default)(e,{transform:{a:function(e){return o.default.createElement(u.Link,a({},e,{to:e.href},e.href.match(/^https?:\/\//)?{rel:"noopener",target:"_blank"}:{}))},h1:function(e){return o.default.createElement("h1",a({},e,{id:(""+e.children).replace(/\s+/,"-")}))},h2:function(e){return o.default.createElement("h2",a({},e,{id:(""+e.children).replace(/\s+/,"-")}))},h3:function(e){return o.default.createElement("h3",a({},e,{id:(""+e.children).replace(/\s+/,"-")}))}}})}},143:function(e,t,n){!function(t,r){e.exports=r(n(0))}(0,function(e){"use strict";function t(e){return e.replace(/(-|:)(.)/g,function(e,t,n){return n.toUpperCase()})}function n(e){var n={};return e.split(";").filter(function(e){return""!==e.trim()}).forEach(function(e){var r,a=e.split(":");if(a.length>1){var l=function(e){return/^-ms-/.test(e)&&(e=e.substr(1)),t(e)}(a[0].trim()),o=(r=a.slice(1).join(":").trim(),/^\d+$/.test(r)?Number(r):r.replace(/'/g,'"'));n[l]=o}}),n}function r(c,i,s){var f,d=s.transform._;if(c.nodeType===l.COMMENT)return null;if(c.nodeType===l.TEXT){var m=(f=c.textContent,u.innerHTML=f,u.textContent);return d?d(m):m}for(var p=c.tagName.toLowerCase(),h=s.transform[p],g={},v=0;v<c.attributes.length;v++){var y=c.attributes[v].name,E=c.attributes[v].value;g[y]=E}g.key=i.toString();for(var T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments[1];return Object.keys(e).reduce(function(l,o){if(/^on.*/.test(o))return l;var u=o;/^(data|aria)-/.test(o)||0===r.filter(function(e){return e instanceof RegExp?e.test(o):e===o}).length&&(u=t(o));var c=a[u]||u;return l[c]="style"===c?n(e.style):e[o],l},{})}(g,s.preserveAttributes),b=[],C=0;C<c.childNodes.length;C++){var M=c.childNodes[C],k=i+"."+C;if(!(o.indexOf(p)>-1&&M.nodeType===l.TEXT&&(M.textContent=M.textContent.trim(),""===M.textContent))){var w=r(M,k,s);null!==w&&b.push(w)}}return"style"!==p||h||d?(0===b.length&&(b=null),h?e.createElement(h,T,b):d?d(p,T,b):e.createElement(p,T,b)):(T.dangerouslySetInnerHTML={__html:b[0]},e.createElement(p,T,null))}e=e&&e.hasOwnProperty("default")?e.default:e;var a={for:"htmlFor",class:"className",acceptcharset:"acceptCharset",accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",classid:"classID",classname:"className",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",datetime:"dateTime",enctype:"encType",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},l={ELEMENT:1,TEXT:3,COMMENT:8},o=["table","tbody","thead","tfoot","tr"],u=document.createElement("div");return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"!=typeof e)throw new TypeError("Expected HTML string");var n={transform:t.transform||{},preserveAttributes:t.preserveAttributes||[]},a=document.createElement("div");a.innerHTML=e.trim();for(var l=[],o=0;o<a.childNodes.length;o++)l.push(a.childNodes[o]);var u=l.map(function(e,t){return r(e,t,n)}).filter(function(e){return null!==e});return 1===u.length?u[0]:u}})},50:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(r),l=n(17),o=n(142);t.default=(0,l.withRouteData)(function(e){var t=e.apiList,n=e.overview,r=e.changelog;return a.default.createElement("div",null,(0,o.htmlToComponent)(n.contents),a.default.createElement("h2",null,"提供機能一覧"),a.default.createElement("table",null,a.default.createElement("thead",null,a.default.createElement("tr",null,a.default.createElement("th",null,"API"),a.default.createElement("th",null,"概要"))),a.default.createElement("tbody",null,t.map(function(e){return a.default.createElement("tr",{key:e.slug},a.default.createElement("th",null,a.default.createElement(l.Link,{key:e.slug,to:"/"+e.slug},e.title)),a.default.createElement("td",null,(0,o.htmlToComponent)(e.description)))}))),a.default.createElement("h2",null,"更新履歴"),(0,o.htmlToComponent)(r.contents))})}});
//# sourceMappingURL=Home.eff3aff8.js.map