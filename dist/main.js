webpackJsonp([3],{

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(console) {

console.log('hello');
// import Animal from './inner';

document.getElementById('btn-to-load-alpha').addEventListener('click', function () {
    __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 10)).then(function (alpha) {
        //console.log(alpha)
        console.log(alpha.getData());
    });
    // require.ensure([], (require) => {
    //     const getData = require('alpha').getData;
    //     console.log(getData());
    // });
});

document.getElementById('btn-to-load-beta').addEventListener('click', function () {
    __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 9)).then(function (beta1) {
        var getAllNames = beta1.default;
        console.log(getAllNames([{ name: 'h' }, { name: 'e' }]));
    });
    // require.ensure([], (require) => {
    //     const getAllNames = require('beta/dist/beta1').default;
    //     console.log(getAllNames([{name: 'h'}, {name: 'e'}]));
    // });
});

// const res = new Animal([{name: 'abc'},{name: 'def'} ]).getList();
// console.log(res);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })

},[3]);