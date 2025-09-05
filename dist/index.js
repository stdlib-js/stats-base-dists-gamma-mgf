"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=s(function(F,o){
var u=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-special-pow/dist');function y(e,r,n){var i;return u(e)||u(r)||u(n)||r<0||n<=0||e>=n?NaN:(i=1-e/n,N(i,-r))}o.exports=y
});var a=s(function(O,v){
var m=require('@stdlib/utils-constant-function/dist'),f=require('@stdlib/math-base-assert-is-nan/dist'),x=require('@stdlib/math-base-special-pow/dist');function g(e,r){if(f(e)||f(r)||e<0||r<=0)return m(NaN);return n;function n(i){var t;return i>=r?NaN:(t=1-i/r,x(t,-e))}}v.exports=g
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=c(),d=a();w(q,"factory",d);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
