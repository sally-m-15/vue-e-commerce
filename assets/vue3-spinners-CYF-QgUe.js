import{d as ve}from"./outdent-BxBVU389.js";import{s as be}from"./style-inject-BI9ztQJ7.js";import{c as v,d as b,h as r,H as f,I as p,J as _,K as C,L as x,M as g,N as I,v as P}from"./@vue-CDd_W0EE.js";import{t as he}from"./colornames-BQ62I0KG.js";import{p as xe}from"./parse-unit-BKpLAx9Y.js";import{a as H}from"./just-range-CGHEN2gD.js";const _e={size:{type:[Number,String],default:"1em"},color:String};let G=!1;function Ce(t){if(!G){const e=ve`
			.vue-spinner {
				vertical-align: middle;
			}
		`;be(e),G=!0}return{cSize:v(()=>t.size),classes:v(()=>"vue-spinner"),style:v(()=>({color:t.color}))}}var W=[],k=[];function ke(t,e){if(t&&typeof document<"u"){var a,i=e.prepend===!0?"prepend":"append",c=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(c){var n=W.indexOf(s);n===-1&&(n=W.push(s)-1,k[n]={}),a=k[n]&&k[n][i]?k[n][i]:k[n][i]=u()}else a=u();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function u(){var o=document.createElement("style");if(o.setAttribute("type","text/css"),e.attributes)for(var d=Object.keys(e.attributes),l=0;l<d.length;l++)o.setAttribute(d[l],e.attributes[d[l]]);var m=i==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(m,o),o}}var $e=`
.vue-spinner-mat {
	animation: vue-spinner-spin 2s linear infinite;
	transform-origin: center center;
}
.vue-spinner-mat .path {
	stroke-dasharray: 1, 200;
	stroke-dashoffset: 0;
	animation: vue-spinner-mat-dash 1.5s ease-in-out infinite;
}
@keyframes vue-spinner-spin {
0% {
		transform: rotate3d(0, 0, 1, 0deg);
}
25% {
		transform: rotate3d(0, 0, 1, 90deg);
}
50% {
		transform: rotate3d(0, 0, 1, 180deg);
}
75% {
		transform: rotate3d(0, 0, 1, 270deg);
}
100% {
		transform: rotate3d(0, 0, 1, 359deg);
}
}
@keyframes vue-spinner-mat-dash {
0% {
		stroke-dasharray: 1, 200;
		stroke-dashoffset: 0;
}
50% {
		stroke-dasharray: 89, 200;
		stroke-dashoffset: -35px;
}
100% {
		stroke-dasharray: 89, 200;
		stroke-dashoffset: -124px;
}
}
`;ke($e,{});b({name:"VueSpinner",props:{..._e,thickness:{type:Number,default:5}},setup(t){const{cSize:e,classes:a,style:i}=Ce(t);return()=>r("svg",{style:i.value,class:a.value+" vue-spinner-mat",width:e.value,height:e.value,viewBox:"25 25 50 50"},[r("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":t.thickness,"stroke-miterlimit":"10"})])}});r("g",{transform:"matrix(1 0 0 -1 0 80)"},[r("rect",{width:"10",height:"20",rx:"3"},[r("animate",{attributeName:"height",begin:"0s",dur:"4.3s",values:"20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",calcMode:"linear",repeatCount:"indefinite"})]),r("rect",{x:"15",width:"10",height:"80",rx:"3"},[r("animate",{attributeName:"height",begin:"0s",dur:"2s",values:"80;55;33;5;75;23;73;33;12;14;60;80",calcMode:"linear",repeatCount:"indefinite"})]),r("rect",{x:"30",width:"10",height:"50",rx:"3"},[r("animate",{attributeName:"height",begin:"0s",dur:"1.4s",values:"50;34;78;23;56;23;34;76;80;54;21;50",calcMode:"linear",repeatCount:"indefinite"})]),r("rect",{x:"45",width:"10",height:"30",rx:"3"},[r("animate",{attributeName:"height",begin:"0s",dur:"2s",values:"30;45;13;80;56;72;45;76;34;23;67;30",calcMode:"linear",repeatCount:"indefinite"})])]);r("g",{transform:"translate(1 1)","stroke-width":"2",fill:"none","fill-rule":"evenodd"},[r("circle",{cx:"5",cy:"50",r:"5"},[r("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),r("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})]),r("circle",{cx:"27",cy:"5",r:"5"},[r("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),r("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})]),r("circle",{cx:"49",cy:"50",r:"5"},[r("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),r("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"})])]);function h(t){const e={color:{type:String,default:"#000000"}},a={size:{type:[String,Number],default:t.size},margin:{type:String,default:t.margin},height:{type:[String,Number],default:t.height},width:{type:[String,Number],default:t.width},radius:{type:[String,Number],default:t.radius}},i={...e};for(const c of Object.keys(t))i[c]=a[c];return i}const Se=(t,e)=>{let a="";const i=he(t);if(i!==void 0?a=i.slice(1):t.startsWith("#")&&(a=t.slice(1)),a.length===3){let n="";for(const u of a)n+=u,n+=u;a=n}const c=a.match(/.{2}/g);if(c===null)throw new Error(`Could not identify RGB value of color \`${t}\``);return`rgba(${c.map(n=>Number.parseInt(n,16)).join(", ")}, ${e})`};function y(t){return v(()=>{const e=t();let[a,i]=xe(String(e));return i=i===void 0||i===""?"px":i,{value:a,unit:i,string:`${a}${i}`}})}var U=[],$=[];function Ne(t,e){if(t&&typeof document<"u"){var a,i=e.prepend===!0?"prepend":"append",c=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(c){var n=U.indexOf(s);n===-1&&(n=U.push(s)-1,$[n]={}),a=$[n]&&$[n][i]?$[n][i]:$[n][i]=u()}else a=u();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function u(){var o=document.createElement("style");if(o.setAttribute("type","text/css"),e.attributes)for(var d=Object.keys(e.attributes),l=0;l<d.length;l++)o.setAttribute(d[l],e.attributes[d[l]]);var m=i==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(m,o),o}}var Te=`
@keyframes vue-spinner-long {
0% {
		left: -35%;
		right: 100%;
}
60% {
		left: 100%;
		right: -90%;
}
100% {
		left: 100%;
		right: -90%;
}
}
@keyframes vue-spinner-short {
0% {
		left: -200%;
		right: 100%;
}
60% {
		left: 107%;
		right: -8%;
}
100% {
		left: 107%;
		right: -8%;
}
}
`;Ne(Te,{});const we={name:"VueSpinnerBar"};({...we,props:h({height:4,width:100})});r("rect",{y:"10",width:"15",height:"120",rx:"6"},[r("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),r("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]),r("rect",{x:"30",y:"10",width:"15",height:"120",rx:"6"},[r("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),r("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]),r("rect",{x:"60",width:"15",height:"140",rx:"6"},[r("animate",{attributeName:"height",begin:"0s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),r("animate",{attributeName:"y",begin:"0s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]),r("rect",{x:"90",y:"10",width:"15",height:"120",rx:"6"},[r("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),r("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]),r("rect",{x:"120",y:"10",width:"15",height:"120",rx:"6"},[r("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),r("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]);var J=[],S=[];function ze(t,e){if(t&&typeof document<"u"){var a,i=e.prepend===!0?"prepend":"append",c=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(c){var n=J.indexOf(s);n===-1&&(n=J.push(s)-1,S[n]={}),a=S[n]&&S[n][i]?S[n][i]:S[n][i]=u()}else a=u();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function u(){var o=document.createElement("style");if(o.setAttribute("type","text/css"),e.attributes)for(var d=Object.keys(e.attributes),l=0;l<d.length;l++)o.setAttribute(d[l],e.attributes[d[l]]);var m=i==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(m,o),o}}var Ae=`
@keyframes vue-spinner-beat {
50% {
		transform: scale(0.75);
		opacity: 0.2;
}
100% {
		transform: scale(1);
		opacity: 1;
}
}
`;ze(Ae,{});h({size:15,margin:"2px"});var K=[],N=[];function Me(t,e){if(t&&typeof document<"u"){var a,i=e.prepend===!0?"prepend":"append",c=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(c){var n=K.indexOf(s);n===-1&&(n=K.push(s)-1,N[n]={}),a=N[n]&&N[n][i]?N[n][i]:N[n][i]=u()}else a=u();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function u(){var o=document.createElement("style");if(o.setAttribute("type","text/css"),e.attributes)for(var d=Object.keys(e.attributes),l=0;l<d.length;l++)o.setAttribute(d[l],e.attributes[d[l]]);var m=i==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(m,o),o}}var Ee=`
@keyframes vue-spinner-bounce {
0%,
	100% {
		transform: scale(0);
}
50% {
		transform: scale(1);
}
}
`;Me(Ee,{});const je={name:"VueSpinnerBeat"};({...je,props:h({size:60})});r("rect",{x:"25",y:"25",width:"50",height:"50",fill:"none","stroke-width":"4",stroke:"currentColor"},[r("animateTransform",{id:"spinnerBox",attributeName:"transform",type:"rotate",from:"0 50 50",to:"180 50 50",dur:"0.5s",begin:"rectBox.end"})]),r("rect",{x:"27",y:"27",width:"46",height:"50",fill:"currentColor"},[r("animate",{id:"rectBox",attributeName:"height",begin:"0s;spinnerBox.end",dur:"1.3s",from:"50",to:"0",fill:"freeze"})]);var Q=[],T=[];function Oe(t,e){if(t&&typeof document<"u"){var a,i=e.prepend===!0?"prepend":"append",c=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(c){var n=Q.indexOf(s);n===-1&&(n=Q.push(s)-1,T[n]={}),a=T[n]&&T[n][i]?T[n][i]:T[n][i]=u()}else a=u();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function u(){var o=document.createElement("style");if(o.setAttribute("type","text/css"),e.attributes)for(var d=Object.keys(e.attributes),l=0;l<d.length;l++)o.setAttribute(d[l],e.attributes[d[l]]);var m=i==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(m,o),o}}var Be=`
@keyframes vue-spinner-circle {
0% {
		transform: rotate(0deg);
}
50% {
		transform: rotate(180deg);
}
100% {
		transform: rotate(360deg);
}
}
`;Oe(Be,{});const Xe={name:"VueSpinnerCircle"};({...Xe,props:h({size:50})});var ee=[],w=[];function Re(t,e){if(t&&typeof document<"u"){var a,i=e.prepend===!0?"prepend":"append",c=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(c){var n=ee.indexOf(s);n===-1&&(n=ee.push(s)-1,w[n]={}),a=w[n]&&w[n][i]?w[n][i]:w[n][i]=u()}else a=u();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function u(){var o=document.createElement("style");if(o.setAttribute("type","text/css"),e.attributes)for(var d=Object.keys(e.attributes),l=0;l<d.length;l++)o.setAttribute(d[l],e.attributes[d[l]]);var m=i==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(m,o),o}}var Le=`
@keyframes vue-spinner-climbing-box {
0% {
		transform: translate(0, -1em) rotate(-45deg);
}
5% {
		transform: translate(0, -1em) rotate(-50deg);
}
20% {
		transform: translate(1em, -2em) rotate(47deg);
}
25% {
		transform: translate(1em, -2em) rotate(45deg);
}
30% {
		transform: translate(1em, -2em) rotate(40deg);
}
45% {
		transform: translate(2em, -3em) rotate(137deg);
}
50% {
		transform: translate(2em, -3em) rotate(135deg);
}
55% {
		transform: translate(2em, -3em) rotate(130deg);
}
70% {
		transform: translate(3em, -4em) rotate(217deg);
}
75% {
		transform: translate(3em, -4em) rotate(220deg);
}
100% {
		transform: translate(0, -1em) rotate(-225deg);
}
}
`;Re(Le,{});const qe={name:"VueSpinnerClimbingBox"};({...qe,props:h({size:15})});var te=[],z=[];function Ve(t,e){if(t&&typeof document<"u"){var a,i=e.prepend===!0?"prepend":"append",c=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(c){var n=te.indexOf(s);n===-1&&(n=te.push(s)-1,z[n]={}),a=z[n]&&z[n][i]?z[n][i]:z[n][i]=u()}else a=u();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function u(){var o=document.createElement("style");if(o.setAttribute("type","text/css"),e.attributes)for(var d=Object.keys(e.attributes),l=0;l<d.length;l++)o.setAttribute(d[l],e.attributes[d[l]]);var m=i==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(m,o),o}}var De=`
@keyframes vue-spinner-clip {
0% {
		transform: rotate(0deg) scale(1);
}
50% {
		transform: rotate(180deg) scale(0.8);
}
100% {
		transform: rotate(360deg) scale(1);
}
}
`;Ve(De,{});var Ye=(t,e)=>{const a=t.__vccOpts||t;for(const[i,c]of e)a[i]=c;return a};const Fe={name:"VueSpinnerClip"},Pe=b({...Fe,props:h({size:35}),setup(t){const e=y(()=>t.size),a=v(()=>({background:"transparent !important",width:e.value.string,height:e.value.string,borderRadius:"100%",border:`2px solid ${t.color}`,borderBottomColor:"transparent",display:"inline-block",animation:"vue-spinner-clip 0.75s 0s infinite linear",animationFillMode:"both"}));return(i,c)=>(p(),f("div",{style:g(a.value)},null,4))}});var qt=Ye(Pe,[["__file","/Users/leonsilicon/projects/vue3-spinners/packages/vue3-spinners/src/spinners/vue-spinner-clip.vue"]]);r("circle",{cx:"50",cy:"50",r:"48",fill:"none","stroke-width":"4","stroke-miterlimit":"10",stroke:"currentColor"}),r("line",{"stroke-linecap":"round","stroke-width":"4","stroke-miterlimit":"10",stroke:"currentColor",x1:"50",y1:"50",x2:"85",y2:"50.5"},[r("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"2s",repeatCount:"indefinite"})]),r("line",{"stroke-linecap":"round","stroke-width":"4","stroke-miterlimit":"10",stroke:"currentColor",x1:"50",y1:"50",x2:"49.5",y2:"74"},[r("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"15s",repeatCount:"indefinite"})]);r("rect",{x:"0",y:"0",width:"100",height:"100",fill:"none"}),r("path",{d:"M78,19H22c-6.6,0-12,5.4-12,12v31c0,6.6,5.4,12,12,12h37.2c0.4,3,1.8,5.6,3.7,7.6c2.4,2.5,5.1,4.1,9.1,4 c-1.4-2.1-2-7.2-2-10.3c0-0.4,0-0.8,0-1.3h8c6.6,0,12-5.4,12-12V31C90,24.4,84.6,19,78,19z",fill:"currentColor"}),r("circle",{cx:"30",cy:"47",r:"5",fill:"#fff"},[r("animate",{attributeName:"opacity",from:"0",to:"1",values:"0;1;1",keyTimes:"0;0.2;1",dur:"1s",repeatCount:"indefinite"})]),r("circle",{cx:"50",cy:"47",r:"5",fill:"#fff"},[r("animate",{attributeName:"opacity",from:"0",to:"1",values:"0;0;1;1",keyTimes:"0;0.2;0.4;1",dur:"1s",repeatCount:"indefinite"})]),r("circle",{cx:"70",cy:"47",r:"5",fill:"#fff"},[r("animate",{attributeName:"opacity",from:"0",to:"1",values:"0;0;1;1",keyTimes:"0;0.4;0.6;1",dur:"1s",repeatCount:"indefinite"})]);r("rect",{x:"0",y:"0",width:"100",height:"100",fill:"none"}),r("g",{transform:"translate(25 25)"},[r("rect",{x:"-20",y:"-20",width:"40",height:"40",fill:"currentColor",opacity:"0.9"},[r("animateTransform",{attributeName:"transform",type:"scale",from:"1.5",to:"1",repeatCount:"indefinite",begin:"0s",dur:"1s",calcMode:"spline",keySplines:"0.2 0.8 0.2 0.8",keyTimes:"0;1"})])]),r("g",{transform:"translate(75 25)"},[r("rect",{x:"-20",y:"-20",width:"40",height:"40",fill:"currentColor",opacity:"0.8"},[r("animateTransform",{attributeName:"transform",type:"scale",from:"1.5",to:"1",repeatCount:"indefinite",begin:"0.1s",dur:"1s",calcMode:"spline",keySplines:"0.2 0.8 0.2 0.8",keyTimes:"0;1"})])]),r("g",{transform:"translate(25 75)"},[r("rect",{x:"-20",y:"-20",width:"40",height:"40",fill:"currentColor",opacity:"0.7"},[r("animateTransform",{attributeName:"transform",type:"scale",from:"1.5",to:"1",repeatCount:"indefinite",begin:"0.3s",dur:"1s",calcMode:"spline",keySplines:"0.2 0.8 0.2 0.8",keyTimes:"0;1"})])]),r("g",{transform:"translate(75 75)"},[r("rect",{x:"-20",y:"-20",width:"40",height:"40",fill:"currentColor",opacity:"0.6"},[r("animateTransform",{attributeName:"transform",type:"scale",from:"1.5",to:"1",repeatCount:"indefinite",begin:"0.2s",dur:"1s",calcMode:"spline",keySplines:"0.2 0.8 0.2 0.8",keyTimes:"0;1"})])]);var ne=[],A=[];function He(t,e){if(t&&typeof document<"u"){var a,i=e.prepend===!0?"prepend":"append",c=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(c){var n=ne.indexOf(s);n===-1&&(n=ne.push(s)-1,A[n]={}),a=A[n]&&A[n][i]?A[n][i]:A[n][i]=u()}else a=u();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function u(){var o=document.createElement("style");if(o.setAttribute("type","text/css"),e.attributes)for(var d=Object.keys(e.attributes),l=0;l<d.length;l++)o.setAttribute(d[l],e.attributes[d[l]]);var m=i==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(m,o),o}}var Ie=`
@keyframes vue-spinner-rotate {
100% {
		transform: rotate(360deg);
}
}
@keyframes vue-spinner-bounce {
0%,
	100% {
		transform: scale(0);
}
50% {
		transform: scale(1);
}
}
`;He(Ie,{});const Ze={name:"VueSpinnerDot"};({...Ze,props:h({size:60})});r("circle",{cx:"15",cy:"15",r:"15"},[r("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),r("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]),r("circle",{cx:"60",cy:"15",r:"9","fill-opacity":".3"},[r("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),r("animate",{attributeName:"fill-opacity",from:".5",to:".5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]),r("circle",{cx:"105",cy:"15",r:"15"},[r("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),r("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]);r("g",{transform:"translate(20 50)"},[r("rect",{x:"-10",y:"-30",width:"20",height:"60",fill:"currentColor",opacity:"0.6"},[r("animateTransform",{attributeName:"transform",type:"scale",from:"2",to:"1",begin:"0s",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keySplines:"0.1 0.9 0.4 1",keyTimes:"0;1",values:"2;1"})])]),r("g",{transform:"translate(50 50)"},[r("rect",{x:"-10",y:"-30",width:"20",height:"60",fill:"currentColor",opacity:"0.8"},[r("animateTransform",{attributeName:"transform",type:"scale",from:"2",to:"1",begin:"0.1s",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keySplines:"0.1 0.9 0.4 1",keyTimes:"0;1",values:"2;1"})])]),r("g",{transform:"translate(80 50)"},[r("rect",{x:"-10",y:"-30",width:"20",height:"60",fill:"currentColor",opacity:"0.9"},[r("animateTransform",{attributeName:"transform",type:"scale",from:"2",to:"1",begin:"0.2s",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keySplines:"0.1 0.9 0.4 1",keyTimes:"0;1",values:"2;1"})])]);var re=[],M=[];function Ge(t,e){if(t&&typeof document<"u"){var a,i=e.prepend===!0?"prepend":"append",c=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(c){var n=re.indexOf(s);n===-1&&(n=re.push(s)-1,M[n]={}),a=M[n]&&M[n][i]?M[n][i]:M[n][i]=u()}else a=u();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function u(){var o=document.createElement("style");if(o.setAttribute("type","text/css"),e.attributes)for(var d=Object.keys(e.attributes),l=0;l<d.length;l++)o.setAttribute(d[l],e.attributes[d[l]]);var m=i==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(m,o),o}}var We=`
@keyframes vue-spinner-fade {
50% {
		opacity: 0.3;
}
100% {
		opacity: 1;
}
}
`;Ge(We,{});const Ue={name:"VueSpinnerFade"};({...Ue,props:h({color:"#000000",height:"15px",width:"5px",margin:"2px",radius:"2px"})});r("g",{transform:"translate(-20,-20)"},[r("path",{d:"M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z",fill:"currentColor"},[r("animateTransform",{attributeName:"transform",type:"rotate",from:"90 50 50",to:"0 50 50",dur:"1s",repeatCount:"indefinite"})])]),r("g",{transform:"translate(20,20) rotate(15 50 50)"},[r("path",{d:"M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z",fill:"currentColor"},[r("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"90 50 50",dur:"1s",repeatCount:"indefinite"})])]);r("circle",{cx:"12.5",cy:"12.5",r:"12.5"},[r("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),r("circle",{cx:"12.5",cy:"52.5",r:"12.5","fill-opacity":".5"},[r("animate",{attributeName:"fill-opacity",begin:"100ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),r("circle",{cx:"52.5",cy:"12.5",r:"12.5"},[r("animate",{attributeName:"fill-opacity",begin:"300ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),r("circle",{cx:"52.5",cy:"52.5",r:"12.5"},[r("animate",{attributeName:"fill-opacity",begin:"600ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),r("circle",{cx:"92.5",cy:"12.5",r:"12.5"},[r("animate",{attributeName:"fill-opacity",begin:"800ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),r("circle",{cx:"92.5",cy:"52.5",r:"12.5"},[r("animate",{attributeName:"fill-opacity",begin:"400ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),r("circle",{cx:"12.5",cy:"92.5",r:"12.5"},[r("animate",{attributeName:"fill-opacity",begin:"700ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),r("circle",{cx:"52.5",cy:"92.5",r:"12.5"},[r("animate",{attributeName:"fill-opacity",begin:"500ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),r("circle",{cx:"92.5",cy:"92.5",r:"12.5"},[r("animate",{attributeName:"fill-opacity",begin:"200ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]);var ae=[],E=[];function Je(t,e){if(t&&typeof document<"u"){var a,i=e.prepend===!0?"prepend":"append",c=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(c){var n=ae.indexOf(s);n===-1&&(n=ae.push(s)-1,E[n]={}),a=E[n]&&E[n][i]?E[n][i]:E[n][i]=u()}else a=u();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function u(){var o=document.createElement("style");if(o.setAttribute("type","text/css"),e.attributes)for(var d=Object.keys(e.attributes),l=0;l<d.length;l++)o.setAttribute(d[l],e.attributes[d[l]]);var m=i==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(m,o),o}}var Ke=`
@keyframes vue-spinner-grid {
0% {
		transform: scale(1);
}
50% {
		transform: scale(0.5);
		opacity: 0.7;
}
100% {
		transform: scale(1);
		opacity: 1;
}
}
`;Je(Ke,{});const Qe={name:"VueSpinnerGridPop"};({...Qe,props:h({size:15,margin:"2px"})});r("path",{d:"M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.716-6.002 11.47-7.65 17.304-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z","fill-opacity":".5"},[r("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1.4s",values:"0.5;1;0.5",calcMode:"linear",repeatCount:"indefinite"})]),r("path",{d:"M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.593-2.32 17.308 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z","fill-opacity":".5"},[r("animate",{attributeName:"fill-opacity",begin:"0.7s",dur:"1.4s",values:"0.5;1;0.5",calcMode:"linear",repeatCount:"indefinite"})]),r("path",{d:"M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z"});r("g",[r("path",{fill:"none",stroke:"currentColor","stroke-width":"5","stroke-miterlimit":"10",d:"M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z"}),r("clipPath",{id:"uil-hourglass-clip1"},[r("rect",{x:"15",y:"20",width:"70",height:"25"},[r("animate",{attributeName:"height",from:"25",to:"0",dur:"1s",repeatCount:"indefinite",values:"25;0;0",keyTimes:"0;0.5;1"}),r("animate",{attributeName:"y",from:"20",to:"45",dur:"1s",repeatCount:"indefinite",values:"20;45;45",keyTimes:"0;0.5;1"})])]),r("clipPath",{id:"uil-hourglass-clip2"},[r("rect",{x:"15",y:"55",width:"70",height:"25"},[r("animate",{attributeName:"height",from:"0",to:"25",dur:"1s",repeatCount:"indefinite",values:"0;25;25",keyTimes:"0;0.5;1"}),r("animate",{attributeName:"y",from:"80",to:"55",dur:"1s",repeatCount:"indefinite",values:"80;55;55",keyTimes:"0;0.5;1"})])]),r("path",{d:"M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z","clip-path":"url(#uil-hourglass-clip1)",fill:"currentColor"}),r("path",{d:"M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z","clip-path":"url(#uil-hourglass-clip2)",fill:"currentColor"}),r("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"180 50 50",repeatCount:"indefinite",dur:"1s",values:"0 50 50;0 50 50;180 50 50",keyTimes:"0;0.7;1"})]);r("path",{d:"M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z",fill:"none",stroke:"currentColor","stroke-width":"8","stroke-dasharray":"10.691205342610678 10.691205342610678","stroke-dashoffset":"0"},[r("animate",{attributeName:"stroke-dashoffset",from:"0",to:"21.382410685221355",begin:"0",dur:"2s",repeatCount:"indefinite",fill:"freeze"})]);r("g",{"stroke-width":"4","stroke-linecap":"round"},[r("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(180)"},[r("animate",{attributeName:"stroke-opacity",dur:"750ms",values:"1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1",repeatCount:"indefinite"})]),r("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(210)"},[r("animate",{attributeName:"stroke-opacity",dur:"750ms",values:"0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0",repeatCount:"indefinite"})]),r("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(240)"},[r("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1",repeatCount:"indefinite"})]),r("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(270)"},[r("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15",repeatCount:"indefinite"})]),r("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(300)"},[r("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25",repeatCount:"indefinite"})]),r("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(330)"},[r("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35",repeatCount:"indefinite"})]),r("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(0)"},[r("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45",repeatCount:"indefinite"})]),r("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(30)"},[r("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55",repeatCount:"indefinite"})]),r("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(60)"},[r("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65",repeatCount:"indefinite"})]),r("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(90)"},[r("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7",repeatCount:"indefinite"})]),r("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(120)"},[r("animate",{attributeName:"stroke-opacity",dur:"750ms",values:".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85",repeatCount:"indefinite"})]),r("line",{y1:"17",y2:"29",transform:"translate(32,32) rotate(150)"},[r("animate",{attributeName:"stroke-opacity",dur:"750ms",values:"1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1",repeatCount:"indefinite"})])]);var ie=[],j=[];function et(t,e){if(t&&typeof document<"u"){var a,i=e.prepend===!0?"prepend":"append",c=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(c){var n=ie.indexOf(s);n===-1&&(n=ie.push(s)-1,j[n]={}),a=j[n]&&j[n][i]?j[n][i]:j[n][i]=u()}else a=u();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function u(){var o=document.createElement("style");if(o.setAttribute("type","text/css"),e.attributes)for(var d=Object.keys(e.attributes),l=0;l<d.length;l++)o.setAttribute(d[l],e.attributes[d[l]]);var m=i==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(m,o),o}}var tt=`
@keyframes vue-spinner-moon {
100% {
		transform: rotate(360deg);
}
}
`;et(tt,{});const nt={name:"VueSpinnerMoon"};({...nt,props:h({size:60})});r("circle",{cx:"50",cy:"50",r:"44",fill:"none","stroke-width":"4","stroke-opacity":".5",stroke:"currentColor"}),r("circle",{cx:"8",cy:"54",r:"6",fill:"currentColor","stroke-width":"3",stroke:"currentColor"},[r("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 48",to:"360 50 52",dur:"2s",repeatCount:"indefinite"})]);r("g",{transform:"translate(1 1)","stroke-width":"2",fill:"none","fill-rule":"evenodd"},[r("circle",{"stroke-opacity":".5",cx:"18",cy:"18",r:"18"}),r("path",{d:"M36 18c0-9.94-8.06-18-18-18"},[r("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})])]);var se=[],O=[];function rt(t,e){if(t&&typeof document<"u"){var a,i=e.prepend===!0?"prepend":"append",c=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(c){var n=se.indexOf(s);n===-1&&(n=se.push(s)-1,O[n]={}),a=O[n]&&O[n][i]?O[n][i]:O[n][i]=u()}else a=u();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function u(){var o=document.createElement("style");if(o.setAttribute("type","text/css"),e.attributes)for(var d=Object.keys(e.attributes),l=0;l<d.length;l++)o.setAttribute(d[l],e.attributes[d[l]]);var m=i==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(m,o),o}}var at=`
@keyframes vue-spinner-pacman0 {
0% {
		transform: rotate(0deg);
}
50% {
		transform: rotate(-44deg);
}
}
@keyframes vue-spinner-pacman1 {
0% {
		transform: rotate(0deg);
}
50% {
		transform: rotate(44deg);
}
}
@keyframes vue-spinner-pacman-ball-animation {
75% {
		opacity: 0.7;
}
100% {
		transform: translate(
			var(--6ccace4f-___-4___size_value___size_unit__),
			var(--6ccace4f-___-size_value___4___size_unit__)
		);
}
}
`;rt(at,{});const it={name:"VueSpinnerPacman"};({...it,props:h({size:"25px",margin:"2px"})});r("path",{d:"M0 50A50 50 0 0 1 50 0L50 50L0 50",fill:"currentColor",opacity:"0.5"},[r("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"0.8s",repeatCount:"indefinite"})]),r("path",{d:"M50 0A50 50 0 0 1 100 50L50 50L50 0",fill:"currentColor",opacity:"0.5"},[r("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"1.6s",repeatCount:"indefinite"})]),r("path",{d:"M100 50A50 50 0 0 1 50 100L50 50L100 50",fill:"currentColor",opacity:"0.5"},[r("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"2.4s",repeatCount:"indefinite"})]),r("path",{d:"M50 100A50 50 0 0 1 0 50L50 50L50 100",fill:"currentColor",opacity:"0.5"},[r("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"3.2s",repeatCount:"indefinite"})]);var oe=[],B=[];function st(t,e){if(t&&typeof document<"u"){var a,i=e.prepend===!0?"prepend":"append",c=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(c){var n=oe.indexOf(s);n===-1&&(n=oe.push(s)-1,B[n]={}),a=B[n]&&B[n][i]?B[n][i]:B[n][i]=u()}else a=u();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function u(){var o=document.createElement("style");if(o.setAttribute("type","text/css"),e.attributes)for(var d=Object.keys(e.attributes),l=0;l<d.length;l++)o.setAttribute(d[l],e.attributes[d[l]]);var m=i==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(m,o),o}}var ot=`
@keyframes vue-spinner-propagate0 {
25% {
		transform: translateX(var(--4d723eb2-getDistance_0___left__)) scale(0.75);
}
50% {
		transform: translateX(var(--4d723eb2-getDistance_1___left__)) scale(0.6);
}
75% {
		transform: translateX(var(--4d723eb2-getDistance_2___left__)) scale(0.5);
}
95% {
		transform: translateX(0rem) scale(1);
}
}
@keyframes vue-spinner-propagate1 {
25% {
		transform: translateX(var(--4d723eb2-getDistance_0___left__)) scale(0.75);
}
50% {
		transform: translateX(var(--4d723eb2-getDistance_1___left__)) scale(0.6);
}
75% {
		transform: translateX(var(--4d723eb2-getDistance_1___left__)) scale(0.6);
}
95% {
		transform: translateX(0rem) scale(1);
}
}
@keyframes vue-spinner-propagate2 {
25% {
		transform: translateX(var(--4d723eb2-getDistance_0___left__)) scale(0.75);
}
75% {
		transform: translateX(var(--4d723eb2-getDistance_0___left__)) scale(0.75);
}
95% {
		transform: translateX(0rem) scale(1);
}
}
@keyframes vue-spinner-propagate3 {
25% {
		transform: translateX(var(--4d723eb2-getDistance_0___right__)) scale(0.75);
}
75% {
		transform: translateX(var(--4d723eb2-getDistance_0___right__)) scale(0.75);
}
95% {
		transform: translateX(0rem) scale(1);
}
}
@keyframes vue-spinner-propagate4 {
25% {
		transform: translateX(var(--4d723eb2-getDistance_0___right__)) scale(0.75);
}
50% {
		transform: translateX(var(--4d723eb2-getDistance_1___right__)) scale(0.6);
}
75% {
		transform: translateX(var(--4d723eb2-getDistance_1___right__)) scale(0.6);
}
95% {
		transform: translateX(0rem) scale(1);
}
}
@keyframes vue-spinner-propagate5 {
25% {
		transform: translateX(var(--4d723eb2-getDistance_0___right__)) scale(0.75);
}
50% {
		transform: translateX(var(--4d723eb2-getDistance_1___right__)) scale(0.6);
}
75% {
		transform: translateX(var(--4d723eb2-getDistance_2___right__)) scale(0.5);
}
95% {
		transform: translateX(0rem) scale(1);
}
}
`;st(ot,{});const lt={name:"VueSpinnerPropagate"};({...lt,props:h({size:"15px"})});r("g",{fill:"none","fill-rule":"evenodd","stroke-width":"2"},[r("circle",{cx:"22",cy:"22",r:"1"},[r("animate",{attributeName:"r",begin:"0s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),r("animate",{attributeName:"stroke-opacity",begin:"0s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"})]),r("circle",{cx:"22",cy:"22",r:"1"},[r("animate",{attributeName:"r",begin:"-0.9s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),r("animate",{attributeName:"stroke-opacity",begin:"-0.9s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"})])]);var le=[],X=[];function ct(t,e){if(t&&typeof document<"u"){var a,i=e.prepend===!0?"prepend":"append",c=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(c){var n=le.indexOf(s);n===-1&&(n=le.push(s)-1,X[n]={}),a=X[n]&&X[n][i]?X[n][i]:X[n][i]=u()}else a=u();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function u(){var o=document.createElement("style");if(o.setAttribute("type","text/css"),e.attributes)for(var d=Object.keys(e.attributes),l=0;l<d.length;l++)o.setAttribute(d[l],e.attributes[d[l]]);var m=i==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(m,o),o}}var ut=`
@keyframes vue-spinner-pulse {
0% {
		transform: scale(1);
		opacity: 1;
}
45% {
		transform: scale(0.1);
		opacity: 0.7;
}
80% {
		transform: scale(1);
		opacity: 1;
}
}
`;ct(ut,{});const dt={name:"VueSpinnerPulse"};({...dt,props:h({size:"15px",margin:"2px"})});r("g",{transform:"scale(0.55)"},[r("circle",{cx:"30",cy:"150",r:"30",fill:"currentColor"},[r("animate",{attributeName:"opacity",from:"0",to:"1",dur:"1s",begin:"0",repeatCount:"indefinite",keyTimes:"0;0.5;1",values:"0;1;1"})]),r("path",{d:"M90,150h30c0-49.7-40.3-90-90-90v30C63.1,90,90,116.9,90,150z",fill:"currentColor"},[r("animate",{attributeName:"opacity",from:"0",to:"1",dur:"1s",begin:"0.1",repeatCount:"indefinite",keyTimes:"0;0.5;1",values:"0;1;1"})]),r("path",{d:"M150,150h30C180,67.2,112.8,0,30,0v30C96.3,30,150,83.7,150,150z",fill:"currentColor"},[r("animate",{attributeName:"opacity",from:"0",to:"1",dur:"1s",begin:"0.2",repeatCount:"indefinite",keyTimes:"0;0.5;1",values:"0;1;1"})])]);var ce=[],R=[];function mt(t,e){if(t&&typeof document<"u"){var a,i=e.prepend===!0?"prepend":"append",c=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(c){var n=ce.indexOf(s);n===-1&&(n=ce.push(s)-1,R[n]={}),a=R[n]&&R[n][i]?R[n][i]:R[n][i]=u()}else a=u();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function u(){var o=document.createElement("style");if(o.setAttribute("type","text/css"),e.attributes)for(var d=Object.keys(e.attributes),l=0;l<d.length;l++)o.setAttribute(d[l],e.attributes[d[l]]);var m=i==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(m,o),o}}var ft=`
@keyframes vue-spinner-right {
0% {
		transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}
100% {
		transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);
}
}
@keyframes vue-spinner-left {
0% {
		transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}
100% {
		transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);
}
}
`;mt(ft,{});const pt={name:"VueSpinnerRing"};({...pt,props:h({size:"60px"})});r("g",{fill:"none","fill-rule":"evenodd",transform:"translate(1 1)","stroke-width":"2"},[r("circle",{cx:"22",cy:"22",r:"6"},[r("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),r("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),r("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]),r("circle",{cx:"22",cy:"22",r:"6"},[r("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),r("animate",{attributeName:"stroke-opacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),r("animate",{attributeName:"stroke-width",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]),r("circle",{cx:"22",cy:"22",r:"8"},[r("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"})])]);var ue=[],L=[];function gt(t,e){if(t&&typeof document<"u"){var a,i=e.prepend===!0?"prepend":"append",c=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(c){var n=ue.indexOf(s);n===-1&&(n=ue.push(s)-1,L[n]={}),a=L[n]&&L[n][i]?L[n][i]:L[n][i]=u()}else a=u();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function u(){var o=document.createElement("style");if(o.setAttribute("type","text/css"),e.attributes)for(var d=Object.keys(e.attributes),l=0;l<d.length;l++)o.setAttribute(d[l],e.attributes[d[l]]);var m=i==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(m,o),o}}var yt=`
@keyframes vue-spinner-even {
0% {
		transform: scale(1.1);
}
25% {
		transform: translateY(var(--515f9cd0--riseAmount____px_));
}
50% {
		transform: scale(0.4);
}
75% {
		transform: translateY(var(--515f9cd0-riseAmount____px_));
}
100% {
		transform: translateY(0) scale(1);
}
}
@keyframes vue-spinner-odd {
0% {
		transform: scale(0.4);
}
25% {
		transform: translateY(var(--515f9cd0-riseAmount____px_));
}
50% {
		transform: scale(1.1);
}
75% {
		transform: translateY(var(--515f9cd0--riseAmount____px_));
}
100% {
		transform: translateY(0) scale(0.75);
}
}
`;gt(yt,{});const vt={name:"VueSpinnerRise"};({...vt,props:h({size:"15px",margin:"2px"})});var de=[],q=[];function bt(t,e){if(t&&typeof document<"u"){var a,i=e.prepend===!0?"prepend":"append",c=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(c){var n=de.indexOf(s);n===-1&&(n=de.push(s)-1,q[n]={}),a=q[n]&&q[n][i]?q[n][i]:q[n][i]=u()}else a=u();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function u(){var o=document.createElement("style");if(o.setAttribute("type","text/css"),e.attributes)for(var d=Object.keys(e.attributes),l=0;l<d.length;l++)o.setAttribute(d[l],e.attributes[d[l]]);var m=i==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(m,o),o}}var ht=`
@keyframes vue-spinner-rotate-079b92bc {
0% {
		transform: rotate(0deg);
}
50% {
		transform: rotate(180deg);
}
100% {
		transform: rotate(360deg);
}
}
`;bt(ht,{});const xt={name:"VueSpinnerRotate"};({...xt,props:h({size:"15px",margin:"2px"})});var me=[],V=[];function _t(t,e){if(t&&typeof document<"u"){var a,i=e.prepend===!0?"prepend":"append",c=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(c){var n=me.indexOf(s);n===-1&&(n=me.push(s)-1,V[n]={}),a=V[n]&&V[n][i]?V[n][i]:V[n][i]=u()}else a=u();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function u(){var o=document.createElement("style");if(o.setAttribute("type","text/css"),e.attributes)for(var d=Object.keys(e.attributes),l=0;l<d.length;l++)o.setAttribute(d[l],e.attributes[d[l]]);var m=i==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(m,o),o}}var Ct=`
@keyframes vue-spinner-scale {
0% {
		transform: scaleY(1);
}
50% {
		transform: scaleY(0.4);
}
100% {
		transform: scaleY(1);
}
}
`;_t(Ct,{});const kt={name:"VueSpinnerScale"};({...kt,props:h({height:"35px",width:"4px",radius:"2px",margin:"2px"})});var fe=[],D=[];function $t(t,e){if(t&&typeof document<"u"){var a,i=e.prepend===!0?"prepend":"append",c=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(c){var n=fe.indexOf(s);n===-1&&(n=fe.push(s)-1,D[n]={}),a=D[n]&&D[n][i]?D[n][i]:D[n][i]=u()}else a=u();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function u(){var o=document.createElement("style");if(o.setAttribute("type","text/css"),e.attributes)for(var d=Object.keys(e.attributes),l=0;l<d.length;l++)o.setAttribute(d[l],e.attributes[d[l]]);var m=i==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(m,o),o}}var St=`
@keyframes vue-spinner-skew {
25% {
		transform: perspective(100px) rotateX(180deg) rotateY(0);
}
50% {
		transform: perspective(100px) rotateX(180deg) rotateY(180deg);
}
75% {
		transform: perspective(100px) rotateX(0) rotateY(180deg);
}
100% {
		transform: perspective(100px) rotateX(0) rotateY(0);
}
}
`;$t(St,{});const Nt={name:"VueSpinnerSkew"};({...Nt,props:h({size:"20px"})});var pe=[],Y=[];function Tt(t,e){if(t&&typeof document<"u"){var a,i=e.prepend===!0?"prepend":"append",c=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(c){var n=pe.indexOf(s);n===-1&&(n=pe.push(s)-1,Y[n]={}),a=Y[n]&&Y[n][i]?Y[n][i]:Y[n][i]=u()}else a=u();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function u(){var o=document.createElement("style");if(o.setAttribute("type","text/css"),e.attributes)for(var d=Object.keys(e.attributes),l=0;l<d.length;l++)o.setAttribute(d[l],e.attributes[d[l]]);var m=i==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(m,o),o}}var wt=`
@keyframes vue-spinner-square {
25% {
		transform: rotateX(180deg) rotateY(0);
}
50% {
		transform: rotateX(180deg) rotateY(180deg);
}
75% {
		transform: rotateX(0) rotateY(180deg);
}
100% {
		transform: rotateX(0) rotateY(0);
}
}
`;Tt(wt,{});const zt={name:"VueSpinnerSquare"};({...zt,props:h({size:"50px"})});var ge=[],F=[];function At(t,e){if(t&&typeof document<"u"){var a,i=e.prepend===!0?"prepend":"append",c=e.singleTag===!0,s=typeof e.container=="string"?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(c){var n=ge.indexOf(s);n===-1&&(n=ge.push(s)-1,F[n]={}),a=F[n]&&F[n][i]?F[n][i]:F[n][i]=u()}else a=u();t.charCodeAt(0)===65279&&(t=t.substring(1)),a.styleSheet?a.styleSheet.cssText+=t:a.appendChild(document.createTextNode(t))}function u(){var o=document.createElement("style");if(o.setAttribute("type","text/css"),e.attributes)for(var d=Object.keys(e.attributes),l=0;l<d.length;l++)o.setAttribute(d[l],e.attributes[d[l]]);var m=i==="prepend"?"afterbegin":"beforeend";return s.insertAdjacentElement(m,o),o}}var Mt=`
@keyframes vue-spinner-sync {
33% {
		transform: translateY(10px);
}
66% {
		transform: translateY(-10px);
}
100% {
		transform: translateY(0);
}
}
`;At(Mt,{});const Et={name:"VueSpinnerBounce"};({...Et,props:h({size:"15px",margin:"2px"})});r("defs",[r("linearGradient",{x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%",id:"a"},[r("stop",{"stop-color":"currentColor","stop-opacity":"0",offset:"0%"}),r("stop",{"stop-color":"currentColor","stop-opacity":".631",offset:"63.146%"}),r("stop",{"stop-color":"currentColor",offset:"100%"})])]),r("g",{transform:"translate(1 1)",fill:"none","fill-rule":"evenodd"},[r("path",{d:"M36 18c0-9.94-8.06-18-18-18",stroke:"url(#a)","stroke-width":"2"},[r("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})]),r("circle",{fill:"currentColor",cx:"36",cy:"18",r:"1"},[r("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})])]);export{qt as v};
