console.log('hello');
// import Animal from './inner';

document.getElementById('btn-to-load-alpha').addEventListener('click', () => {
    import('alpha').then((alpha) => {
        //console.log(alpha)
        console.log(alpha.getData());
    });
    // require.ensure([], (require) => {
    //     const getData = require('alpha').getData;
    //     console.log(getData());
    // });
});

document.getElementById('btn-to-load-beta').addEventListener('click', () => {
    import('beta/dist/beta1').then(beta1 => {
        const getAllNames = beta1.default;
        console.log(getAllNames([{name: 'h'}, {name: 'e'}]));
    });
    // require.ensure([], (require) => {
    //     const getAllNames = require('beta/dist/beta1').default;
    //     console.log(getAllNames([{name: 'h'}, {name: 'e'}]));
    // });
});

// const res = new Animal([{name: 'abc'},{name: 'def'} ]).getList();
// console.log(res);