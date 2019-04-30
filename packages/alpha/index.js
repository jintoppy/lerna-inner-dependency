import getAllNames from 'beta/dist/beta1';

export const getData = () => {
    const arr = [{name: 'A'}, {name: 'B'}, {name: 'C'}];
    return getAllNames(arr);
};
