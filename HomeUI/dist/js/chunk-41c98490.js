(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41c98490"],{"0239":function(t,e,r){"use strict";r("863a")},"06d9":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r("2f79"),a=Object(n["c"])({computed:{selectionStart:{cache:!1,get:function(){return this.$refs.input.selectionStart},set:function(t){this.$refs.input.selectionStart=t}},selectionEnd:{cache:!1,get:function(){return this.$refs.input.selectionEnd},set:function(t){this.$refs.input.selectionEnd=t}},selectionDirection:{cache:!1,get:function(){return this.$refs.input.selectionDirection},set:function(t){this.$refs.input.selectionDirection=t}}},methods:{select:function(){var t;(t=this.$refs.input).select.apply(t,arguments)},setSelectionRange:function(){var t;(t=this.$refs.input).setSelectionRange.apply(t,arguments)},setRangeText:function(){var t;(t=this.$refs.input).setRangeText.apply(t,arguments)}}})},"1f1e":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r("2f79"),a=Object(n["c"])({computed:{validity:{cache:!1,get:function(){return this.$refs.input.validity}},validationMessage:{cache:!1,get:function(){return this.$refs.input.validationMessage}},willValidate:{cache:!1,get:function(){return this.$refs.input.willValidate}}},methods:{setCustomValidity:function(){var t;return(t=this.$refs.input).setCustomValidity.apply(t,arguments)},checkValidity:function(){var t;return(t=this.$refs.input).checkValidity.apply(t,arguments)},reportValidity:function(){var t;return(t=this.$refs.input).reportValidity.apply(t,arguments)}}})},"205f":function(t,e,r){"use strict";r.d(e,"a",(function(){return z}));var n=r("2f79"),a=r("b42e"),c=r("c637"),o=r("a723"),i=r("9b76"),s=r("8690"),u=r("365c"),l=r("d82f"),b=r("cf75"),d=r("d580"),f=r("6197"),p=r("b885");function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){j(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function j(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var m=Object(b["d"])(Object(l["m"])(O(O({},Object(b["a"])(d["a"],b["f"].bind(null,"footer"))),{},{footer:Object(b["c"])(o["t"]),footerClass:Object(b["c"])(o["e"]),footerHtml:Object(b["c"])(o["t"])})),c["l"]),g=Object(n["c"])({name:c["l"],functional:!0,props:m,render:function(t,e){var r,n=e.props,c=e.data,o=e.children,i=n.footerBgVariant,u=n.footerBorderVariant,l=n.footerTextVariant;return t(n.footerTag,Object(a["a"])(c,{staticClass:"card-footer",class:[n.footerClass,(r={},j(r,"bg-".concat(i),i),j(r,"border-".concat(u),u),j(r,"text-".concat(l),l),r)],domProps:o?{}:Object(s["a"])(n.footerHtml,n.footer)}),o)}}),v=r("4918");function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(Object(r),!0).forEach((function(e){x(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function x(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var P=Object(b["d"])(Object(l["m"])(y(y({},Object(l["k"])(v["b"],["src","alt","width","height","left","right"])),{},{bottom:Object(b["c"])(o["g"],!1),end:Object(b["c"])(o["g"],!1),start:Object(b["c"])(o["g"],!1),top:Object(b["c"])(o["g"],!1)})),c["n"]),k=Object(n["c"])({name:c["n"],functional:!0,props:P,render:function(t,e){var r=e.props,n=e.data,c=r.src,o=r.alt,i=r.width,s=r.height,u="card-img";return r.top?u+="-top":r.right||r.end?u+="-right":r.bottom?u+="-bottom":(r.left||r.start)&&(u+="-left"),t("img",Object(a["a"])(n,{class:u,attrs:{src:c,alt:o,width:i,height:s}}))}});function C(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function T(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?C(Object(r),!0).forEach((function(e){D(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function D(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var V=Object(b["a"])(P,b["f"].bind(null,"img"));V.imgSrc.required=!1;var S=Object(b["d"])(Object(l["m"])(T(T(T(T(T(T({},f["b"]),p["b"]),m),V),d["a"]),{},{align:Object(b["c"])(o["t"]),noBody:Object(b["c"])(o["g"],!1)})),c["j"]),z=Object(n["c"])({name:c["j"],functional:!0,props:S,render:function(t,e){var r,n=e.props,c=e.data,o=e.slots,l=e.scopedSlots,d=n.imgSrc,h=n.imgLeft,O=n.imgRight,j=n.imgStart,v=n.imgEnd,w=n.imgBottom,y=n.header,x=n.headerHtml,P=n.footer,C=n.footerHtml,T=n.align,S=n.textVariant,z=n.bgVariant,R=n.borderVariant,$=l||{},_=o(),I={},B=t(),F=t();if(d){var E=t(k,{props:Object(b["e"])(V,n,b["h"].bind(null,"img"))});w?F=E:B=E}var M=t(),A=Object(u["a"])(i["p"],$,_);(A||y||x)&&(M=t(p["a"],{props:Object(b["e"])(p["b"],n),domProps:A?{}:Object(s["a"])(x,y)},Object(u["b"])(i["p"],I,$,_)));var H=Object(u["b"])(i["h"],I,$,_);n.noBody||(H=t(f["a"],{props:Object(b["e"])(f["b"],n)},H),n.overlay&&d&&(H=t("div",{staticClass:"position-relative"},[B,H,F]),B=t(),F=t()));var U=t(),L=Object(u["a"])(i["o"],$,_);return(L||P||C)&&(U=t(g,{props:Object(b["e"])(m,n),domProps:A?{}:Object(s["a"])(C,P)},Object(u["b"])(i["o"],I,$,_))),t(n.tag,Object(a["a"])(c,{staticClass:"card",class:(r={"flex-row":h||j,"flex-row-reverse":(O||v)&&!(h||j)},D(r,"text-".concat(T),T),D(r,"bg-".concat(z),z),D(r,"border-".concat(R),R),D(r,"text-".concat(S),S),r)}),[B,M,H,U,F])}})},"40fc":function(t,e,r){"use strict";r.d(e,"b",(function(){return y})),r.d(e,"a",(function(){return x}));var n=r("2f79"),a=r("0056"),c=r("a723"),o=r("906c"),i=r("6b77"),s=r("a8c8"),u=r("58f2"),l=r("3a58"),b=r("d82f"),d=r("cf75"),f=r("fa73");function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){O(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function O(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var j=Object(u["a"])("value",{type:c["o"],defaultValue:"",event:a["R"]}),m=j.mixin,g=j.props,v=j.prop,w=j.event,y=Object(d["d"])(Object(b["m"])(h(h({},g),{},{ariaInvalid:Object(d["c"])(c["j"],!1),autocomplete:Object(d["c"])(c["t"]),debounce:Object(d["c"])(c["o"],0),formatter:Object(d["c"])(c["k"]),lazy:Object(d["c"])(c["g"],!1),lazyFormatter:Object(d["c"])(c["g"],!1),number:Object(d["c"])(c["g"],!1),placeholder:Object(d["c"])(c["t"]),plaintext:Object(d["c"])(c["g"],!1),readonly:Object(d["c"])(c["g"],!1),trim:Object(d["c"])(c["g"],!1)})),"formTextControls"),x=Object(n["c"])({mixins:[m],props:y,data:function(){var t=this[v];return{localValue:Object(f["g"])(t),vModelValue:this.modifyValue(t)}},computed:{computedClass:function(){var t=this.plaintext,e=this.type,r="range"===e,n="color"===e;return[{"custom-range":r,"form-control-plaintext":t&&!r&&!n,"form-control":n||!t&&!r},this.sizeFormClass,this.stateClass]},computedDebounce:function(){return Object(s["c"])(Object(l["c"])(this.debounce,0),0)},hasFormatter:function(){return Object(d["b"])(this.formatter)}},watch:O({},v,(function(t){var e=Object(f["g"])(t),r=this.modifyValue(t);e===this.localValue&&r===this.vModelValue||(this.clearDebounce(),this.localValue=e,this.vModelValue=r)})),created:function(){this.$_inputDebounceTimer=null},beforeDestroy:function(){this.clearDebounce()},methods:{clearDebounce:function(){clearTimeout(this.$_inputDebounceTimer),this.$_inputDebounceTimer=null},formatValue:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t=Object(f["g"])(t),!this.hasFormatter||this.lazyFormatter&&!r||(t=this.formatter(t,e)),t},modifyValue:function(t){return t=Object(f["g"])(t),this.trim&&(t=t.trim()),this.number&&(t=Object(l["b"])(t,t)),t},updateValue:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.lazy;if(!n||r){this.clearDebounce();var a=function(){if(t=e.modifyValue(t),t!==e.vModelValue)e.vModelValue=t,e.$emit(w,t);else if(e.hasFormatter){var r=e.$refs.input;r&&t!==r.value&&(r.value=t)}},c=this.computedDebounce;c>0&&!n&&!r?this.$_inputDebounceTimer=setTimeout(a,c):a()}},onInput:function(t){if(!t.target.composing){var e=t.target.value,r=this.formatValue(e,t);!1===r||t.defaultPrevented?Object(i["f"])(t,{propagation:!1}):(this.localValue=r,this.updateValue(r),this.$emit(a["v"],r))}},onChange:function(t){var e=t.target.value,r=this.formatValue(e,t);!1===r||t.defaultPrevented?Object(i["f"])(t,{propagation:!1}):(this.localValue=r,this.updateValue(r,!0),this.$emit(a["d"],r))},onBlur:function(t){var e=t.target.value,r=this.formatValue(e,t,!0);!1!==r&&(this.localValue=Object(f["g"])(this.modifyValue(r)),this.updateValue(r,!0)),this.$emit(a["b"],t)},focus:function(){this.disabled||Object(o["d"])(this.$el)},blur:function(){this.disabled||Object(o["c"])(this.$el)}}})},4918:function(t,e,r){"use strict";r.d(e,"b",(function(){return O})),r.d(e,"a",(function(){return j}));var n=r("2f79"),a=r("b42e"),c=r("c637"),o=r("a723"),i=r("2326"),s=r("6c06"),u=r("7b1e"),l=r("3a58"),b=r("cf75"),d=r("fa73");function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',h=function(t,e,r){var n=encodeURIComponent(p.replace("%{w}",Object(d["g"])(t)).replace("%{h}",Object(d["g"])(e)).replace("%{f}",r));return"data:image/svg+xml;charset=UTF-8,".concat(n)},O=Object(b["d"])({alt:Object(b["c"])(o["t"]),blank:Object(b["c"])(o["g"],!1),blankColor:Object(b["c"])(o["t"],"transparent"),block:Object(b["c"])(o["g"],!1),center:Object(b["c"])(o["g"],!1),fluid:Object(b["c"])(o["g"],!1),fluidGrow:Object(b["c"])(o["g"],!1),height:Object(b["c"])(o["o"]),left:Object(b["c"])(o["g"],!1),right:Object(b["c"])(o["g"],!1),rounded:Object(b["c"])(o["j"],!1),sizes:Object(b["c"])(o["f"]),src:Object(b["c"])(o["t"]),srcset:Object(b["c"])(o["f"]),thumbnail:Object(b["c"])(o["g"],!1),width:Object(b["c"])(o["o"])},c["O"]),j=Object(n["c"])({name:c["O"],functional:!0,props:O,render:function(t,e){var r,n=e.props,c=e.data,o=n.alt,b=n.src,p=n.block,O=n.fluidGrow,j=n.rounded,m=Object(l["c"])(n.width)||null,g=Object(l["c"])(n.height)||null,v=null,w=Object(i["b"])(n.srcset).filter(s["a"]).join(","),y=Object(i["b"])(n.sizes).filter(s["a"]).join(",");return n.blank&&(!g&&m?g=m:!m&&g&&(m=g),m||g||(m=1,g=1),b=h(m,g,n.blankColor||"transparent"),w=null,y=null),n.left?v="float-left":n.right?v="float-right":n.center&&(v="mx-auto",p=!0),t("img",Object(a["a"])(c,{attrs:{src:b,alt:o,width:m?Object(d["g"])(m):null,height:g?Object(d["g"])(g):null,srcset:w||null,sizes:y||null},class:(r={"img-thumbnail":n.thumbnail,"img-fluid":n.fluid||O,"w-100":O,rounded:""===j||!0===j},f(r,"rounded-".concat(j),Object(u["m"])(j)&&""!==j),f(r,v,v),f(r,"d-block",p),r)}))}})},4968:function(t,e,r){"use strict";r.d(e,"b",(function(){return u})),r.d(e,"a",(function(){return l}));var n=r("2f79"),a=r("b42e"),c=r("c637"),o=r("a723"),i=r("cf75"),s=r("fa73"),u=Object(i["d"])({title:Object(i["c"])(o["t"]),titleTag:Object(i["c"])(o["t"],"h4")},c["q"]),l=Object(n["c"])({name:c["q"],functional:!0,props:u,render:function(t,e){var r=e.props,n=e.data,c=e.children;return t(r.titleTag,Object(a["a"])(n,{staticClass:"card-title"}),c||Object(s["g"])(r.title))}})},6197:function(t,e,r){"use strict";r.d(e,"b",(function(){return h})),r.d(e,"a",(function(){return O}));var n=r("2f79"),a=r("b42e"),c=r("c637"),o=r("a723"),i=r("d82f"),s=r("cf75"),u=r("d580"),l=r("4968"),b=r("ba06");function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var h=Object(s["d"])(Object(i["m"])(f(f(f(f({},l["b"]),b["b"]),Object(s["a"])(u["a"],s["f"].bind(null,"body"))),{},{bodyClass:Object(s["c"])(o["e"]),overlay:Object(s["c"])(o["g"],!1)})),c["k"]),O=Object(n["c"])({name:c["k"],functional:!0,props:h,render:function(t,e){var r,n=e.props,c=e.data,o=e.children,i=n.bodyBgVariant,u=n.bodyBorderVariant,d=n.bodyTextVariant,f=t();n.title&&(f=t(l["a"],{props:Object(s["e"])(l["b"],n)}));var h=t();return n.subTitle&&(h=t(b["a"],{props:Object(s["e"])(b["b"],n),class:["mb-2"]})),t(n.bodyTag,Object(a["a"])(c,{staticClass:"card-body",class:[(r={"card-img-overlay":n.overlay},p(r,"bg-".concat(i),i),p(r,"border-".concat(u),u),p(r,"text-".concat(d),d),r),n.bodyClass]}),[f,h,o])}})},"761b":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h6",{staticClass:"mb-1"},[t._v(" Click the 'Download File' button to download the log. This may take a few minutes depending on file size. ")]),r("h6",{staticClass:"mb-1"},[t._v(" Click the 'Show File' button to view the last 100 lines of the log file. ")]),r("b-row",t._l(t.logTypes,(function(e){return r("b-col",{key:e},[r("b-card",{attrs:{title:t.capitalizeWord(e)+" File"}},[r("div",[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{id:"start-download-"+e,variant:"outline-primary",size:"md",block:""}},[t._v(" Download File ")]),t.total[e]&&t.downloaded[e]?r("div",{staticClass:"d-flex",staticStyle:{width:"300px"}},[r("b-card-text",{staticClass:"mt-1 mb-0 mr-auto"},[t._v(" "+t._s((t.downloaded[e]/1e6).toFixed(2)+" / "+(t.total[e]/1e6).toFixed(2))+" MB - "+t._s((t.downloaded[e]/t.total[e]*100).toFixed(2)+"%")+" ")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon cancel-button",attrs:{variant:"danger",size:"sm"},on:{click:function(r){return t.cancelDownload(e)}}},[t._v(" x ")])],1):t._e(),r("b-popover",{ref:"popover",refInFor:!0,attrs:{target:"start-download-"+e,triggers:"click",show:t.downloadPopoverShow[e],placement:"auto",container:"my-container"},on:{"update:show":function(r){return t.$set(t.downloadPopoverShow,e,r)}},scopedSlots:t._u([{key:"title",fn:function(){return[r("div",{staticClass:"d-flex justify-content-between align-items-center"},[r("span",[t._v("Are You Sure?")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"close",attrs:{variant:"transparent","aria-label":"Close"},on:{click:function(r){return t.onDownloadClose(e)}}},[r("span",{staticClass:"d-inline-block text-white",attrs:{"aria-hidden":"true"}},[t._v("×")])])],1)]},proxy:!0}],null,!0)},[r("div",[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"danger"},on:{click:function(r){return t.onDownloadClose(e)}}},[t._v(" Cancel ")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"primary"},on:{click:function(r){return t.onDownloadOk(e)}}},[t._v(" Download "+t._s(t.capitalizeWord(e))+" ")])],1)]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1 mt-1",attrs:{id:"start-tail-"+e,variant:"outline-primary",size:"md",block:""}},[t._v(" Show File ")]),r("b-popover",{ref:"popover",refInFor:!0,attrs:{target:"start-tail-"+e,triggers:"click",show:t.tailPopoverShow[e],placement:"auto",container:"my-container"},on:{"update:show":function(r){return t.$set(t.tailPopoverShow,e,r)}},scopedSlots:t._u([{key:"title",fn:function(){return[r("div",{staticClass:"d-flex justify-content-between align-items-center"},[r("span",[t._v("Are You Sure?")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"close",attrs:{variant:"transparent","aria-label":"Close"},on:{click:function(r){return t.onTailClose(e)}}},[r("span",{staticClass:"d-inline-block text-white",attrs:{"aria-hidden":"true"}},[t._v("×")])])],1)]},proxy:!0}],null,!0)},[r("div",[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"danger"},on:{click:function(r){return t.onTailClose(e)}}},[t._v(" Cancel ")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"primary"},on:{click:function(r){return t.onTailOk(e)}}},[t._v(" Show "+t._s(t.capitalizeWord(e))+" ")])],1)])],1)])],1)})),1),t.callResponse.data.message?r("b-card",[r("b-form-textarea",{staticClass:"mt-1",attrs:{plaintext:"","no-resize":"",rows:"30",value:t.callResponse.data.message}})],1):t._e()],1)},a=[],c=r("c7eb"),o=r("1da1"),i=(r("a15b9"),r("4de4"),r("d3b7"),r("3ca3"),r("ddb0"),r("2b3d"),r("9861"),r("5494"),r("fb6a"),r("205f")),s=r("b28b"),u=r("a15b"),l=r("1947"),b=r("3828"),d=r("9c7d"),f=r("d6e4"),p=r("b307"),h=r("e009"),O=r("bc3a"),j=r.n(O),m=r("867f"),g={components:{BCard:i["a"],BCol:s["a"],BRow:u["a"],BButton:l["a"],BPopover:b["a"],BFormTextarea:d["a"],BCardText:f["a"],ToastificationContent:p["a"]},directives:{Ripple:h["a"]},data:function(){return{downloadPopoverShow:{},tailPopoverShow:{},abortToken:{},downloaded:{},total:{},callResponse:{status:"",data:{}},logTypes:["error","warn","info","debug"]}},computed:{fluxLogTail:function(){return this.callResponse.data.message?this.callResponse.data.message.split("\n").reverse().filter((function(t){return""!==t})).join("\n"):this.callResponse.data}},methods:{cancelDownload:function(t){this.abortToken[t].cancel("User download cancelled"),this.downloaded[t]="",this.total[t]=""},onDownloadClose:function(t){this.downloadPopoverShow[t]=!1},onDownloadOk:function(t){var e=this;return Object(o["a"])(Object(c["a"])().mark((function r(){var n,a,o,i,s,u,l,b;return Object(c["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e,n.abortToken[t]&&n.abortToken[t].cancel(),e.downloadPopoverShow[t]=!1,a=j.a.CancelToken,o=a.source(),e.abortToken[t]=o,i=localStorage.getItem("zelidauth"),s={headers:{zelidauth:i},responseType:"blob",onDownloadProgress:function(e){n.downloaded[t]=e.loaded,n.total[t]=e.total,n.$forceUpdate()},cancelToken:n.abortToken[t].token},r.next=10,m["a"].justAPI().get("/flux/".concat(t,"log"),s);case 10:u=r.sent,l=window.URL.createObjectURL(new Blob([u.data])),b=document.createElement("a"),b.href=l,b.setAttribute("download","".concat(t,".log")),document.body.appendChild(b),b.click();case 17:case"end":return r.stop()}}),r)})))()},onTailClose:function(t){this.tailPopoverShow[t]=!1},onTailOk:function(t){var e=this;return Object(o["a"])(Object(c["a"])().mark((function r(){var n;return Object(c["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:e.tailPopoverShow[t]=!1,n=localStorage.getItem("zelidauth"),m["a"].tailFluxLog(t,n).then((function(t){"error"===t.data.status?e.$toast({component:p["a"],props:{title:t.data.data.message||t.data.data,icon:"InfoIcon",variant:"danger"}}):(e.callResponse.status=t.data.status,e.callResponse.data=t.data.data)})).catch((function(r){e.$toast({component:p["a"],props:{title:"Error while trying to get latest ".concat(t," log"),icon:"InfoIcon",variant:"danger"}}),console.log(r)}));case 3:case"end":return r.stop()}}),r)})))()},capitalizeWord:function(t){return t[0].toUpperCase()+t.slice(1)}}},v=g,w=(r("0239"),r("2877")),y=Object(w["a"])(v,n,a,!1,null,null,null);e["default"]=y.exports},"863a":function(t,e,r){},"867f":function(t,e,r){"use strict";r("e9c4"),r("99af");var n=r("b4c0");e["a"]={softUpdateFlux:function(t){return Object(n["a"])().get("/flux/softupdateflux",{headers:{zelidauth:t}})},softUpdateInstallFlux:function(t){return Object(n["a"])().get("/flux/softupdatefluxinstall",{headers:{zelidauth:t}})},updateFlux:function(t){return Object(n["a"])().get("/flux/updateflux",{headers:{zelidauth:t}})},hardUpdateFlux:function(t){return Object(n["a"])().get("/flux/hardupdateflux",{headers:{zelidauth:t}})},rebuildHome:function(t){return Object(n["a"])().get("/flux/rebuildhome",{headers:{zelidauth:t}})},updateDaemon:function(t){return Object(n["a"])().get("/flux/updatedaemon",{headers:{zelidauth:t}})},reindexDaemon:function(t){return Object(n["a"])().get("/flux/reindexdaemon",{headers:{zelidauth:t}})},updateBenchmark:function(t){return Object(n["a"])().get("/flux/updatebenchmark",{headers:{zelidauth:t}})},getFluxVersion:function(){return Object(n["a"])().get("/flux/version")},broadcastMessage:function(t,e){var r=e,a={headers:{zelidauth:t}};return Object(n["a"])().post("/flux/broadcastmessage",JSON.stringify(r),a)},connectedPeers:function(){return Object(n["a"])().get("/flux/connectedpeers?timestamp=".concat((new Date).getTime()))},connectedPeersInfo:function(){return Object(n["a"])().get("/flux/connectedpeersinfo?timestamp=".concat((new Date).getTime()))},incomingConnections:function(){return Object(n["a"])().get("/flux/incomingconnections?timestamp=".concat((new Date).getTime()))},incomingConnectionsInfo:function(){return Object(n["a"])().get("/flux/incomingconnectionsinfo?timestamp=".concat((new Date).getTime()))},addPeer:function(t,e){return Object(n["a"])().get("/flux/addpeer/".concat(e),{headers:{zelidauth:t}})},removePeer:function(t,e){return Object(n["a"])().get("/flux/removepeer/".concat(e),{headers:{zelidauth:t}})},removeIncomingPeer:function(t,e){return Object(n["a"])().get("/flux/removeincomingpeer/".concat(e),{headers:{zelidauth:t}})},adjustCruxID:function(t,e){return Object(n["a"])().get("/flux/adjustcruxid/".concat(e),{headers:{zelidauth:t}})},adjustKadena:function(t,e,r){return Object(n["a"])().get("/flux/adjustkadena/".concat(e,"/").concat(r),{headers:{zelidauth:t}})},getCruxID:function(){return Object(n["a"])().get("/flux/cruxid")},getKadenaAccount:function(){return Object(n["a"])().get("/flux/kadena")},getZelid:function(){return Object(n["a"])().get("/flux/zelid")},getStaticIpInfo:function(){return Object(n["a"])().get("/flux/staticip")},tailFluxLog:function(t,e){return Object(n["a"])().get("/flux/tail".concat(t,"log"),{headers:{zelidauth:e}})},justAPI:function(){return Object(n["a"])()},cancelToken:function(){return n["b"]}}},"9c7d":function(t,e,r){"use strict";r.d(e,"a",(function(){return F}));var n=r("2f79"),a=r("c637"),c=r("a723"),o=r("906c"),i=r("7b1e"),s=r("a8c8"),u=r("3a58"),l=r("d82f"),b=r("cf75"),d=r("dde7"),f=r("06d9"),p=r("ad47"),h=r("d520"),O=r("40fc"),j=r("1f1e"),m=r("90ef"),g=r("602d"),v=r("bc9a"),w=r("992e"),y=r("3c21");function x(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function P(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function k(t,e,r){return e&&P(t.prototype,e),r&&P(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var C="__bv__visibility_observer",T=function(){function t(e,r){x(this,t),this.el=e,this.callback=r.callback,this.margin=r.margin||0,this.once=r.once||!1,this.observer=null,this.visible=void 0,this.doneOnce=!1,this.createObserver()}return k(t,[{key:"createObserver",value:function(){var t=this;if(this.observer&&this.stop(),!this.doneOnce&&Object(i["e"])(this.callback)){try{this.observer=new IntersectionObserver(this.handler.bind(this),{root:null,rootMargin:this.margin,threshold:0})}catch(e){return this.doneOnce=!0,this.observer=void 0,void this.callback(null)}Object(n["e"])((function(){Object(o["B"])((function(){t.observer&&t.observer.observe(t.el)}))}))}}},{key:"handler",value:function(t){var e=t?t[0]:{},r=Boolean(e.isIntersecting||e.intersectionRatio>0);r!==this.visible&&(this.visible=r,this.callback(r),this.once&&this.visible&&(this.doneOnce=!0,this.stop()))}},{key:"stop",value:function(){this.observer&&this.observer.disconnect(),this.observer=null}}]),t}(),D=function(t){var e=t[C];e&&e.stop&&e.stop(),delete t[C]},V=function(t,e){var r=e.value,n=e.modifiers,a={margin:"0px",once:!1,callback:r};Object(l["h"])(n).forEach((function(t){w["d"].test(t)?a.margin="".concat(t,"px"):"once"===t.toLowerCase()&&(a.once=!0)})),D(t),t[C]=new T(t,a),t[C]._prevModifiers=Object(l["b"])(n)},S=function(t,e,r){var n=e.value,a=e.oldValue,c=e.modifiers;c=Object(l["b"])(c),!t||n===a&&t[C]&&Object(y["a"])(c,t[C]._prevModifiers)||V(t,{value:n,modifiers:c},r)},z=function(t){D(t)},R={bind:V,componentUpdated:S,unbind:z};function $(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function _(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?$(Object(r),!0).forEach((function(e){I(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function I(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var B=Object(b["d"])(Object(l["m"])(_(_(_(_(_(_({},m["b"]),d["b"]),p["b"]),h["b"]),O["b"]),{},{maxRows:Object(b["c"])(c["o"]),noAutoShrink:Object(b["c"])(c["g"],!1),noResize:Object(b["c"])(c["g"],!1),rows:Object(b["c"])(c["o"],2),wrap:Object(b["c"])(c["t"],"soft")})),a["K"]),F=Object(n["c"])({name:a["K"],directives:{"b-visible":R},mixins:[v["a"],m["a"],g["a"],d["a"],p["a"],h["a"],O["a"],f["a"],j["a"]],props:B,data:function(){return{heightInPx:null}},computed:{type:function(){return null},computedStyle:function(){var t={resize:!this.computedRows||this.noResize?"none":null};return this.computedRows||(t.height=this.heightInPx,t.overflowY="scroll"),t},computedMinRows:function(){return Object(s["c"])(Object(u["c"])(this.rows,2),2)},computedMaxRows:function(){return Object(s["c"])(this.computedMinRows,Object(u["c"])(this.maxRows,0))},computedRows:function(){return this.computedMinRows===this.computedMaxRows?this.computedMinRows:null},computedAttrs:function(){var t=this.disabled,e=this.required;return{id:this.safeId(),name:this.name||null,form:this.form||null,disabled:t,placeholder:this.placeholder||null,required:e,autocomplete:this.autocomplete||null,readonly:this.readonly||this.plaintext,rows:this.computedRows,wrap:this.wrap||null,"aria-required":this.required?"true":null,"aria-invalid":this.computedAriaInvalid}},computedListeners:function(){return _(_({},this.bvListeners),{},{input:this.onInput,change:this.onChange,blur:this.onBlur})}},watch:{localValue:function(){this.setHeight()}},mounted:function(){this.setHeight()},methods:{visibleCallback:function(t){t&&this.$nextTick(this.setHeight)},setHeight:function(){var t=this;this.$nextTick((function(){Object(o["B"])((function(){t.heightInPx=t.computeHeight()}))}))},computeHeight:function(){if(this.$isServer||!Object(i["f"])(this.computedRows))return null;var t=this.$el;if(!Object(o["u"])(t))return null;var e=Object(o["k"])(t),r=Object(u["b"])(e.lineHeight,1),n=Object(u["b"])(e.borderTopWidth,0)+Object(u["b"])(e.borderBottomWidth,0),a=Object(u["b"])(e.paddingTop,0)+Object(u["b"])(e.paddingBottom,0),c=n+a,l=r*this.computedMinRows+c,b=Object(o["m"])(t,"height")||e.height;Object(o["F"])(t,"height","auto");var d=t.scrollHeight;Object(o["F"])(t,"height",b);var f=Object(s["c"])((d-a)/r,2),p=Object(s["d"])(Object(s["c"])(f,this.computedMinRows),this.computedMaxRows),h=Object(s["c"])(Object(s["a"])(p*r+c),l);return this.noAutoShrink&&Object(u["b"])(b,0)>h?b:"".concat(h,"px")}},render:function(t){return t("textarea",{class:this.computedClass,style:this.computedStyle,directives:[{name:"b-visible",value:this.visibleCallback,modifiers:{640:!0}}],attrs:this.computedAttrs,domProps:{value:this.localValue},on:this.computedListeners,ref:"input"})}})},ad47:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return i}));var n=r("2f79"),a=r("a723"),c=r("cf75"),o=Object(c["d"])({size:Object(c["c"])(a["t"])},"formControls"),i=Object(n["c"])({props:o,computed:{sizeFormClass:function(){return[this.size?"form-control-".concat(this.size):null]}}})},b885:function(t,e,r){"use strict";r.d(e,"b",(function(){return p})),r.d(e,"a",(function(){return h}));var n=r("2f79"),a=r("b42e"),c=r("c637"),o=r("a723"),i=r("8690"),s=r("d82f"),u=r("cf75"),l=r("d580");function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p=Object(u["d"])(Object(s["m"])(d(d({},Object(u["a"])(l["a"],u["f"].bind(null,"header"))),{},{header:Object(u["c"])(o["t"]),headerClass:Object(u["c"])(o["e"]),headerHtml:Object(u["c"])(o["t"])})),c["m"]),h=Object(n["c"])({name:c["m"],functional:!0,props:p,render:function(t,e){var r,n=e.props,c=e.data,o=e.children,s=n.headerBgVariant,u=n.headerBorderVariant,l=n.headerTextVariant;return t(n.headerTag,Object(a["a"])(c,{staticClass:"card-header",class:[n.headerClass,(r={},f(r,"bg-".concat(s),s),f(r,"border-".concat(u),u),f(r,"text-".concat(l),l),r)],domProps:o?{}:Object(i["a"])(n.headerHtml,n.header)}),o)}})},ba06:function(t,e,r){"use strict";r.d(e,"b",(function(){return u})),r.d(e,"a",(function(){return l}));var n=r("2f79"),a=r("b42e"),c=r("c637"),o=r("a723"),i=r("cf75"),s=r("fa73"),u=Object(i["d"])({subTitle:Object(i["c"])(o["t"]),subTitleTag:Object(i["c"])(o["t"],"h6"),subTitleTextVariant:Object(i["c"])(o["t"],"muted")},c["o"]),l=Object(n["c"])({name:c["o"],functional:!0,props:u,render:function(t,e){var r=e.props,n=e.data,c=e.children;return t(r.subTitleTag,Object(a["a"])(n,{staticClass:"card-subtitle",class:[r.subTitleTextVariant?"text-".concat(r.subTitleTextVariant):null]}),c||Object(s["g"])(r.subTitle))}})},d520:function(t,e,r){"use strict";r.d(e,"b",(function(){return s})),r.d(e,"a",(function(){return u}));var n=r("2f79"),a=r("a723"),c=r("7b1e"),o=r("cf75"),i=r("440b"),s=Object(o["d"])({state:Object(o["c"])(a["g"],null)},"formState"),u=Object(n["c"])({props:s,computed:{computedState:function(){return Object(c["b"])(this.state)?this.state:null},stateClass:function(){var t=this.computedState;return!0===t?"is-valid":!1===t?"is-invalid":null},computedAriaInvalid:function(){var t=Object(i["a"])(this).ariaInvalid;return!0===t||"true"===t||""===t||!1===this.computedState?"true":t}}})},d580:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("2f79"),a=r("c637"),c=r("a723"),o=r("cf75"),i=Object(o["d"])({bgVariant:Object(o["c"])(c["t"]),borderVariant:Object(o["c"])(c["t"]),tag:Object(o["c"])(c["t"],"div"),textVariant:Object(o["c"])(c["t"])},a["j"]);Object(n["c"])({props:i})},d6e4:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r("2f79"),a=r("b42e"),c=r("c637"),o=r("a723"),i=r("cf75"),s=Object(i["d"])({textTag:Object(i["c"])(o["t"],"p")},c["p"]),u=Object(n["c"])({name:c["p"],functional:!0,props:s,render:function(t,e){var r=e.props,n=e.data,c=e.children;return t(r.textTag,Object(a["a"])(n,{staticClass:"card-text"}),c)}})},dde7:function(t,e,r){"use strict";r.d(e,"b",(function(){return s})),r.d(e,"a",(function(){return u}));var n=r("2f79"),a=r("a723"),c=r("906c"),o=r("cf75"),i="input, textarea, select",s=Object(o["d"])({autofocus:Object(o["c"])(a["g"],!1),disabled:Object(o["c"])(a["g"],!1),form:Object(o["c"])(a["t"]),id:Object(o["c"])(a["t"]),name:Object(o["c"])(a["t"]),required:Object(o["c"])(a["g"],!1)},"formControls"),u=Object(n["c"])({props:s,mounted:function(){this.handleAutofocus()},activated:function(){this.handleAutofocus()},methods:{handleAutofocus:function(){var t=this;this.$nextTick((function(){Object(c["B"])((function(){var e=t.$el;t.autofocus&&Object(c["u"])(e)&&(Object(c["v"])(e,i)||(e=Object(c["C"])(i,e)),Object(c["d"])(e))}))}))}}})}}]);