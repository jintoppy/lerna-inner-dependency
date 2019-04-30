console.log('hello');

document.getElementById('btn-to-load-alpha').addEventListener('click', () => {
    import('alpha').then(({getData}) => {
        console.log(getData());
    });
});

document.getElementById('btn-to-load-beta').addEventListener('click', () => {
    import('beta/dist/beta1').then(beta1 => {
        debugger;
        const getAllNames = beta1.default;
        console.log(getAllNames([{name: 'h'}, {name: 'e'}]));
    });
});