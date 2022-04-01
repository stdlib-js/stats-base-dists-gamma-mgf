// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,u=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__;var c=t,l=function(r,n,t){var c,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(a.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),v="get"in t,y="set"in t,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&o&&o.call(r,n,t.get),y&&i&&i.call(r,n,t.set),r},v=n()?c:l;var y=function(r,n,t){v(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})};var p=function(r){return r!=r},b=Math.floor;var w=function(r){return b(r)===r},A=w;var _=function(r){return A(r/2)};var m=function(r){return _(r>0?r-1:r+1)},d=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY,U=d,h=s;var N=function(r){return r===U||r===h},j=Math.sqrt;var g=function(r){return Math.abs(r)};var I=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var O=function(){return I&&"symbol"==typeof Symbol.toStringTag},S=Object.prototype.toString,E=S;var F=function(r){return E.call(r)},H=Object.prototype.hasOwnProperty;var T=function(r,n){return null!=r&&H.call(r,n)},G="function"==typeof Symbol?Symbol.toStringTag:"",P=T,L=G,V=S;var W=F,M=function(r){var n,t,e;if(null==r)return V.call(r);t=r[L],n=P(r,L);try{r[L]=void 0}catch(n){return V.call(r)}return e=V.call(r),n?r[L]=t:delete r[L],e},k=O()?M:W,x=k,Y="function"==typeof Uint32Array;var q="function"==typeof Uint32Array?Uint32Array:null,C=function(r){return Y&&r instanceof Uint32Array||"[object Uint32Array]"===x(r)},z=q;var B=function(){var r,n;if("function"!=typeof z)return!1;try{n=new z(n=[1,3.14,-3.14,4294967296,4294967297]),r=C(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var D="function"==typeof Uint32Array?Uint32Array:void 0,J=function(){throw new Error("not implemented")},K=B()?D:J,Q=k,R="function"==typeof Float64Array;var X="function"==typeof Float64Array?Float64Array:null,Z=function(r){return R&&r instanceof Float64Array||"[object Float64Array]"===Q(r)},$=X;var rr=function(){var r,n;if("function"!=typeof $)return!1;try{n=new $([1,3.14,-3.14,NaN]),r=Z(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var nr="function"==typeof Float64Array?Float64Array:void 0,tr=function(){throw new Error("not implemented")},er=rr()?nr:tr,ur=k,or="function"==typeof Uint8Array;var ir="function"==typeof Uint8Array?Uint8Array:null,ar=function(r){return or&&r instanceof Uint8Array||"[object Uint8Array]"===ur(r)},fr=ir;var cr=function(){var r,n;if("function"!=typeof fr)return!1;try{n=new fr(n=[1,3.14,-3.14,256,257]),r=ar(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var lr="function"==typeof Uint8Array?Uint8Array:void 0,vr=function(){throw new Error("not implemented")},yr=cr()?lr:vr,pr=k,br="function"==typeof Uint16Array;var wr="function"==typeof Uint16Array?Uint16Array:null,Ar=function(r){return br&&r instanceof Uint16Array||"[object Uint16Array]"===pr(r)},_r=wr;var mr=function(){var r,n;if("function"!=typeof _r)return!1;try{n=new _r(n=[1,3.14,-3.14,65536,65537]),r=Ar(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var dr,sr="function"==typeof Uint16Array?Uint16Array:void 0,Ur=function(){throw new Error("not implemented")},hr={uint16:mr()?sr:Ur,uint8:yr};(dr=new hr.uint16(1))[0]=4660;var Nr,jr,gr=52===new hr.uint8(dr.buffer)[0];!0===gr?(Nr=1,jr=0):(Nr=0,jr=1);var Ir=K,Or={HIGH:Nr,LOW:jr},Sr=new er(1),Er=new Ir(Sr.buffer),Fr=Or.HIGH,Hr=Or.LOW;var Tr=function(r,n){return Sr[0]=n,r[0]=Er[Fr],r[1]=Er[Hr],r};var Gr=function(r,n){return 1===arguments.length?Tr([0,0],r):Tr(r,n)},Pr=K,Lr=!0===gr?0:1,Vr=new er(1),Wr=new Pr(Vr.buffer);var Mr=function(r,n){return Vr[0]=r,Wr[Lr]=n>>>0,Vr[0]},kr=Mr;var xr=function(r){return 0|r},Yr=K,qr=!0===gr?1:0,Cr=new er(1),zr=new Yr(Cr.buffer);var Br,Dr,Jr=function(r){return Cr[0]=r,zr[qr]};!0===gr?(Br=1,Dr=0):(Br=0,Dr=1);var Kr=K,Qr={HIGH:Br,LOW:Dr},Rr=new er(1),Xr=new Kr(Rr.buffer),Zr=Qr.HIGH,$r=Qr.LOW;var rn=function(r,n){return Xr[Zr]=r,Xr[$r]=n,Rr[0]},nn=rn,tn=Gr,en=Jr,un=nn,on=[0,0];var an=function(r,n){var t,e;return tn(on,r),t=on[0],t&=2147483647,e=en(n),un(t|=e&=2147483648,on[1])},fn=m,cn=an,ln=s,vn=d;var yn=function(r,n){return n===ln?vn:n===vn?0:n>0?fn(n)?r:0:fn(n)?cn(vn,r):vn},pn=Jr;var bn=function(r,n){return(2147483647&pn(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},wn=g,An=d;var _n=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:wn(r)<1==(n===An)?0:An},mn=K,dn=!0===gr?1:0,sn=new er(1),Un=new mn(sn.buffer);var hn=function(r,n){return sn[0]=r,Un[dn]=n>>>0,sn[0]};var Nn=Jr,jn=kr,gn=hn,In=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},On=[1,1.5],Sn=[0,.5849624872207642],En=[0,1.350039202129749e-8];var Fn=kr,Hn=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Tn=N,Gn=p,Pn=g;var Ln=function(r,n){return Gn(n)||Tn(n)?(r[0]=n,r[1]=0,r):0!==n&&Pn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var Vn=Jr;var Wn=function(r){var n=Vn(r);return(n=(2146435072&n)>>>20)-1023|0},Mn=d,kn=s,xn=p,Yn=N,qn=an,Cn=function(r,n){return 1===arguments.length?Ln([0,0],r):Ln(r,n)},zn=Wn,Bn=Gr,Dn=nn,Jn=[0,0],Kn=[0,0];var Qn=function(r,n){var t,e;return 0===n||0===r||xn(r)||Yn(r)?r:(Cn(Jn,r),n+=Jn[1],(n+=zn(r=Jn[0]))<-1074?qn(0,r):n>1023?r<0?kn:Mn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Bn(Kn,r),t=Kn[0],t&=2148532223,e*Dn(t|=n+1023<<20,Kn[1])))};var Rn=Jr,Xn=hn,Zn=kr,$n=xr,rt=Qn,nt=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var tt=p,et=m,ut=N,ot=w,it=j,at=g,ft=Gr,ct=kr,lt=xr,vt=s,yt=d,pt=yn,bt=bn,wt=_n,At=function(r,n,t){var e,u,o,i,a,f,c,l,v,y,p,b,w,A,_,m,d,s,U,h;return s=0,t<1048576&&(s-=53,t=Nn(n*=9007199254740992)),s+=(t>>20)-1023|0,t=1072693248|(U=1048575&t|0),U<=235662?h=0:U<767610?h=1:(h=0,s+=1,t-=1048576),e=524288+(t>>1|536870912),a=(d=1/((n=gn(n,t))+(c=On[h])))*((m=n-c)-(i=jn(u=m*d,0))*(f=gn(0,e+=h<<18))-i*(n-(f-c))),_=(o=u*u)*o*In(o),f=jn(f=3+(o=i*i)+(_+=a*(i+u)),0),w=(p=-7.028461650952758e-9*(v=jn(v=(m=i*f)+(d=a*f+(_-(f-3-o))*u),0))+.9617966939259756*(d-(v-m))+En[h])-((b=jn(b=(y=.9617967009544373*v)+p+(l=Sn[h])+(A=s),0))-A-l-y),r[0]=b,r[1]=w,r},_t=function(r,n){var t,e,u,o,i;return t=(i=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*Hn(u)))-((e=Fn(e=(o=1.4426950216293335*u)+i,0))-o),r[0]=e,r[1]=t,r},mt=function(r,n,t){var e,u,o,i,a,f,c,l,v,y;return y=((v=2147483647&r|0)>>20)-1023|0,l=0,v>1071644672&&(e=((l=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-y>>>0,r<0&&(l=-l),n-=o=Xn(0,e)),f=(a=.6931471805599453*(t-((o=Zn(o=t+n,0))-n))+-1.904654299957768e-9*o)-((c=(i=.6931471824645996*o)+a)-i),u=c-(o=c*c)*nt(o),r=Rn(c=1-(c*u/(u-2)-(f+c*f)-c)),r=$n(r),c=(r+=l<<20>>>0)>>20<=0?rt(c,l):Xn(c,r)},dt=1e300,st=1e-300,Ut=[0,0],ht=[0,0];var Nt=function r(n,t){var e,u,o,i,a,f,c,l,v,y,p,b,w,A;if(tt(n)||tt(t))return NaN;if(ft(Ut,t),a=Ut[0],0===Ut[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return it(n);if(-.5===t)return 1/it(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(ut(t))return wt(n,t)}if(ft(Ut,n),i=Ut[0],0===Ut[1]){if(0===i)return pt(n,t);if(1===n)return 1;if(-1===n&&et(t))return-1;if(ut(n))return n===vt?r(-0,-t):t<0?0:yt}if(n<0&&!1===ot(t))return(n-n)/(n-n);if(o=at(n),e=2147483647&i|0,u=2147483647&a|0,c=a>>>31|0,f=(f=i>>>31|0)&&et(t)?-1:1,u>1105199104){if(u>1139802112)return bt(n,t);if(e<1072693247)return 1===c?f*dt*dt:f*st*st;if(e>1072693248)return 0===c?f*dt*dt:f*st*st;p=_t(ht,o)}else p=At(ht,o,e);if(y=(t-(l=ct(t,0)))*p[0]+t*p[1],v=l*p[0],ft(Ut,b=y+v),w=lt(Ut[0]),A=lt(Ut[1]),w>=1083179008){if(0!=(w-1083179008|A))return f*dt*dt;if(y+8008566259537294e-32>b-v)return f*dt*dt}else if((2147483647&w)>=1083231232){if(0!=(w-3230714880|A))return f*st*st;if(y<=b-v)return f*st*st}return f*(b=mt(w,v,y))},jt=p,gt=Nt;var It=function(r){return function(){return r}},Ot=p,St=Nt;var Et=function(r,n,t){return jt(r)||jt(n)||jt(t)||n<0||t<=0||r>=t?NaN:gt(1-r/t,-n)},Ft=function(r,n){return Ot(r)||Ot(n)||r<0||n<=0?It(NaN):function(t){if(t>=n)return NaN;return St(1-t/n,-r)}};y(Et,"factory",Ft);var Ht=Et;export{Ht as default,Ft as factory};
//# sourceMappingURL=mod.js.map
