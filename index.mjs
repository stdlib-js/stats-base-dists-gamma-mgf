// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.3.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.2-esm/index.mjs";function r(t,n,r){return s(t)||s(n)||s(r)||n<0||r<=0||t>=r?NaN:e(1-t/r,-n)}function i(t,r){return s(t)||s(r)||t<0||r<=0?n(NaN):function(s){if(s>=r)return NaN;return e(1-s/r,-t)}}t(r,"factory",i);export{r as default,i as factory};
//# sourceMappingURL=index.mjs.map
