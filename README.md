<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Moment-Generating Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Gamma][gamma-distribution] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a [gamma][gamma-distribution] random variable is

<!-- <equation class="equation" label="eq:gamma_mgf_function" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \left( 1 - \frac{t}{\beta} \right)^{-\alpha}" alt="Moment-generating function (MGF) for a gamma distribution."> -->

<div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \left( 1 - \frac{t}{\beta} \right)^{-\alpha}" data-equation="eq:gamma_mgf_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/gamma/mgf/docs/img/equation_gamma_mgf_function.svg" alt="Moment-generating function (MGF) for a gamma distribution.">
    <br>
</div>

<!-- </equation> -->

where `alpha` is the shape parameter and `beta` is the rate parameter. For `t >= beta`, the MGF is not defined.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
mgf = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gamma-mgf@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var mgf = require( 'path/to/vendor/umd/stats-base-dists-gamma-mgf/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gamma-mgf@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.mgf;
})();
</script>
```

#### mgf( t, alpha, beta )

Evaluates the [moment-generating function][mgf] (MGF) for a [gamma][gamma-distribution] distribution with parameters `alpha` (shape parameter) and `beta` (rate parameter).

```javascript
var y = mgf( 0.5, 0.5, 1.0 );
// returns ~1.414

y = mgf( 0.1, 1.0, 1.0 );
// returns ~1.111

y = mgf( -1.0, 4.0, 2.0 );
// returns ~0.198
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mgf( NaN, 1.0, 1.0 );
// returns NaN

y = mgf( 0.0, NaN, 1.0 );
// returns NaN

y = mgf( 0.0, 1.0, NaN );
// returns NaN
```

If provided `t >= beta`, the function returns `NaN`.

```javascript
var y = mgf( 2.0, 4.0, 1.0 );
// returns NaN
```

If provided `alpha < 0`, the function returns `NaN`.

```javascript
var y = mgf( 2.0, -0.5, 1.0 );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = mgf( 2.0, 1.0, 0.0 );
// returns NaN

y = mgf( 2.0, 1.0, -1.0 );
// returns NaN
```

#### mgf.factory( alpha, beta )

Return a function for evaluating the [MGF][mgf] of a [gamma][gamma-distribution] distribution with parameters `alpha` (shape parameter) and `beta` (rate parameter).

```javascript
var mymgf = mgf.factory( 3.0, 1.5 );

var y = mymgf( 1.0 );
// returns ~27.0

y = mymgf( 0.5 );
// returns ~3.375
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gamma-mgf@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var a;
var b;
var t;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    t = randu();
    a = randu() * 5.0;
    b = a + (randu() * 5.0);
    v = mgf( t, a, b );
    console.log( 't: %d, a: %d, b: %d, M_X(t;a,b): %d', t.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), v.toFixed( 4 ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-gamma-mgf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-gamma-mgf

[test-image]: https://github.com/stdlib-js/stats-base-dists-gamma-mgf/actions/workflows/test.yml/badge.svg?branch=v0.0.7
[test-url]: https://github.com/stdlib-js/stats-base-dists-gamma-mgf/actions/workflows/test.yml?query=branch:v0.0.7

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-gamma-mgf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-gamma-mgf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-gamma-mgf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-gamma-mgf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-gamma-mgf/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-gamma-mgf/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-gamma-mgf/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-gamma-mgf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-gamma-mgf/main/LICENSE

[gamma-distribution]: https://en.wikipedia.org/wiki/Gamma_distribution

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
