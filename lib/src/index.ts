'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Label = require('@radix-ui/react-label');
var reactCheckbox = require('@radix-ui/react-checkbox');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () {
                        return e[k];
                    }
                });
            }
        });
    }
    n['default'] = e;
    return Object.freeze(n);
}

var Label__namespace = /*#__PURE__*/_interopNamespace(Label);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);

var e={all:"all"},t="colors",n="sizes",i="space",r={gap:i,gridGap:i,columnGap:i,gridColumnGap:i,rowGap:i,gridRowGap:i,inset:i,insetBlock:i,insetBlockEnd:i,insetBlockStart:i,insetInline:i,insetInlineEnd:i,insetInlineStart:i,margin:i,marginTop:i,marginRight:i,marginBottom:i,marginLeft:i,marginBlock:i,marginBlockEnd:i,marginBlockStart:i,marginInline:i,marginInlineEnd:i,marginInlineStart:i,padding:i,paddingTop:i,paddingRight:i,paddingBottom:i,paddingLeft:i,paddingBlock:i,paddingBlockEnd:i,paddingBlockStart:i,paddingInline:i,paddingInlineEnd:i,paddingInlineStart:i,top:i,right:i,bottom:i,left:i,scrollMargin:i,scrollMarginTop:i,scrollMarginRight:i,scrollMarginBottom:i,scrollMarginLeft:i,scrollMarginX:i,scrollMarginY:i,scrollMarginBlock:i,scrollMarginBlockEnd:i,scrollMarginBlockStart:i,scrollMarginInline:i,scrollMarginInlineEnd:i,scrollMarginInlineStart:i,scrollPadding:i,scrollPaddingTop:i,scrollPaddingRight:i,scrollPaddingBottom:i,scrollPaddingLeft:i,scrollPaddingX:i,scrollPaddingY:i,scrollPaddingBlock:i,scrollPaddingBlockEnd:i,scrollPaddingBlockStart:i,scrollPaddingInline:i,scrollPaddingInlineEnd:i,scrollPaddingInlineStart:i,fontSize:"fontSizes",background:t,backgroundColor:t,backgroundImage:t,border:t,borderBlock:t,borderBlockEnd:t,borderBlockStart:t,borderBottom:t,borderBottomColor:t,borderColor:t,borderInline:t,borderInlineEnd:t,borderInlineStart:t,borderLeft:t,borderLeftColor:t,borderRight:t,borderRightColor:t,borderTop:t,borderTopColor:t,caretColor:t,color:t,columnRuleColor:t,fill:t,outline:t,outlineColor:t,stroke:t,textDecorationColor:t,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:n,minBlockSize:n,maxBlockSize:n,inlineSize:n,minInlineSize:n,maxInlineSize:n,width:n,minWidth:n,maxWidth:n,height:n,minHeight:n,maxHeight:n,flexBasis:n,gridTemplateColumns:n,gridTemplateRows:n,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},o=(e,t)=>"function"==typeof t?{"()":Function.prototype.toString.call(t)}:t,l=()=>{const e=Object.create(null);return (t,n,...i)=>{const r=(e=>JSON.stringify(e,o))(t);return r in e?e[r]:e[r]=n(t,...i)}},s=Symbol.for("sxs.composers"),a=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),c=e=>{for(const t in e)return !0;return !1},{hasOwnProperty:d}=Object.prototype,g=(e,t)=>d.call(e,t),u=e=>e.includes("-")?e:e.replace(/[A-Z]/g,(e=>"-"+e.toLowerCase())),p=/\s+(?![^()]*\))/,h=e=>t=>e(..."string"==typeof t?String(t).split(p):[t]),f={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:h(((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e}))),marginInline:h(((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e}))),maxSize:h(((e,t)=>({maxBlockSize:e,maxInlineSize:t||e}))),minSize:h(((e,t)=>({minBlockSize:e,minInlineSize:t||e}))),paddingBlock:h(((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e}))),paddingInline:h(((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e})))},m=/([\d.]+)([^]*)/,b=(e,t)=>e.length?e.reduce(((e,n)=>(e.push(...t.map((e=>e.includes("&")?e.replace(/&/g,/[ +>|~]/.test(n)&&/&.*&/.test(e)?`:is(${n})`:n):n+" "+e))),e)),[]):t,S=(e,t)=>e in k&&"string"==typeof t?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,((t,n,i,r)=>n+("stretch"===i?`-moz-available${r};${e}:${n}-webkit-fill-available`:`-moz-fit-content${r};${e}:${n}fit-content`)+r)):String(t),k={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},y=e=>e?e+"-":"",R=(e,t,n)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,((e,i,r,o,l)=>"$"==o==!!r?e:(i||"--"==o?"calc(":"")+"var(--"+("$"===o?y(t)+(l.includes("$")?"":y(n))+l.replace(/\$/g,"-"):l)+")"+(i||"--"==o?"*"+(i||"")+(r||"1")+")":""))),B=/\s*,\s*(?![^()]*\))/,$=Object.prototype.toString,x=(e,t,n,i,r)=>{let o,l,s;const a=(e,t,n)=>{let c,d;const g=e=>{for(c in e){const k=64===c.charCodeAt(0),x=k&&Array.isArray(e[c])?e[c]:[e[c]];for(d of x){const e="object"==typeof d&&d&&d.toString===$,x=/[A-Z]/.test(h=c)?h:h.replace(/-[^]/g,(e=>e[1].toUpperCase()));if(x in i.utils){const e=i.utils[x];if(e!==l){l=e,g(e(i)(d)),l=null;continue}}else if(x in f){const e=f[x];if(e!==s){s=e,g(e(d)),s=null;continue}}if(k&&(p=c.slice(1)in i.media?"@media "+i.media[c.slice(1)]:c,c=p.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,((e,t,n,i,r,o)=>{const l=m.test(t),s=.0625*(l?-1:1),[a,c]=l?[i,t]:[t,i];return "("+("="===n[0]?"":">"===n[0]===l?"max-":"min-")+a+":"+("="!==n[0]&&1===n.length?c.replace(m,((e,t,i)=>Number(t)+s*(">"===n?1:-1)+i)):c)+(r?") and ("+(">"===r[0]?"min-":"max-")+a+":"+(1===r.length?o.replace(m,((e,t,n)=>Number(t)+s*(">"===r?-1:1)+n)):o):"")+")"}))),e){const e=k?n.concat(c):[...n],i=k?[...t]:b(t,c.split(B));void 0!==o&&r(I(...o)),o=void 0,a(d,i,e);}else void 0===o&&(o=[[],t,n]),c=k||36!==c.charCodeAt(0)?c:`--${y(i.prefix)}${c.slice(1).replace(/\$/g,"-")}`,d=e?d:"number"==typeof d?d&&x in j?String(d)+"px":String(d):R(S(x,d),i.prefix,i.themeMap[x]),o[0].push(`${k?`${c} `:`${u(c)}:`}${d}`);}}var p,h;};g(e),void 0!==o&&r(I(...o)),o=void 0;};a(e,t,n);},I=(e,t,n)=>`${n.map((e=>`${e}{`)).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(n.length?n.length+1:0).join("}")}`,j={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},W=e=>String.fromCharCode(e+(e>25?39:97)),v=e=>(e=>{let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=W(t%52)+n;return W(t%52)+n})(((e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e})(5381,JSON.stringify(e))>>>0),w=l(),z=(e,t)=>w(e,(()=>(...n)=>{let i=null;const r=new Set;for(const t of n)if(null!=t)switch(typeof t){case"function":if(null==i&&!t[s]){i=t;break}case"object":if(null==i&&null!=t.type&&(i=t.type),s in t)for(const e of t[s])r.add(e);else if(!("$$typeof"in t)){const n=E(t,e);r.add(n);}break;case"string":i=t;}return null==i&&(i="span"),r.size||r.add(["PJLV",{},[],Object.create(null),[],[],[]]),P(e,i,r,t)})),E=({variants:e,compoundVariants:t,defaultVariants:n,...i},r)=>{const o=`${y(r.prefix)}c-${v(i)}`,l=[],s=[],a=[],c=Object.create(null),d=[];for(const e in n)c[e]=String(n[e]);if("object"==typeof e&&e)for(const t in e){g(c,t)||(c[t]="undefined");const n=e[t];for(const e in n){const i={[t]:String(e)};"undefined"===String(e)&&d.push(t);const r=n[e],o=[i,r];l.push(o),s.push([i,r]);}}if("object"==typeof t&&t)for(const e of t){let{css:t,...n}=e;t="object"==typeof t&&t||{};for(const e in n)n[e]=String(n[e]);const i=[n,t];l.push(i),a.push([n,t]);}return [o,i,l,c,s,a,d]},P=(e,t,n,i)=>{const[r]=n.keys().next().value,o=`.${r}`,l=l=>{l="object"==typeof l&&l||{};const{css:s,...a}=l;let d={},g={...a};const[u,p]=M(n);for(const e in u)if(e in g){let t=g[e];if("object"==typeof t&&null!==t){g[e]={"@initial":u[e],...t};continue}t=String(t),"undefined"!==t||p.has(e)||(g[e]=u[e]);}else d[e]=u[e];const{children:h,...f}={...d,...g},m=new Set;for(const[t,r,o,l,s,d]of n){if(m.add(t),!i.rules.styled.cache.has(t)){i.rules.styled.cache.add(t);let n=i.rules.styled.group.cssRules.length;x(r,[`.${t}`],[],e,(e=>{i.rules.styled.group.insertRule(e,n++);}));}const n=[],o=[];e:for(let[t,i]of s){if(!c(i))continue;let r=0;for(const n in t){delete a[n];const o=t[n];let l=f[n];if(l="object"==typeof l&&l||String(l),l!==o){if(!(n in f)||"object"!=typeof l||null===l)continue e;{let t=!1;for(const n in l)String(l[n])===o&&("@initial"!==n&&(i={[n in e.media?e.media[n]:n]:i}),r+=Object.keys(l).indexOf(n),t=!0);if(!t)continue e}}}const o=String(Object.keys(t)),l=`${o}-${t[o]}`;(n[r]=n[r]||[]).push([l,i]);}e:for(let[t,n]of d){if(!c(n))continue;let i=0;for(const r in t){delete a[r];const o=t[r];let l=f[r];if(l="object"==typeof l&&l||String(l),l!==o){if(!(r in f)||"object"!=typeof l||null===l)continue e;{let t=!1;for(const r in l)String(l[r])===o&&("@initial"!==r&&(n={[r in e.media?e.media[r]:r]:n}),i+=Object.keys(l).indexOf(r),t=!0);if(!t)continue e}}}(o[i]=o[i]||[]).push(n);}for(const r of n)if(void 0!==r)for(const[n,o]of r){const r=`${t}-${v(o)}-${n}`;if(m.add(r),!i.rules.onevar.cache.has(r)){i.rules.onevar.cache.add(r);let t=i.rules.onevar.group.cssRules.length;x(o,[`.${r}`],[],e,(e=>{i.rules.onevar.group.insertRule(e,t++);}));}}for(const n of o)if(void 0!==n)for(const r of n){const n=`${t}-${v(r)}-cv`;if(m.add(n),!i.rules.allvar.cache.has(n)){i.rules.allvar.cache.add(n);let t=i.rules.allvar.group.cssRules.length;x(r,[`.${n}`],[],e,(e=>{i.rules.allvar.group.insertRule(e,t++);}));}}}if("object"==typeof s&&s){const t=`${r}-i${v(s)}-css`;if(m.add(t),!i.rules.inline.cache.has(t)){i.rules.inline.cache.add(t);let n=i.rules.inline.group.cssRules.length;x(s,[`.${t}`],[],e,(e=>{i.rules.inline.group.insertRule(e,n++);}));}}for(const e of String(l.className||"").trim().split(/\s+/))e&&m.add(e);const b=a.className=[...m].join(" ");return {type:t,className:b,selector:o,props:a,toString:()=>b}};return a(l,{type:t,className:r,selector:o,[s]:n,toString:()=>(i.rules.styled.cache.has(r)||l(),r)})},M=e=>{const t={},n=[];for(const[,,,i,,,r]of e){n.push(...r);for(const e in i)t[e]=i[e];}return [t,new Set(n)]},C=l(),T=(e,t)=>C(e,(()=>n=>{const i=v(n="object"==typeof n&&n||{}),r=()=>{if(!t.rules.global.cache.has(i)){if(t.rules.global.cache.add(i),"@import"in n){let e=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let i of [].concat(n["@import"]))i=i.includes('"')||i.includes("'")?i:`"${i}"`,t.sheet.insertRule(`@import ${i};`,e++);delete n["@import"];}let r=t.rules.global.group.cssRules.length;x(n,[],[],e,(e=>{t.rules.global.group.insertRule(e,r++);}));}return ""};return a(r,{toString:r,[Symbol.toPrimitive]:r})})),O=l(),L=(e,t)=>O(e,(()=>n=>{const i=`${y(e.prefix)}k-${v(n)}`,r=()=>{if(!t.rules.global.cache.has(i)){t.rules.global.cache.add(i);let r=t.rules.global.group.cssRules.length;const o=[];x(n,[],[],e,(e=>o.push(e)));const l=`@keyframes ${i}{${o.join("")}}`;t.rules.global.group.insertRule(l,r++);}return i};return a(r,{get name(){return r()},toString:r,[Symbol.toPrimitive]:r})})),A=class{constructor(e,t,n,i){this.name=null==e?"":String(e),this.value=null==t?"":String(t),this.scale=null==n?"":String(n),this.prefix=null==i?"":String(i);}get computedValue(){return "var("+this.variable+")"}get variable(){return "--"+y(this.prefix)+y(this.scale)+this.name}toString(){return this.computedValue}},D=l(),N=(e,t)=>D(e,(()=>(n,i)=>{i="object"==typeof n&&n||Object(i);const r=`.${n=(n="string"==typeof n?n:"")||`${y(e.prefix)}t-${v(i)}`}`,o={},l=[];for(const t in i){o[t]={};for(const n in i[t]){const r=`--${y(e.prefix)}${t}-${n}`,s=R(String(i[t][n]),e.prefix,t);o[t][n]=new A(n,s,t,e.prefix),l.push(`${r}:${s}`);}}const s=()=>{if(l.length&&!t.rules.themed.cache.has(n)){t.rules.themed.cache.add(n);let r=t.rules.themed.group.cssRules.length;const o=`${i===e.theme?":root,":""}.${n}{${l.join(";")}}`;t.rules.themed.group.insertRule(o,r++);}return n};return {...o,className:n,selector:r,toString:s,[Symbol.toPrimitive]:s}})),H=["themed","global","styled","onevar","allvar","inline"],V=e=>{let t;const n=()=>{if(t){const{rules:e,sheet:n}=t;if(!n.deleteRule){for(;3===Object(Object(n.cssRules)[0]).type;)n.cssRules.splice(0,1);n.cssRules=[];}for(const t in e)delete e[t];n.ownerRule&&(n.ownerRule.textContent=n.ownerRule.textContent);}const i=Object(e).styleSheets||[];for(const e of i)if(!e.href||e.href.startsWith(location.origin)){for(let i=0,r=e.cssRules;r[i];++i){const o=Object(r[i]);if(1!==o.type)continue;const l=Object(r[i+1]);if(4!==l.type)continue;++i;const{cssText:s}=o;if(!s.startsWith("--stitches"))continue;const a=s.slice(16,-3).trim().split(/\s+/),c=H[a[0]];c&&(t||(t={sheet:e,reset:n,rules:{}}),t.rules[c]={group:l,index:i,cache:new Set(a)});}if(t)break}if(!t){const i=(e,t)=>({type:t,cssRules:[],insertRule(e,t){this.cssRules.splice(t,0,i(e,{import:3,undefined:1}[(e.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4));},get cssText(){return "@media{}"===e?`@media{${[].map.call(this.cssRules,(e=>e.cssText)).join("")}}`:e}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:i("","text/css"),rules:{},reset:n,toString(){const{cssRules:e}=t.sheet;return [].map.call(e,((n,i)=>{const{cssText:r}=n;let o="";if(r.startsWith("--stitches"))return "";if(e[i-1]&&(o=e[i-1].cssText).startsWith("--stitches")){if(!n.cssRules.length)return "";for(const e in t.rules)if(t.rules[e].group===n)return `--stitches{--:${[...t.rules[e].cache].join(" ")}}${r}`;return n.cssRules.length?`${o}${r}`:""}return r})).join("")}};}const{sheet:r,rules:o}=t;if(!o.inline){const e=r.cssRules.length;r.insertRule("@media{}",e),r.insertRule("--stitches{--:5}",e),o.inline={index:e,group:r.cssRules[e+1],cache:new Set([5])};}if(!o.allvar){const e=o.inline.index;r.insertRule("@media{}",e),r.insertRule("--stitches{--:4}",e),o.allvar={index:e,group:r.cssRules[e+1],cache:new Set([4])};}if(!o.onevar){const e=o.allvar.index;r.insertRule("@media{}",e),r.insertRule("--stitches{--:3}",e),o.onevar={index:e,group:r.cssRules[e+1],cache:new Set([3])};}if(!o.styled){const e=o.onevar.index;r.insertRule("@media{}",e),r.insertRule("--stitches{--:2}",e),o.styled={index:e,group:r.cssRules[e+1],cache:new Set([2])};}if(!o.global){const e=o.styled.index;r.insertRule("@media{}",e),r.insertRule("--stitches{--:1}",e),o.global={index:e,group:r.cssRules[e+1],cache:new Set([1])};}if(!o.themed){const e=o.global.index;r.insertRule("@media{}",e),r.insertRule("--stitches{--:0}",e),o.themed={index:e,group:r.cssRules[e+1],cache:new Set([0])};}};return n(),t},G=l();var U=e=>null==e?"span":"object"!=typeof e||e.$$typeof?g(e,s)?U(e.type):e:"span",Z=l(),X=t=>{const n=(t=>{let n=!1;const i=G(t,(t=>{n=!0;const i="prefix"in(t="object"==typeof t&&t||{})?String(t.prefix):"",o={...e,..."object"==typeof t.media&&t.media||{}},l="object"==typeof t.root?t.root||null:globalThis.document||null,s="object"==typeof t.theme&&t.theme||{},a={prefix:i,media:o,root:l,theme:s,themeMap:"object"==typeof t.themeMap&&t.themeMap||{...r},utils:"object"==typeof t.utils&&t.utils||{}},c=V(l),d={css:z(a,c),global:T(a,c),keyframes:L(a,c),theme:N(a,c),reset(){c.reset(),g.toString();},sheet:c,config:a,prefix:i,getCssString:c.toString,toString:c.toString,[Symbol.toPrimitive]:c.toString},g=d.theme(s);return Object.assign(d.theme,g),g.toString(),d}));return n||i.reset(),i})(t);return n.styled=(({config:e,sheet:t})=>Z(e,(()=>{const n=z(e,t);return (...e)=>{const t=U(e[0]),i=n(...e),r=React__default['default'].forwardRef(((e,n)=>{const r=e&&e.as||t,o=i(e).props;return delete o.as,o.ref=n,React__default['default'].createElement(r,o)}));return r.className=i.className,r.selector=i.selector,r.type=t,r.toString=()=>i.selector,r[s]=i[s],r}})))(n),n};//# sourceMappingUrl=index.map

var _a;
var styled = (_a = X({
    theme: {
        colors: {
            disabled: "#ddd",
            error: "#FF2323",
            success: "#44C889",
        },
    },
    media: {
        mobile: "(min-width: 360px)",
        tablet: "(min-width: 768px)",
        desktop: "(min-width: 1024px)",
        "desktop-xl": "(min-width: 1280px)",
    },
    insertionMethod: function () {
        var currentCssHead;
        var currentCssNode;
        return function (cssText) {
            if (typeof document === "object") {
                if (!currentCssHead)
                    currentCssHead = document.head || document.documentElement;
                if (!currentCssNode)
                    currentCssNode =
                        document.getElementById("fi-ui") ||
                            Object.assign(document.createElement("style"), { id: "fi-ui" });
                if (!currentCssNode.parentNode)
                    currentCssHead.prepend(currentCssNode);
                currentCssNode.textContent = cssText;
            }
        };
    },
}), _a.styled); _a.css; _a.theme; var keyframes = _a.keyframes; _a.global; var getCssString = _a.getCssString;

var StyledCheckbox = styled(reactCheckbox.Root, {
    appearance: "none",
    backgroundColor: "transparent",
    padding: 0,
    width: 23,
    height: 23,
    border: "2px solid #ccc",
    borderRadius: "32%",
    position: "relative",
    transition: "all .3s ease",
    "&:hover": {
        cursor: "pointer",
    },
    "&:before": {
        content: "",
        transition: "all .3s ease",
        backgroundColor: "blue",
        position: "absolute",
        borderRadius: "32%",
        border: "2px solid blue",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    "&[data-state='checked']:before": {
        opacity: 1,
        width: "100%",
        height: "100%",
    },
    "&[data-state='unchecked']:before": {
        opacity: 0,
        width: 0,
        height: 0,
    },
});

var line1Animation = keyframes({
    "0%": {
        width: 0,
    },
    "100%": {
        width: "100%",
    },
});
var line2Animation = keyframes({
    "0%": {
        height: 0,
    },
    "100%": {
        height: "100%",
    },
});
var ContainerCheckIcon = styled("div", {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) rotate(45deg)",
    display: "block",
    width: 8,
    height: 14,
    marginTop: -2,
});
var LineCheck1 = styled("span", {
    background: "#fff",
    content: "",
    position: "absolute",
    height: 2,
    transition: "all .2s ease",
    borderRadius: 5,
    zIndex: 100,
    bottom: 0,
    left: 0,
    animation: line1Animation + " 300ms",
    animationDelay: "200ms",
    animationFillMode: "forwards",
});
var LineCheck2 = styled("span", {
    bottom: 0,
    right: 0,
    zIndex: 100,
    background: "#fff",
    position: "absolute",
    borderRadius: 5,
    transition: "all .2s ease",
    width: 2,
    animation: "" + line2Animation,
    animationFillMode: "forwards",
    animationDelay: "400ms",
    animationDuration: "300ms",
});
var StyledLabel = styled(Label__namespace.Root, {
    "&:hover": {
        '& [data-state="unchecked"]': {
            backgroundColor: "#eee",
        },
        '& [data-state="checked"]': {
            boxShadow: "0 3px 15px 0 rgba(26, 93, 255,.35)",
        },
        cursor: "pointer",
    },
    variants: {
        hasLabel: {
            true: {
                display: "flex",
                alignItems: "center",
                width: "fit-content",
            },
        },
    },
});
var ChildrenLabel = styled("div", {
    marginLeft: ".5rem",
});
var CheckIcon = function () { return (React__namespace.createElement(ContainerCheckIcon, null,
    React__namespace.createElement(LineCheck1, null),
    React__namespace.createElement(LineCheck2, null))); };
var Checkbox = function (_a) {
    var children = _a.children;
    return (React__namespace.createElement(StyledLabel, { hasLabel: !!children },
        React__namespace.createElement(StyledCheckbox, null,
            React__namespace.createElement(reactCheckbox.Indicator, { as: CheckIcon })),
        children && React__namespace.createElement(ChildrenLabel, null, children)));
};

exports.Checkbox = Checkbox;
exports.getCssString = getCssString;
