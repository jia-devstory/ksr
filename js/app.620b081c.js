(function(){"use strict";var e={6910:function(e,n,t){var o=t(9242),r=t(3396),a=t.p+"img/logo.ba8f8dfb.svg";const l=e=>((0,r.dD)("data-v-7c0b68b2"),e=e(),(0,r.Cn)(),e),i=l((()=>(0,r._)("img",{src:a,alt:"KSR 로고"},null,-1)));function u(e,n){const t=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.j4)(t,{class:"logo",to:"/"},{default:(0,r.w5)((()=>[i])),_:1})}var s=t(89);const c={},p=(0,s.Z)(c,[["render",u],["__scopeId","data-v-7c0b68b2"]]);var d=p;const m={class:"header-inner"},_={class:"account"};var f={__name:"Header",setup(e){return(e,n)=>{const t=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.iD)("header",null,[(0,r._)("div",m,[(0,r.Wm)(d),(0,r._)("nav",null,[(0,r.Wm)(t,{to:"/motorsport"},{default:(0,r.w5)((()=>[(0,r.Uk)("모터스포츠")])),_:1}),(0,r.Wm)(t,{to:"/theCamp"},{default:(0,r.w5)((()=>[(0,r.Uk)("더 캠프")])),_:1}),(0,r.Wm)(t,{to:"/mobilityFestival"},{default:(0,r.w5)((()=>[(0,r.Uk)("모빌리티 페스티벌")])),_:1}),(0,r.Wm)(t,{to:"/driver"},{default:(0,r.w5)((()=>[(0,r.Uk)("드라이버")])),_:1}),(0,r.Wm)(t,{to:"/market"},{default:(0,r.w5)((()=>[(0,r.Uk)("마켓")])),_:1}),(0,r.Wm)(t,{to:"/community"},{default:(0,r.w5)((()=>[(0,r.Uk)("커뮤니티")])),_:1}),(0,r.Wm)(t,{to:"/customerSupport"},{default:(0,r.w5)((()=>[(0,r.Uk)("고객지원")])),_:1})]),(0,r._)("div",_,[(0,r.Wm)(t,{class:"join",to:"/join"},{default:(0,r.w5)((()=>[(0,r.Uk)("회원가입")])),_:1}),(0,r.Wm)(t,{class:"login",to:"/login"},{default:(0,r.w5)((()=>[(0,r.Uk)("로그인")])),_:1})])])])}}};const v=(0,s.Z)(f,[["__scopeId","data-v-2c48c2c2"]]);var g=v,h={__name:"App",setup(e){return(e,n)=>{const t=(0,r.up)("RouterView");return(0,r.wg)(),(0,r.iD)(r.HY,null,["login"!==e.$route.name&&"joinAgree"!==e.$route.name&&"joinInputs"!==e.$route.name?((0,r.wg)(),(0,r.j4)(g,{key:0})):(0,r.kq)("",!0),(0,r.Wm)(t)],64)}}};const w=h;var b=w,k=t(2483);const y={id:"home"};function j(e,n){return(0,r.wg)(),(0,r.iD)("main",y)}const x={},U=(0,s.Z)(x,[["render",j]]);var W=U;const A=e=>((0,r.dD)("data-v-ec922cea"),e=e(),(0,r.Cn)(),e),S={id:"login"},O={class:"login-inner"},D={class:"title"},L=A((()=>(0,r._)("div",{class:"text-wrapper"},[(0,r._)("span",null,"KSR 로그인"),(0,r._)("span",null,"KSR에 오신 것을 환영합니다")],-1))),I={class:"join"},R=A((()=>(0,r._)("span",null,"신규 사용자이신가요? ",-1))),C=A((()=>(0,r._)("button",{type:"submit"},"로그인",-1))),P={class:"option"},Z=A((()=>(0,r._)("input",{id:"saveState",type:"checkbox",name:"saveState"},null,-1))),q=A((()=>(0,r._)("label",{for:"saveState"},"로그인 상태 유지",-1)));function H(e,n,t,a,l,i){const u=(0,r.up)("Logo"),s=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.iD)("main",S,[(0,r._)("div",O,[(0,r._)("div",D,[(0,r.Wm)(u),L]),(0,r._)("form",{onSubmit:n[2]||(n[2]=(0,o.iM)(((...e)=>i.fnLogin&&i.fnLogin(...e)),["prevent"]))},[(0,r._)("div",I,[R,(0,r.Wm)(s,{to:"/join"},{default:(0,r.w5)((()=>[(0,r.Uk)("회원가입")])),_:1})]),(0,r.wy)((0,r._)("input",{type:"email",name:"userId","onUpdate:modelValue":n[0]||(n[0]=e=>l.user_id=e),placeholder:"이메일 ID"},null,512),[[o.nr,l.user_id]]),(0,r.wy)((0,r._)("input",{type:"password",name:"userPw","onUpdate:modelValue":n[1]||(n[1]=e=>l.user_pw=e),placeholder:"비밀번호"},null,512),[[o.nr,l.user_pw]]),C,(0,r._)("div",P,[Z,q,(0,r.Wm)(s,{to:"/findAccount"},{default:(0,r.w5)((()=>[(0,r.Uk)("아이디/비밀번호 찾기")])),_:1})])],32)])])}var K={components:{Logo:d},data(){return{user_id:"",user_pw:""}},methods:{fnLogin(){""!==this.user_id?""!==this.user_pw?alert("로그인되었습니다."):alert("비밀번호를 입력하세요."):alert("ID를 입력하세요.")}}};const M=(0,s.Z)(K,[["render",H],["__scopeId","data-v-ec922cea"]]);var T=M;const V={id:"join"},F={class:"join-inner"},$={class:"title"},J=["innerHTML"];var E={__name:"Join",setup(e){const n=(0,r.Fl)((()=>"joinAgree"===(0,k.yj)().name?"<span>회원가입을 위해<br>아래 약관에 동의해주세요</span>":"<span>회원가입에 필요한 정보를<br>입력해주세요</span>"));return(e,t)=>{const o=(0,r.up)("RouterView");return(0,r.wg)(),(0,r.iD)("main",V,[(0,r._)("div",F,[(0,r._)("div",$,[(0,r.Wm)(d),(0,r._)("div",{class:"text-wrapper",innerHTML:n.value},null,8,J)]),(0,r.Wm)(o)])])}}};const Y=(0,s.Z)(E,[["__scopeId","data-v-4d8b9696"]]);var z=Y;const B={id:"joinAgree"},G={class:"item"},N=(0,r._)("label",{for:"selectAll"},null,-1),Q=(0,r._)("div",{class:"text-wrapper"},[(0,r._)("span",{class:"name"},"모두 동의합니다"),(0,r._)("span",{class:"explain"},[(0,r.Uk)(" 모두 동의는 필수 및 선택 정보에 대한 동의가 포함되어 있으며,"),(0,r._)("br"),(0,r.Uk)(" 선택 항목에 동의를 하지 않은 경우에도 서비스를 이용할 수 있습니다 ")])],-1),X={class:"item"},ee=(0,r._)("label",{for:"selectAgreement"},null,-1),ne=(0,r._)("div",{class:"text-wrapper"},[(0,r._)("span",{class:"name"},[(0,r._)("mark",null,"(필수)"),(0,r.Uk)("  KSR 이용약관 동의 ")])],-1),te=(0,r._)("div",{class:"open-detail"},[(0,r._)("a",null,"보기")],-1),oe={class:"item"},re=(0,r._)("label",{for:"selectPolicy"},null,-1),ae=(0,r._)("div",{class:"text-wrapper"},[(0,r._)("span",{class:"name"},[(0,r._)("mark",null,"(필수)"),(0,r.Uk)("  개인정보 수집 및 이용 동의 ")])],-1),le=(0,r._)("div",{class:"open-detail"},[(0,r._)("a",null,"보기")],-1),ie={class:"item"},ue=(0,r._)("label",{for:"selectPromotion"},null,-1),se=(0,r._)("div",{class:"text-wrapper"},[(0,r._)("span",{class:"name"}," (선택) 프로모션 정보 수집 동의 ")],-1),ce=(0,r._)("div",{class:"open-detail"},[(0,r._)("a",null,"보기")],-1),pe=["disabled"];var de={__name:"JoinAgree",setup(e){const n=e=>{const n=document.querySelectorAll("input[name='agree']");for(let t of n)e.target.checked?t.checked=!0:t.checked=!1},t=e=>{const n=document.querySelector("#selectAll"),t=document.querySelectorAll("input[name='agree']"),o=document.querySelectorAll("input[name='agree']:checked");t.length===o.length?n.checked=!0:n.checked=!1};return(e,o)=>{const a=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.iD)("form",B,[(0,r._)("div",G,[(0,r._)("input",{id:"selectAll",type:"checkbox",onChange:n},null,32),N,Q]),(0,r._)("div",X,[(0,r._)("input",{id:"selectAgreement",type:"checkbox",name:"agree",onChange:t},null,32),ee,ne,te]),(0,r._)("div",oe,[(0,r._)("input",{id:"selectPolicy",type:"checkbox",name:"agree",value:"policy",onChange:t},null,32),re,ae,le]),(0,r._)("div",ie,[(0,r._)("input",{id:"selectPromotion",type:"checkbox",name:"agree",value:"policy",onChange:t},null,32),ue,se,ce]),(0,r.Wm)(a,{to:"/join/inputs"},{default:(0,r.w5)((()=>[(0,r._)("button",{type:"submit",disabled:!e.btnState},"다음",8,pe)])),_:1})])}}};const me=de;var _e=me;const fe={id:"joinInputs"};function ve(e,n){return(0,r.wg)(),(0,r.iD)("form",fe)}const ge={},he=(0,s.Z)(ge,[["render",ve]]);var we=he;const be=[{path:"/",name:"home",component:W},{path:"/login",name:"login",component:T},{path:"/join",name:"join",component:z,children:[{path:"",name:"joinAgree",component:_e},{path:"inputs",name:"joinInputs",component:we}]}],ke=(0,k.p7)({history:(0,k.PO)("/"),routes:be});var ye=ke;(0,o.ri)(b).use(ye).mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return e[o].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,a){if(!o){var l=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],a=e[c][2];for(var i=!0,u=0;u<o.length;u++)(!1&a||l>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[u])}))?o.splice(u--,1):(i=!1,a<l&&(l=a));if(i){e.splice(c--,1);var s=r();void 0!==s&&(n=s)}}return n}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.p="/"}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,l=o[0],i=o[1],u=o[2],s=0;if(l.some((function(n){return 0!==e[n]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(u)var c=u(t)}for(n&&n(o);s<l.length;s++)a=l[s],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(c)},o=self["webpackChunkksr_platform"]=self["webpackChunkksr_platform"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(6910)}));o=t.O(o)})();
//# sourceMappingURL=app.620b081c.js.map